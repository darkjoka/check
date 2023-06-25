"use client"

import { head } from "@/config/table"
import { useMounted } from "@/hooks/use-mounted"
import { useRecommendation } from "@/hooks/use-recommendation"
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

export function Recommendation() {
	const recommendations = useRecommendation()
	const mounted = useMounted()
	return mounted ? (
		<QuestionTable>
			<QuestionTableHeading>
				<QuestionTableHead {...{ head }} />
			</QuestionTableHeading>
			<QuestionTableBody>
				{recommendations.map((data, key) => (
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
	) : null
}
