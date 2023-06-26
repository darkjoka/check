"use client"

import { Data, DifficultyNoEmpty } from "@/types"
import { MoreHorizontal } from "lucide-react"

import { useProblems } from "@/hooks/use-problems"
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface RatingActionProps {
	data: Data
}

export function RatingAction({ data }: RatingActionProps) {
	const { rate, reset, difficulty } = useProblems(data)

	const handleChange = (value: boolean, difficulty: DifficultyNoEmpty) => {
		value && rate(difficulty)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger aria-label="more">
				<MoreHorizontal />
			</DropdownMenuTrigger>
			<DropdownMenuPortal>
				<DropdownMenuContent className="w-44">
					<DropdownMenuItem onClick={reset}>
						<span className="pl-6">Reset Rating</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuCheckboxItem
						checked={difficulty === "easy"}
						onCheckedChange={(value) => handleChange(value, "easy")}
					>
						<span>Easy</span>
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						checked={difficulty === "medium"}
						onCheckedChange={(value) => handleChange(value, "medium")}
					>
						<span>Medium</span>
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						checked={difficulty === "hard"}
						onCheckedChange={(value) => handleChange(value, "hard")}
					>
						<span>Hard</span>
					</DropdownMenuCheckboxItem>
				</DropdownMenuContent>
			</DropdownMenuPortal>
		</DropdownMenu>
	)
}
