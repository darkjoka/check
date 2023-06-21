"use client"

import { Difficulty } from "@/types"
import {
	Check,
	MoreHorizontal,
	PackageMinus,
	PackagePlus,
	PackageX,
	RotateCcw,
} from "lucide-react"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface RatingActionProps {
	rating: Difficulty
	signature: string
}

export function RatingAction({ rating, signature }: RatingActionProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<MoreHorizontal />
			</DropdownMenuTrigger>
			<DropdownMenuPortal>
				<DropdownMenuContent className="w-44">
					<DropdownMenuItem className="space-x-3">
						<div className="w-4" />
						<span>Reset Rating</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="space-x-3">
						<div className="w-4">
							{rating == "easy" && <Check className="w-4" />}
						</div>
						<span>Easy</span>
					</DropdownMenuItem>
					<DropdownMenuItem className="space-x-3">
						<div className="w-4">
							{rating == "medium" && <Check className="w-4" />}
						</div>
						<span>Medium</span>
					</DropdownMenuItem>
					<DropdownMenuItem className="space-x-3">
						<div className="w-4">
							{rating == "hard" && <Check className="w-4" />}
						</div>
						<span>Hard</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenuPortal>
		</DropdownMenu>
	)
}
