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
	}
}
