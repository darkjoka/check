import { Difficulty } from "@/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type RatingData = {
	difficulty: Difficulty
	time: Date
}

type RatingState = {
	ratings: Map<string, RatingData>
}

type RatingAction = {
	rate: (signature: string, difficulty: Difficulty) => void
	reset: (signature: string) => void
	resetAll: VoidFunction
}

export type RatingStore = RatingState & RatingAction

const storage = {
	getItem: (name: string) => {
		const str = localStorage.getItem(name) ?? ""
		return {
			state: {
				...JSON.parse(str).state,
				ratings: new Map(Object.entries(JSON.parse(str).state.ratings)),
			},
		}
	},

	setItem: (name: string, value: { state: RatingState }) => {
		const str = JSON.stringify({
			state: {
				...value.state,
				ratings: Object.fromEntries(value.state.ratings),
			},
		})
		localStorage.setItem(name, str)
	},

	removeItem: (name: string) => {
		localStorage.removeItem(name)
	},
}

export const useRatingStore = create<RatingState & RatingAction>()(
	persist(
		(set, get) => ({
			ratings: new Map(),

			rate: (signature, difficulty) =>
				set((prev) => {
					const rating = {
						...(prev.ratings.get(signature) ?? {
							difficulty,
							time: undefined,
						}),
						difficulty,
						time: new Date(),
					}
					return {
						ratings: new Map(prev.ratings).set(signature, rating),
					}
				}),

			reset: (signature) =>
				set((prev) => {
					const ratings = new Map(prev.ratings)
					ratings.delete(signature)
					return {
						ratings,
					}
				}),

			resetAll: () => set({ ratings: new Map() }),
		}),
		{
			name: "rating-store",
			storage,
		}
	)
)
