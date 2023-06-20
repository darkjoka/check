"use client"

import { QuestionTableHead } from "@/components/question-table/question-table-head"
import { QuestionTableRow } from "@/components/question-table/question-table-row"

export interface TableHead {
  heading: string
  accessor: string
}

interface QuestionTableProps {
  children: React.ReactNode
}

function QuestionTable({ children }: QuestionTableProps) {
  return <table className="w-full">{children}</table>
}

interface QuestionTableHeadingProps {
  children: React.ReactNode
}

function QuestionTableHeading({ children }: QuestionTableHeadingProps) {
  return <thead>{children}</thead>
}

interface QuestionTableBodyProps {
  children: React.ReactNode
}

function QuestionTableBody({ children }: QuestionTableBodyProps) {
  return <tbody>{children}</tbody>
}

export {
  QuestionTable,
  QuestionTableHead,
  QuestionTableBody,
  QuestionTableRow,
  QuestionTableHeading,
}
