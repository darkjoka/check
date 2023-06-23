"use client"

import { PreviousStore, usePreviousStore } from "@/store"

import { cn } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mounted"

import { PreviousItem } from "./previous-item"

interface PreviousProps {
	count?: number
}

const problemsSelector = (store: PreviousStore) => store.data
export function Previous({ count = 10 }: PreviousProps) {
	const mounted = useMounted()
	const problems = usePreviousStore(problemsSelector)

	return (
		mounted && (
			<div
				className={cn(
					"flex w-full flex-col rounded border border-border p-4",
					!problems.length && "h-96 items-center justify-center"
				)}
			>
				{problems.length ? (
					<div className="h-[37rem] space-y-3">
						<p className="font-heading text-2xl">Recent Problems</p>
						{problems
							.slice(-count)
							.reverse()
							.map((data, key) => (
								<PreviousItem key={key} {...{ data }} />
							))}
					</div>
				) : (
					<span className="text-sm text-muted-foreground">
						As you solve more problems, this area will be populated
					</span>
				)}
			</div>
		)
	)
}
