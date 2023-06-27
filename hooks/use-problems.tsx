import {
  PreviousStore,
  RatingStore,
  usePreviousStore,
  useRatingStore,
} from "@/store"
import { Data, DifficultyNoEmpty } from "@/types"

const difficultySelector = (state: RatingStore) => state.ratings
const rateSelector = (state: RatingStore) => state.rate
const resetRatingSelector = (state: RatingStore) => state.reset

const addSelector = (state: PreviousStore) => state.add
const removeSelector = (state: PreviousStore) => state.remove
const previousProblemSelctor = (state: PreviousStore) => state.data

export function useProblems(data: Data) {
  const { difficulty } = useRatingStore(difficultySelector).get(data.src) ?? {
    difficulty: "",
  }
  const rateRating = useRatingStore(rateSelector)
  const resetRating = useRatingStore(resetRatingSelector)

  const add = usePreviousStore(addSelector)
  const removePrevious = usePreviousStore(removeSelector)
  const problems = usePreviousStore(previousProblemSelctor)

  return {
    rate: (difficulty: DifficultyNoEmpty) => {
      rateRating(data.src, difficulty)
      add(data, difficulty)
    },

    reset: () => {
      resetRating(data.src)
      removePrevious(data)
    },
    problems,
    difficulty,
  }
}
