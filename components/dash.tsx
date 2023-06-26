"use client"

import data from "@/data/data.json"

import { Categories } from "@/config/categories"
import { useStats } from "@/hooks/use-stats"
import { Dashcard } from "@/components/dash-card"

export function Dash() {
	const { categories, allCategories } = useStats()

	return (
		<div className="container grid grid-cols-3 gap-2">
			{Categories.slice(2).map((value, key) => (
				<Dashcard
					category={value}
					num={categories.get(value)!}
					denum={allCategories.get(value)!}
					key={key}
				/>
			))}
		</div>
	)
}

export function MiniDash() {
	const { categories, allCategories } = useStats()
	return (
		<div className="space-y-2">
			{Categories.slice(0, 2).map((value, key) => (
				<Dashcard
					category={value}
					num={categories.get(value)!}
					denum={allCategories.get(value)!}
					key={key}
				/>
			))}
		</div>
	)
}
