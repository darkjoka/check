"use client"

import { MouseEvent, useState } from "react"

import { cn } from "@/lib/utils"

export type States = "easy" | "medium" | "hard" | ""

export interface DifficultyButtonProps<T> {
  state: T
  updateState: (x: T) => void
}

export function DifficultyButton({
  state,
  updateState,
}: DifficultyButtonProps<States>) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    updateState((event.target as any).value as States)
  }
  const [hoverState, setHoverState] = useState<States>("")

  const handleHover = (event: MouseEvent<HTMLButtonElement>) => {
    setHoverState((event.target as any).value as States)
  }

  const handleUnHover = () => setHoverState("")

  return (
    <div className="flex space-x-2">
      <button
        className={cn(
          "h-3 w-7 rounded-full bg-foreground/20",
          ["easy", "medium", "hard"].includes(hoverState) && "bg-foreground/40",
          ["easy", "medium", "hard"].includes(state) && "bg-foreground/80"
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
          ["medium", "hard"].includes(state) && "bg-foreground/80"
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
          state === "hard" && "bg-foreground/80"
        )}
        value="hard"
        onClick={handleClick}
        onMouseOver={handleHover}
        onMouseLeave={handleUnHover}
      />
    </div>
  )
}
