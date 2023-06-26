import data from "@/data/data.json"

export const Categories = Array.from(
	new Set(data.data.map(({ category }) => category))
)
