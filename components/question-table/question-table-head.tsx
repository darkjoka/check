import { TableHead } from "./question-table"

export function QuestionTableHead({ head }: { head: TableHead[] }) {
  return (
    <tr className="[&>*:first-child]:w-8/12">
      {head.map((heading, index) => (
        <th key={index} className="py-4">
          <span className="flex text-sm font-normal text-muted-foreground">
            {heading.heading}
          </span>
        </th>
      ))}
    </tr>
  )
}
