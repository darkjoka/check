"use client"

import { useMounted } from "@/hooks/use-mounted"
import { useStats } from "@/hooks/use-stats"

import { Rings } from "./rings"

const backdrops = ["bg-slate-700", "bg-slate-600", "bg-slate-500"]
export function SummaryCard() {
	const mounted = useMounted()
	const stats = useStats()
	const levels: [number, number, string][] = [
		[stats.solvedEasy, stats.allEasy, "Easy"],
		[stats.solvedMedium, stats.allMedium, "Medium"],
		[stats.solvedHard, stats.allHard, "Hard"],
	]

	levels.sort((a, b) => b[0] / b[1] - a[0] / a[1])

	const angle = levels.map((value) => (value[0] / value[1]) * 360)

	return (
		mounted && (
			<div className=" w-full flex-1 rounded border border-border p-4">
				<p className="my-2 text-xl font-semibold text-muted-foreground">
					Summary
				</p>
				<div className="flex items-center justify-between">
					<div>
						<p className="font-heading text-5xl">
							{Math.round((stats.allSolved / stats.allProblems) * 100)}
							<span className="text-2xl text-muted-foreground"> %</span>
						</p>
						<p className="flex items-center text-sm font-semibold text-muted-foreground">
							Goal Completion
						</p>
					</div>
					<div>
						<p className="font-heading text-5xl">
							{stats.allSolved}
							<span className="text-2xl text-muted-foreground">
								{" "}
								/ {stats.allProblems}
							</span>
						</p>
						<p className="flex items-center text-sm font-semibold text-muted-foreground">
							Problems Completetd
						</p>
					</div>
				</div>
				<div className="flex justify-center py-2">
					<Rings {...{ angle }} />
				</div>
				<div className="flex flex-col [&>div:nth-last-child(1)]:border-0 [&>div]:border-b [&>div]:border-border">
					{levels.map((value, key) => (
						<div
							key={key}
							className="flex h-14 items-center justify-between px-4"
						>
							<div className="flex flex-1 items-center space-x-3">
								<div className={`${backdrops[key]} h-4 w-4 rounded`} />
								<span className="font-semibold">{value[2]}</span>
							</div>
							<div className="flex-1 font-semibold">
								{value[0]}
								<span>/{value[1]}</span>
							</div>
							<div className="flex-1 font-semibold text-muted-foreground">
								{Math.round((value[0] / value[1]) * 100)}
								<span>%</span>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	)
}
