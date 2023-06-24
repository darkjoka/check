"use client"

import React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./button"

const AlertDialog = AlertDialogPrimitive.Root
const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = ({
  className,
  children,
  ...props
}: AlertDialogPrimitive.AlertDialogPortalProps) => (
  <AlertDialogPrimitive.Portal>
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {children}
    </div>
  </AlertDialogPrimitive.Portal>
)

AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName

type AlertDialogOverlayRef = React.ElementRef<
  typeof AlertDialogPrimitive.Overlay
>
type AlertDialogOverlayNoRef = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Overlay
>

const AlertDialogOverlay = React.forwardRef<
  AlertDialogOverlayRef,
  AlertDialogOverlayNoRef
>(({ className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in",
      className
    )}
    {...props}
    {...{ ref }}
  />
))

AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

type AlertDialogContentRef = React.ElementRef<
  typeof AlertDialogPrimitive.Content
>
type AlertDialogContentNoRef = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
>

const AlertDialogContent = React.forwardRef<
  AlertDialogContentRef,
  AlertDialogContentNoRef
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      {...{ ref }}
      className={cn(
        "fixed, z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))

AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  ></div>
)

AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  ></div>
)

AlertDialogFooter.displayName = "AlertDialogFooter"

type AlertDialogTitleRef = React.ElementRef<typeof AlertDialogPrimitive.Title>
type AlertDialogTitleNoRef = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Title
>

const AlertDialogTitle = React.forwardRef<
  AlertDialogTitleRef,
  AlertDialogTitleNoRef
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    {...{ ref, ...props }}
    className={cn("text-lg font-semibold", className)}
  />
))

AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

type AlertDialogDescriptionRef = React.ElementRef<
  typeof AlertDialogPrimitive.Description
>
type AlertDialogDescriptionNoRef = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Description
>

const AlertDialogDescription = React.forwardRef<
  AlertDialogDescriptionRef,
  AlertDialogDescriptionNoRef
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    {...{ ref, ...props }}
    className={cn("text-sm text-muted-foreground", className)}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

type AlertDialogActionRef = React.ElementRef<typeof AlertDialogPrimitive.Action>
type AlertDialogActionNoRef = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Action
>

const AlertDialogAction = React.forwardRef<
  AlertDialogActionRef,
  AlertDialogActionNoRef
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    {...{ ref, ...props }}
    className={cn(buttonVariants(), className)}
  />
))

AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

type AlertDialogCancelRef = React.ElementRef<typeof AlertDialogPrimitive.Cancel>
type AlertDialogCancelNoRef = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Cancel
>

const AlertDialogCancel = React.forwardRef<
  AlertDialogCancelRef,
  AlertDialogCancelNoRef
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    {...{ ref, ...props }}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
  />
))

AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogTrigger,
}
