import { PreviousStore, usePreviousStore } from "@/store"

const daysBetweenAttempt = 3

const dataSelector = (state: PreviousStore) => state.data
export function useRevision(count = 5) {
  const allPrevious = usePreviousStore(dataSelector)
  // remove all questions less than 3 days old
  const validPrevious = allPrevious.filter(
    ({ time, difficulty }) =>
      Math.floor(
        (new Date().getTime() - new Date(time).getTime()) /
          (24 * 60 * 60 * 1000)
      ) >= daysBetweenAttempt && difficulty !== "easy"
  )

  return validPrevious.slice(0, count)
}
