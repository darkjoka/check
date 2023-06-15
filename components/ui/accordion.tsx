"use client"

import React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

type AccordionItemRef = React.ElementRef<typeof AccordionPrimitive.Item>
type AccordionItemNoRef = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>

const AccordionItem = React.forwardRef<AccordionItemRef, AccordionItemNoRef>(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn("border-b", className)}
      {...props}
    />
  )
)

AccordionItem.displayName = "AccordionItem"

type AccordionTriggerRef = React.ElementRef<typeof AccordionPrimitive.Trigger>
type AccordionTriggerNoRef = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
>

const AccordionTrigger = React.forwardRef<
  AccordionTriggerRef,
  AccordionTriggerNoRef
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "hover:underlin flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

type AccordionContentRef = React.ElementRef<typeof AccordionPrimitive.Content>
type AccordionContentNoRef = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>

const AccordionContent = React.forwardRef<
  AccordionContentRef,
  AccordionContentNoRef
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Trigger.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
