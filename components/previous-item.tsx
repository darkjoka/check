"use client"

import { Data } from "@/types"
import TimeAgo from "javascript-time-ago"
// English.
import en from "javascript-time-ago/locale/en"
import { Calendar, Dumbbell } from "lucide-react"

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo("en-US")

interface PreviousItemProps {
	data: Data & { time: Date }
}

export function PreviousItem({ data }: PreviousItemProps) {
	return (
		<div>
			<p className="text-sm font-semibold">{data.title}</p>
			<div className="flex space-x-6">
				<p className="flex items-center space-x-2 text-xs text-muted-foreground">
					<Calendar className="w-4" />
					<span className="flex items-center">
						{timeAgo.format(new Date(data.time))}
					</span>
				</p>
				<p className="flex items-center space-x-2 text-xs text-muted-foreground">
					<Dumbbell className="w-4" />
					<span className="flex items-center">{data.difficulty}</span>
				</p>
			</div>
		</div>
	)
}
