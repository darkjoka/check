import data from "@/data/data.json"
import { Data } from "@/types"
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProblemViaCategory(category: string) {
  return data.data.filter((datapoint) => datapoint.type.includes(category))
}

export function mapProblemsToCategory(problems: Data[]) {
  const result = new Map<string, Data[]>()

  for (const data of problems) {
    if (!result.has(data.category)) {
      result.set(data.category, [])
    }

    result.set(data.category, [...(result.get(data.category) as Data[]), data])
  }

  return result
}
