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

export const KibanToastContent = ({
  id,
  title,
  description,
  variant,
}: {
  id: string | number;
  title: string;
  description?: string;
  variant: ActionableToastVariant;
}) => {
  const config = variantConfig[variant];

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg">
      <div className="border-1 border-button-border-disabled rounded-xl overflow-hidden">
        {/* Glow dot — top-left corner */}
        <div
          className="absolute -top-2 -left-2 w-7 h-7 rounded-full blur-sm pointer-events-none"
          style={{ background: config.borderColor }}
        />
        <div className="relative w-[420px] p-4 flex items-start gap-3" style={{ background: config.bgColor }}>
          {/* Glow gradient — rotated */}
          <div
            className="absolute top-4 -left-5 w-24 h-2.5 rotate-45 blur-lg pointer-events-none"
            style={{
              background: `linear-gradient(to right, color-mix(in srgb, ${config.progressColor} , transparent), transparent)`,
            }}
          />
          {/* Icon circle */}
          <div
            className="p-1.5 rounded-full flex items-center justify-center shrink-0"
            style={{ background: `${config.iconColor}33` }}
          >
            <AppIcon
              iconName={config.iconName}
              source={config.iconSource}
              size={14}
              strokeWidth={2}
              className={`text-[${config.iconColor}]`}
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pt-0.5 flex flex-col gap-1">
            <span className="font-medium text-primary-text text-sm leading-tight block">
              {title}
            </span>
            {description && (
              <span className="text-tertiary-text text-xs block">
                {description}
              </span>
            )}
          </div>

          {/* Close button */}
          <Button
            variant={"ghost"}
            onClick={() => toast.dismiss(id)}
            className="bg-transparent border-none text-tertiary-text cursor-pointer p-1 shrink-0  rounded-md"
          >
            <AppIcon iconName="x" size={14} strokeWidth={2} />
          </Button>
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
        />
      ),
      {
        duration,
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
