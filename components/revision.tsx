"use client"

import { head } from "@/config/table"
import { useMounted } from "@/hooks/use-mounted"
import { useRevision } from "@/hooks/use-revision"
import {
	convertToJsonx,
	QuestionTable,
	QuestionTableBody,
	QuestionTableHead,
	QuestionTableHeading,
	QuestionTableRow,
} from "@/components/question-table"

import { DifficultyButton } from "./difficulty-button"
import { RatingAction } from "./rating-action"

export function Revision() {
	const revisions = useRevision()
	const mounted = useMounted()
	return mounted ? (
		<>
			{revisions.length ? (
				<QuestionTable>
					<QuestionTableHeading>
						<QuestionTableHead {...{ head }} />
					</QuestionTableHeading>
					<QuestionTableBody>
						{revisions.map((data, key) => (
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
			) : (
				<div className="flex h-80 w-full items-center justify-center rounded border border-border text-sm text-muted-foreground">
					Area will be populated as you solve questions over some days
				</div>
			)}
		</>
	) : (
		<div className="h-80"></div>
	)
}
