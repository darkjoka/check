"use client"

import Link from "next/link"
import { useSelectedLayoutSegments } from "next/navigation"
import { NavigationItem } from "@/types"

import { cn } from "@/lib/utils"

interface NavigationProps {
  items: NavigationItem[]
}

export function NeetNavigation({ items }: NavigationProps) {
  const segment = useSelectedLayoutSegments()
  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="gap-6 md:flex">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href === `/${segment.join("/")}`
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
