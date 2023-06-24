"use client"

import { TableHead } from "./question-table"
import { Jsonx } from "./util"

interface QuestionTableRowProps {
  heading: TableHead[]
  data: Jsonx
  children: React.ReactNode
}

export function QuestionTableRow({
  heading,
  data,
  children,
}: QuestionTableRowProps) {
  return (
    <tr className="h-14 border-t border-t-border hover:bg-accent">
      {heading.map((head, key) => {
        return head.accessor !== "" ? (
          <td key={key}>{data.get(head.accessor)}</td>
        ) : null
      })}
      {children}
    </tr>
  )
}
