"use client"

import { MoreHorizontal } from "lucide-react"

import { DifficultyButton } from "./difficulty-button"
import { TableHead } from "./question-table"
import { Jsonx } from "./util"

export function QuestionTableRow({
  heading,
  data,
}: {
  heading: TableHead[]
  data: Jsonx
}) {
  return (
    <tr className="h-14 border-t border-t-border hover:bg-accent">
      {heading.map((head, key) => {
        return head.accessor !== "" ? (
          <td {...{ key }}>{data[head.accessor]}</td>
        ) : null
      })}
      <td className="">
        {/* Todo:update with functions */}
        <DifficultyButton state="" updateState={(x) => null} />
      </td>
      <td>
        <button>
          <MoreHorizontal className="text-sm" />
        </button>
      </td>
    </tr>
  )
}
