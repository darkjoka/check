"use client"

import { type Data } from "@/types"

import { DifficultyIndicator } from "@/components/question-table/difficulty-indicator"
import { QuestionLink } from "@/components/question-table/question-link"

// convert data from json to jsx format
export function convertToJsonx(data: Data) {
  return {
    title: <QuestionLink link={data.src} text={data.title} />,
    difficulty: <DifficultyIndicator difficulty={data.difficulty} />,
  }
}

export type Jsonx = ReturnType<typeof convertToJsonx>
