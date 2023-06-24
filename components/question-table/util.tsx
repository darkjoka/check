"use client"

import { type Data } from "@/types"

import { DifficultyIndicator } from "@/components/difficulty-indicator"
import { QuestionLink } from "@/components/question-table/question-link"

// convert data from json to jsx format
export function convertToJsonx(data: Data) {
  return new Map([
    [
      "title",
      <QuestionLink link={data.src} text={data.title} key={data.src} />,
    ],
    [
      "difficulty",
      <DifficultyIndicator difficulty={data.difficulty} key={data.src} />,
    ],
  ])
}

export type Jsonx = ReturnType<typeof convertToJsonx>
