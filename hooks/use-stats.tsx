import data from "@/data/data.json"
import { PreviousStore, usePreviousStore } from "@/store"
import { DifficultyNoEmpty } from "@/types"

const problemsSelector = (store: PreviousStore) => store.data
const difficulties = new Map<DifficultyNoEmpty, number>([
	["easy", 0],
	["medium", 0],
	["hard", 0],
])

const allDifficulties = new Map<DifficultyNoEmpty, number>([
	["easy", 0],
	["medium", 0],
	["hard", 0],
])

const cats = Array.from(new Set(data.data.map(({ category }) => category)))

const allCategories = new Map<string, number>()
const categories = new Map<string, number>()
for (const cat of cats) {
	allCategories.set(cat, 0)
	categories.set(cat, 0)
}

for (const problem of data.data) {
	const key = problem.category
	const value = allCategories.get(key)!
	allCategories.set(key, value + 1)
}

for (const problem of data.data) {
	const key = problem.difficulty as DifficultyNoEmpty
	const value = allDifficulties.get(key)!
	allDifficulties.set(key, value + 1)
}

export function useStats() {
	const solved = usePreviousStore(problemsSelector)

	for (const problem of solved) {
		const key = problem.difficulty
		const value = difficulties.get(key)!
		difficulties.set(key, value + 1)

		const categoryKey = problem.category
		const categoryValue = categories.get(categoryKey)!
		categories.set(categoryKey, categoryValue + 1)
	}

	return {
		allProblems: data.data.length,
		allSolved: solved.length,
		allEasy: allDifficulties.get("easy")!,
		allMedium: allDifficulties.get("medium")!,
		allHard: allDifficulties.get("hard")!,
		solvedEasy: difficulties.get("easy")!,
		solvedMedium: difficulties.get("medium")!,
		solvedHard: difficulties.get("hard")!,
		categories,
		allCategories,
	}
}
