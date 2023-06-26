import {
	PreviousStore,
	RatingStore,
	usePreviousStore,
	useRatingStore,
} from "@/store"

const previousSelector = (state: PreviousStore) => state.reset
const ratingSelector = (state: RatingStore) => state.resetAll
export function useReset() {
	const resetPrevious = usePreviousStore(previousSelector)
	const resetRating = useRatingStore(ratingSelector)
	return function reset() {
		resetPrevious()
		resetRating()
	}
}
