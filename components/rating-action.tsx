"use client"

import { RatingStore, useRatingStore } from "@/store"
import { Difficulty, DifficultyNoEmpty } from "@/types"
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
	DropdownMenuCheckboxItem,
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
const diffultySelector = (state: RatingStore) => state.ratings
const rateSelector = (state: RatingStore) => state.rate
const resetSelector = (state: RatingStore) => state.reset

export function RatingAction({ rating, signature }: RatingActionProps) {
	const { difficulty } = useRatingStore(diffultySelector).get(signature) ?? {
		difficulty: "",
	}
	const rate = useRatingStore(rateSelector)
	const reset = useRatingStore(resetSelector)

	const handleChange = (value: boolean, difficulty: DifficultyNoEmpty) => {
		value && rate(signature, difficulty)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<MoreHorizontal />
			</DropdownMenuTrigger>
			<DropdownMenuPortal>
				<DropdownMenuContent className="w-44">
					<DropdownMenuItem onClick={() => reset(signature)}>
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
