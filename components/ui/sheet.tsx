"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "../utils";

type SheetBehavior = "modal" | "panel";

interface SheetProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Root> {
  behavior?: SheetBehavior;
}

const Sheet = ({
  behavior = "modal",
  ...props
}: SheetProps) => {
  return (
    <SheetPrimitive.Root
      modal={behavior === "modal"}
      {...props}
    />
  );
};

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out ",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0  data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "left-0 top-4 bottom-4 h-[calc(100%-2rem)] w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "right-0 top-4 bottom-4 h-[calc(100%-2rem)] w-3/4  data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
      positioning: {
        fixed: "fixed z-50",
        absolute: "absolute",
      },
    },
    defaultVariants: {
      side: "right",
      positioning: "fixed",
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    {
      side = "right",
      positioning,
      className,
      children,
      
      ...props
    },
    ref
  ) => {
    const showOverlay = positioning !== "absolute";
    const preventOutsideClose = positioning === "absolute";

    const content = (
      <>
        {showOverlay && <SheetOverlay />}
        <SheetPrimitive.Content
          ref={ref}
          className={cn(sheetVariants({ side, positioning }), className)}
          onInteractOutside={
            preventOutsideClose ? (e) => e.preventDefault() : undefined
          }
          {...props}
        >
          {children}
        </SheetPrimitive.Content>
      </>
    );
    if (!showOverlay) {
      return content;
    }

    return <SheetPortal>{content}</SheetPortal>;
  }
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-2 text-sm border-b border-stroke p-4",
      className
    )}
    {...props}
  >
    {children}
    <SheetPrimitive.Close className="ml-auto rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary cursor-pointer shrink-0">
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </SheetPrimitive.Close>
  </div>
));
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("flex-1 text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
