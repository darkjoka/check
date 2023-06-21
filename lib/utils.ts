import data from "@/data/data.json"
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProblemViaCategory(category: string) {
  return data.data.filter((datapoint) => datapoint.type.includes(category))
}

type Problems = ReturnType<typeof getProblemViaCategory>

export function mapProblemsToCategory(problems: Problems) {
  const result = new Map<string, Problems>()

  for (const data of problems) {
    if (!result.has(data.category)) {
      result.set(data.category, [])
    }

    result.set(data.category, [
      ...(result.get(data.category) as Problems),
      data,
    ])
  }

  return result
}
