import data from "@/data/data.json"
import { RatingStore, useRatingStore } from "@/store"
import { Data } from "@/types"
import seedrandom from "seedrandom"

const random = seedrandom(new Date().getDate().toString())

// https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
function getRandom<T>(arr: T[], n: number) {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len)
  if (n > len) return arr
  while (n--) {
    let x = Math.floor(random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}

const dataSelector = (state: RatingStore) => state.ratings
export function useRecommendation(count = 5) {
  const ratings = useRatingStore(dataSelector)
  const unAttempted = data.data.filter(({ src }) => !!!ratings.get(src))
  return getRandom(unAttempted, count) as Data[]
}
