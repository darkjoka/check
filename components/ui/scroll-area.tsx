import React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = ScrollAreaPrimitive.Root
const ScrollAreaCorner = ScrollAreaPrimitive.Corner

type ScrollAreaViewportRef = React.ElementRef<
  typeof ScrollAreaPrimitive.Viewport
>
type ScrollAreaViewportNoRef = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Viewport
>

const ScrollAreaViewport = React.forwardRef<
  ScrollAreaViewportRef,
  ScrollAreaViewportNoRef
>(({ children, className, ...props }, ref) => (
  <ScrollAreaPrimitive.Viewport
    {...{ ref, ...props }}
    className={cn("h-full w-full", className)}
  >
    {children}
  </ScrollAreaPrimitive.Viewport>
))

ScrollAreaViewport.displayName = ScrollAreaPrimitive.Viewport.displayName

type ScrollAreaScrollbarRef = React.ElementRef<
  typeof ScrollAreaPrimitive.Scrollbar
>
type ScrollAreaScrollbarNoRef = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Scrollbar
>

const ScrollAreaScrollBar = React.forwardRef<
  ScrollAreaScrollbarRef,
  ScrollAreaScrollbarNoRef
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive.Scrollbar
    {...{ ref, ...props }}
    className={cn(
      "duration-[160ms] flex touch-none select-none p-0.5 transition-colors ease-out data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col",
      className
    )}
  >
    <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-[10px] bg-foreground/40 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
  </ScrollAreaPrimitive.Scrollbar>
))

ScrollAreaScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName

export { ScrollAreaScrollBar, ScrollAreaViewport, ScrollAreaCorner, ScrollArea }
