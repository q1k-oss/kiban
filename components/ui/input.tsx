import * as React from "react";

import { cn } from "../utils";
type InputProps = React.ComponentProps<"input"> & {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconClassName?: string;
  wrapperClassName?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      icon,
      iconPosition = "left",
      iconClassName,
      wrapperClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "flex h-9 w-full items-center rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring",
          iconPosition === "right" && "flex-row-reverse",
          wrapperClassName,
        )}
      >
        {icon && (
          <div className={cn("flex items-center", iconClassName)}>{icon}</div>
        )}
        <input
          type={type}
          className={cn(
            "flex-1 bg-transparent text-base outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
