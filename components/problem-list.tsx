"use client"

import { useState } from "react"
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
  const problems = mapProblemsToCategory(getProblemViaCategory(category))

  return (
    <Accordion collapsible type="single">
      {Array.from(problems.keys()).map((value, key) => (
        <AccordionItem key={value} {...{ value }}>
          <AccordionTrigger>{value}</AccordionTrigger>
          <AccordionContent>
            <ScrollArea className="h-fit">
              <ScrollAreaViewport className="max-h-96">
                <QuestionTable>
                  <QuestionTableHeading>
                    <QuestionTableHead {...{ head }} />
                  </QuestionTableHeading>
                  <QuestionTableBody>
                    {problems.get(value)?.map((data, key) => (
                      <QuestionTableRow
                        key={key}
                        heading={head}
                        data={convertToJsonx(data as unknown as Data)}
                      >
                        <td>
                          <DifficultyButton signature={data.src} />
                        </td>
                        <td>
                          <RatingAction rating="" signature={data.src} />
                        </td>
                      </QuestionTableRow>
                    ))}
                  </QuestionTableBody>
                </QuestionTable>
              </ScrollAreaViewport>
              <ScrollAreaScrollBar />
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
