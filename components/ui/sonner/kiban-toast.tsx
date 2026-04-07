"use client";

import * as React from "react";
import { toast } from "sonner";

import { AppIcon } from "../app-icon";
import { Button } from "../button";

import { toastStore } from "./toast-store";
import type { ActionableToastVariant } from "./types";
import { variantConfig } from "./variants";

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
}

const useCountdown = (duration: number) => {
  const [remaining, setRemaining] = React.useState(duration);
  const startRef = React.useRef(Date.now());

  React.useEffect(() => {
    startRef.current = Date.now();
    const startRemaining = remaining;

    const timer = setInterval(() => {
      const left = Math.max(0, startRemaining - (Date.now() - startRef.current));
      setRemaining(left);
      if (left <= 0) clearInterval(timer);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return remaining / duration;
};

export const KibanToastContent = ({
  id,
  title,
  description,
  variant,
  duration = 5000,
}: {
  id: string | number;
  title: string;
  description?: string;
  variant: ActionableToastVariant;
  duration?: number;
}) => {
  const config = variantConfig[variant];
  const progress = useCountdown(duration);

  return (
    <div
      className="rounded-lg shadow-lg p-px w-[420px]"
      style={{ background: config.borderGradient }}
    >
      <div
        className="relative rounded-lg overflow-hidden flex flex-col"
        style={{ background: config.bgColor }}
      >
        <div className="p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span className="shrink-0" style={{ color: config.iconColor }}>
              <AppIcon
                iconName={config.iconName}
                source={config.iconSource}
                size={20}
                strokeWidth={1.5}
              />
            </span>
            <span className="font-semibold text-primary-text text-sm leading-tight flex-1">
              {title}
            </span>
            <Button
              variant="ghost"
              onClick={() => toast.dismiss(id)}
              className="bg-transparent border-none text-tertiary-text cursor-pointer p-1 shrink-0 rounded-md"
            >
              <AppIcon iconName="x" size={14} strokeWidth={2} />
            </Button>
          </div>

          {description && (
            <span className="text-tertiary-text text-xs block">
              {description}
            </span>
          )}
        </div>

        <div className="h-1 w-full bg-transparent">
          <div
            className="h-full transition-all duration-100 ease-linear rounded-full"
            style={{
              width: `${progress * 100}%`,
              background: config.iconColor,
            }}
          />
        </div>
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
        />
      ),
      {
        duration: duration + 500,
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
