"use client"

import { DifficultyIndicator } from "@/components/question-table/difficulty-indicator"
import { QuestionLink } from "@/components/question-table/question-link"

export type Data = {
  title: string
  src: string
  difficulty: "easy" | "medium" | "hard"
  type: string[]
  category: string
}

// convert data from json to jsx format
export function convertToJsonx(data: Data) {
  return {
    title: <QuestionLink link={data.src} text={data.title} />,
    difficulty: <DifficultyIndicator difficulty={data.difficulty} />,
  }
}

export type Jsonx = ReturnType<typeof convertToJsonx>
