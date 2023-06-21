"use client"

import { DifficultyNoEmpty } from "@/types"

import { cn } from "@/lib/utils"

interface DifficultyIndicatorProps {
  difficulty: DifficultyNoEmpty
}

export function DifficultyIndicator({ difficulty }: DifficultyIndicatorProps) {
  return (
    <div className="flex space-x-2">
      <div className={cn("h-3 w-7 rounded-full bg-foreground/80")}></div>
      <div
        className={cn(
          "h-3 w-7 rounded-full bg-foreground/20",
          ["medium", "hard"].includes(difficulty) && "bg-foreground/80"
        )}
      ></div>
      <div
        className={cn(
          "h-3 w-7 rounded-full bg-foreground/20",
          difficulty === "hard" && "bg-foreground/80"
        )}
      ></div>
    </div>
  )
}
