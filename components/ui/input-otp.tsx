"use client";

import { cva } from "class-variance-authority";
import { OTPInput, OTPInputContext, OTPInputProps } from "input-otp";
import { Minus } from "lucide-react";
import * as React from "react";

import { cn } from "../utils";
const OTPVariantContext = React.createContext<{
  variant: "default" | "separate";
}>({ variant: "default" });
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  Omit<React.ComponentPropsWithoutRef<typeof OTPInput>, "render"> & {
    variant?: "default" | "separate";
  }
>(({ className, containerClassName, variant = "default", ...props }, ref) => {
  const variantClasses = {
    default: "",
    separate: "gap-2",
  };
  return (
    <OTPVariantContext.Provider value={{ variant }}>
      <OTPInput
        ref={ref}
        containerClassName={cn(
          "flex items-center  has-[:disabled]:opacity-50",
          variantClasses[variant],
          containerClassName
        )}
        onBeforeInput={(e) => {
          if (!/^[0-9]$/.test(e.data)) e.preventDefault();
        }}
        inputMode="numeric"
        pattern="[0-9]*"
        className={cn(
          "disabled:cursor-not-allowed",

          className
        )}
        {...(props as OTPInputProps)}
      />
    </OTPVariantContext.Provider>
  );
});
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { variant } = React.useContext(OTPVariantContext);

  const { char, hasFakeCaret, isActive } =
    inputOTPContext?.slots?.[index] ?? {};

  const slotClasses = cva(
    "relative flex items-center justify-center shadow-sm transition-all",
    {
      variants: {
        variant: {
          default:
            "h-9 w-9 border-y border-r border-input text-sm first:rounded-l-md first:border-l last:rounded-r-md",
          separate: "h-10 w-10 border border-input rounded-lg mx-2",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  );

  return (
    <div
      ref={ref}
      className={cn(
        slotClasses({ variant }),
        isActive && "z-10 ring-1 ring-ring",
        className
      )}
      {...props}
    >
      {char}

      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
