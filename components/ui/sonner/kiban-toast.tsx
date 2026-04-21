"use client";

import * as React from "react";
import { toast } from "sonner";

import { cn } from "../../utils";
import { AppIcon } from "../app-icon";
import { Button } from "../button";


import { toastStore } from "./toast-store";
import type { ActionableToastVariant, ToastColors } from "./types";
import { useCountdown } from "./use-countdown";
import { resolveColors } from "./variants";
import { TimeBar } from "./time-bar";

export type KibanToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

export interface KibanToastOptions {
  description?: string;
  duration?: number;
  position?: KibanToastPosition;
  showProgress?: boolean;
  colors?: ToastColors;
  className?: string;
}

export const KibanToastContent = ({
  id,
  title,
  description,
  variant,
  duration = 5000,
  showProgress = true,
  colors,
  className,
}: {
  id: string | number;
  title: string;
  description?: string;
  variant: ActionableToastVariant;
  duration?: number;
  showProgress?: boolean;
  colors?: ToastColors;
  className?: string;
}) => {
  const config = resolveColors(variant, colors);
  const progress = useCountdown(id, duration);

  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      aria-live={variant === "error" ? "assertive" : "polite"}
      aria-atomic="true"
      className={cn("rounded-lg shadow-lg p-px w-[380px]", showProgress && "pb-0", className)}
      style={{ background: config.borderGradient }}
    >
      <div
        className="relative rounded-lg overflow-hidden flex flex-col"
        style={{ background: config.bgColor }}
      >
        <div className="p-2 flex flex-col gap-2">
          <div className={cn("flex gap-2", description ? "items-start" : "items-center")}>
            <span className="shrink-0" style={{ color: config.iconColor }}>
              <AppIcon
                iconName={config.iconName}
                source={config.iconSource}
                size={18}
                strokeWidth={1.5}
              />
            </span>
            <div className="flex-1 min-w-0 flex flex-col gap-1">
              <span className="font-medium text-primary-text text-xs leading-tight">
                {title}
              </span>
              {description && (
                <span className="text-tertiary-text text-xs font-normal">
                  {description}
                </span>
              )}
            </div>
            <Button
              variant="ghost"
              onClick={() => toast.dismiss(id)}
              className="bg-transparent border-none text-tertiary-text cursor-pointer p-1 shrink-0 rounded-md"
            >
              <AppIcon iconName="x" size={18} strokeWidth={1.5} />
            </Button>
          </div>
        </div>

        {showProgress && <TimeBar progress={progress} color={config.progressColor} />}
      </div>
    </div>
  );
};

const createToast = (variant: ActionableToastVariant) => {
  return (title: string, options?: KibanToastOptions) => {
    const duration = options?.duration ?? 5000;
    const position = options?.position ?? "top-right";
    const id = toast.custom(
      (toastId) => (
        <KibanToastContent
          id={toastId}
          title={title}
          description={options?.description}
          variant={variant}
          duration={duration}
          showProgress={options?.showProgress ?? true}
          colors={options?.colors}
          className={options?.className}
        />
      ),
      {
        duration: duration + 50,
        position,
        onDismiss: () => toastStore.untrack(id),
        onAutoClose: () => toastStore.untrack(id),
      },
    );
    toastStore.track(id, position);
    return id;
  };
};

export { createToast };
