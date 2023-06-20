"use client"

import { MouseEvent } from "react"

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

  return (
    <div className="flex space-x-1">
      <button
        className={cn(
          "h-3 w-7 rounded-full bg-foreground/20",
          ["easy", "medium", "hard"].includes(state) && "bg-foreground/80"
        )}
        value="easy"
        onClick={handleClick}
      />
      <button
        className={cn(
          "h-3 w-7 rounded-full bg-foreground/20",
          ["medium", "hard"].includes(state) && "bg-foreground/80"
        )}
        value="medium"
        onClick={handleClick}
      />
      <button
        className={cn(
          "h-3 w-7 rounded-full bg-foreground/20",
          state === "hard" && "bg-foreground/80"
        )}
        value="hard"
        onClick={handleClick}
      />
    </div>
  )
}
