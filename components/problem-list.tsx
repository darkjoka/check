"use client"

import { type Data } from "@/types"

import { head } from "@/config/table"
import { getProblemViaCategory, mapProblemsToCategory } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ScrollArea,
  ScrollAreaScrollBar,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area"
import { DifficultyButton } from "@/components/difficulty-button"
import {
  convertToJsonx,
  QuestionTable,
  QuestionTableBody,
  QuestionTableHead,
  QuestionTableHeading,
  QuestionTableRow,
} from "@/components/question-table"
import { RatingAction } from "@/components/rating-action"

export function ProblemList({ category }: { category: string }) {
  const problems = mapProblemsToCategory(
    getProblemViaCategory(category) as Data[]
  )

  return (
    <Accordion collapsible type="single">
      {Array.from(problems.keys()).map((value, key) => (
        <AccordionItem key={value} {...{ value }}>
          <AccordionTrigger>{value}</AccordionTrigger>
          <AccordionContent>
            <ScrollArea className="h-fit">
              <ScrollAreaViewport className="max-h-96">
                <div className="container">
                  <QuestionTable>
                    <QuestionTableHeading>
                      <QuestionTableHead {...{ head }} />
                    </QuestionTableHeading>
                    <QuestionTableBody>
                      {problems.get(value)?.map((data, key) => (
                        <QuestionTableRow
                          key={key}
                          heading={head}
                          data={convertToJsonx(data)}
                        >
                          <td>
                            <DifficultyButton {...{ data }} />
                          </td>
                          <td>
                            <RatingAction {...{ data }} />
                          </td>
                        </QuestionTableRow>
                      ))}
                    </QuestionTableBody>
                  </QuestionTable>
                </div>
              </ScrollAreaViewport>
              <ScrollAreaScrollBar />
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
