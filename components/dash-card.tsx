"use client"

import { useMounted } from "@/hooks/use-mounted"
import { Ring } from "@/components/ring"

interface DashcardProps {
  category: string
  num: number
  denum: number
}

export function Dashcard({ category, num, denum }: DashcardProps) {
  const mounted = useMounted()
  return (
    mounted && (
      <div className=" w-full flex-1 rounded border border-border p-4">
        <p className="my-2 text-xl font-semibold text-muted-foreground">
          {category}
        </p>
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <div>
              <p className="font-heading text-5xl">
                {Math.round((num / denum) * 100)}
                <span className="text-2xl text-muted-foreground"> %</span>
              </p>
              <p className="flex items-center text-sm font-semibold text-muted-foreground">
                Goal Completion
              </p>
            </div>
            <div>
              <p className="font-heading text-5xl">
                {num}
                <span className="text-2xl text-muted-foreground">
                  {" "}
                  / {denum}
                </span>
              </p>
              <p className="flex items-center text-sm font-semibold text-muted-foreground">
                Problems Completetd
              </p>
            </div>
          </div>
          <div className="flex justify-center py-2">
            <Ring angle={(num / denum) * 359} />
          </div>
        </div>
      </div>
    )
  )
}
