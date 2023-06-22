import { Data, Difficulty } from "@/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type PrevData = Data & { time: Date; rating: Difficulty }

type PreviousState = {
	data: PrevData[]
}

type PreviousAction = {
	add: (data: Data, difficulty: Difficulty) => void
	reset: VoidFunction
	remove: (data: Data) => void
}

export type PreviousStore = PreviousState & PreviousAction

export const usePreviousStore = create<PreviousState & PreviousAction>()(
	persist(
		(set, get) => ({
			data: [],
			add: (data, rating) =>
				set((prev) => {
					// find and update time for existing obj and insert if it's first time
					const index = prev.data.findIndex((value) => value.src === data.src)
					if (index > -1) {
						const newData = prev.data[index]
						prev.data.splice(index, 1)
						return {
							data: [...prev.data, { ...data, rating, time: new Date() }],
						}
					}

					return { data: [...prev.data, { ...data, rating, time: new Date() }] }
				}),

			remove: (data) =>
				set((prev) => {
					const index = prev.data.findIndex((value) => value.src === data.src)
					if (index > -1) {
						prev.data.splice(index, 1)
					}
					return { data: prev.data }
				}),

			reset: () => set({ data: [] }),
		}),
		{ name: "previous-store" }
	)
)
