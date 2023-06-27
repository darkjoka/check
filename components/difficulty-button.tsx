"use client"

import { MouseEvent, useState } from "react"
import { Data, Difficulty, DifficultyNoEmpty } from "@/types"

import { cn } from "@/lib/utils"
import { useProblems } from "@/hooks/use-problems"

export interface DifficultyButtonProps {
  data: Data
}

export function DifficultyButton({ data }: DifficultyButtonProps) {
  const { rate, difficulty } = useProblems(data)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    rate((event.target as any).value as DifficultyNoEmpty)
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
        aria-label="mark as easy"
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
        aria-label="mark as medium"
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
        aria-label="mark as hard"
      />
    </div>
  )
}
