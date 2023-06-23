"use client"

import { useStats } from "@/hooks/use-stats"
import { Dashcard } from "@/components/dash-card"

export function Dash() {
	const stats = useStats()
	return (
		<div>
			<div className="flex w-full flex-1 bg-blue-200">
				<div className="h-48 flex-1 border border-border">a</div>
				<div className="h-48 flex-1 border border-border">b</div>
			</div>
			<div className="flex flex-1">
				<div className="flex-1"></div>
				<div className="flex-1"></div>
			</div>
		</div>
	)
}
