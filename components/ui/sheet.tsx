"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "../utils";

type SheetBehavior = "modal" | "panel";

interface SheetProps extends React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Root
> {
  behavior?: SheetBehavior;
}

const Sheet = ({ behavior = "modal", ...props }: SheetProps) => {
  return <SheetPrimitive.Root modal={behavior === "modal"} {...props} />;
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
      "absolute inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "z-[51] gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out border border-stroke ",
  {
    variants: {
      side: {
        top: "inset-x-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
      positioning: {
        fixed: "fixed z-50",
        absolute: "absolute",
      },
    },
    compoundVariants: [
      {
        side: "right",
        positioning: "fixed",
        className: "right-0 top-0 bottom-0 h-full border-r-0 border-y-0 ",
      },
      {
        side: "left",
        positioning: "fixed",
        className: "left-0 top-0 bottom-0 h-full border-l-0 border-y-0 ",
      },
      {
        side: "right",
        positioning: "absolute",
        className: "right-4 top-4 bottom-4 rounded-md h-[calc(100%-2rem)]",
      },
      {
        side: "left",
        positioning: "absolute",
        className: "left-4 top-4 bottom-4 rounded-md h-[calc(100%-2rem)]",
      },
      {
        side: "top",
        positioning: "fixed",
        className: "top-0 border-t-0 border-x-0",
      },
      {
        side: "bottom",
        positioning: "fixed",
        className: "bottom-0 border-b-0 border-x-0",
      },
      {
        side: "top",
        positioning: "absolute",
        className: "top-4 left-1/2 -translate-x-1/2 rounded-md w-[calc(100%-2rem)]",
      },
      {
        side: "bottom",
        positioning: "absolute",
        className: "bottom-4 left-1/2 -translate-x-1/2 rounded-md w-[calc(100%-2rem)]",
      },
    ],
    defaultVariants: {
      side: "right",
      positioning: "fixed",
    },
  },
);

interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  showOverlay?: boolean;
  preventOutsideClose?: boolean;
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    {
      side = "right",
      positioning,
      showOverlay = true,
      preventOutsideClose = true,
      className,
      children,

      ...props
    },
    ref,
  ) => {
    const isAbsolute = positioning === "absolute";

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

    if (isAbsolute) {
      return content;
    }

    return <SheetPortal>{content}</SheetPortal>;
  },
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
      className,
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
      className,
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

interface SheetAdjacentProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  side?: "left" | "right";
  width?: string;
  gap?: number;
  onClose?: () => void;
  title?: string;
}

const SheetAdjacent = React.forwardRef<HTMLDivElement, SheetAdjacentProps>(
  ({ open = false, side = "left", width, gap = 0, onClose, title, className, children, ...props }, ref) => {
    const gapStyle = side === "left"
      ? { marginRight: gap }
      : { marginLeft: gap };

    return (
      <div
        ref={ref}
        role="complementary"
        aria-hidden={!open}
        className={cn(
          "absolute top-0 bottom-0 bg-background border border-stroke shadow-lg transition-all duration-300 ease-in-out overflow-auto",
          width || "w-full",
          side === "left"
            ? "right-full rounded-md"
            : "left-full rounded-md",
          open
            ? "opacity-100 translate-x-0"
            : side === "left"
              ? "opacity-0 translate-x-4 pointer-events-none"
              : "opacity-0 -translate-x-4 pointer-events-none",
          className,
        )}
        style={gapStyle}
        {...props}
      >
        {(title || onClose) && (
          <div className="flex items-center justify-between border-b border-stroke p-4">
            {title && <h3 className="text-sm font-semibold">{title}</h3>}
            {onClose && (
              <button
                onClick={onClose}
                className="ml-auto rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none cursor-pointer shrink-0"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    );
  },
);
SheetAdjacent.displayName = "SheetAdjacent";

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
  SheetAdjacent,
};
