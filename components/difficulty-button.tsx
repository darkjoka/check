"use client"

import { MouseEvent, useState } from "react"
import { useRatingStore } from "@/store"
import { Difficulty } from "@/types"

import { cn } from "@/lib/utils"

export interface DifficultyButtonProps {
  signature: string
}

export function DifficultyButton({ signature }: DifficultyButtonProps) {
  const { difficulty } = useRatingStore((store) => store.ratings).get(
    signature
  ) ?? { difficulty: "" }
  const rate = useRatingStore((store) => store.rate)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    rate(signature, (event.target as any).value as Difficulty)
  }
  const [hoverState, setHoverState] = useState<Difficulty>("")
  const handleHover = (event: MouseEvent<HTMLButtonElement>) => {
    setHoverState((event.target as any).value as Difficulty)
  }
  const handleUnHover = () => setHoverState("")

  return (
    <div className="flex space-x-2">
      <button
        className={cn(
          "h-3 w-7 rounded-full bg-foreground/20",
          ["easy", "medium", "hard"].includes(hoverState) && "bg-foreground/40",
          ["easy", "medium", "hard"].includes(difficulty) && "bg-foreground/80"
        )}
        value="easy"
        onClick={handleClick}
        onMouseOver={handleHover}
        onMouseLeave={handleUnHover}
      />
      <button
        className={cn(
          "h-3 w-7 rounded-full bg-foreground/20",
          ["medium", "hard"].includes(hoverState) && "bg-foreground/40",
          ["medium", "hard"].includes(difficulty) && "bg-foreground/80"
        )}
        value="medium"
        onClick={handleClick}
        onMouseOver={handleHover}
        onMouseLeave={handleUnHover}
      />
      <button
        className={cn(
          "h-3 w-7 rounded-full bg-foreground/20",
          hoverState === "hard" && "bg-foreground/40",
          difficulty === "hard" && "bg-foreground/80"
        )}
        value="hard"
        onClick={handleClick}
        onMouseOver={handleHover}
        onMouseLeave={handleUnHover}
      />
    </div>
  )
}
