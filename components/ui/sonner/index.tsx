"use client";

import { useTheme } from "next-themes";
import * as React from "react";
import { Toaster as Sonner, toast } from "sonner";

import { ActionableToastContent } from "./actionable-toast";
import { ClearAllButtons } from "./clear-all-button";
import type { ClearAllOptions } from "./clear-all-button";
import { createToast } from "./kiban-toast";
import type { KibanToastOptions, KibanToastPosition } from "./kiban-toast";
import { KibanLoadingContent } from "./loading-toast";
import { kibanPromise } from "./promise-toast";
import { toastStore } from "./toast-store";
import type { ActionableToastOptions } from "./types";

type ToasterProps = React.ComponentProps<typeof Sonner> & {
  /** Customize / disable the auto Clear-all button shown when ≥2 toasts stack. */
  clearAll?: ClearAllOptions;
};

const kibanActionableToast = (options: ActionableToastOptions) => {
  const duration = options.duration ?? 5000;
  return toast.custom(
    (id) => <ActionableToastContent id={id} {...options} duration={duration} />,
    { duration: duration + 50 },
  );
};

const DEFAULT_OFFSET_PX = 36;

const parseOffsetPx = (offset: ToasterProps["offset"]): number => {
  if (typeof offset === "number") return offset;
  if (typeof offset === "string") {
    const m = offset.match(/^(\d+(?:\.\d+)?)/);
    return m ? Number(m[1]) : DEFAULT_OFFSET_PX;
  }
  return DEFAULT_OFFSET_PX;
};

const Toaster = ({ clearAll, offset, ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();
  const resolvedOffset = offset ?? `${DEFAULT_OFFSET_PX}px`;
  const numericOffset = parseOffsetPx(resolvedOffset);

  return (
    <>
      <ClearAllButtons options={clearAll} offset={numericOffset} />
      <Sonner
        theme={theme as ToasterProps["theme"]}
        className="toaster group"
        closeButton
        toastOptions={{
          duration: 5000,
        }}
        position="top-right"
        offset={resolvedOffset}
        {...props}
      />
    </>
  );
};

const kibanToast = {
  success: createToast("success"),
  error: createToast("error"),
  warning: createToast("warning"),
  info: createToast("info"),
  dismiss: (id: string | number) => toast.dismiss(id),

  loading: (title: string, options?: KibanToastOptions) => {
    const position = options?.position ?? "top-right";
    const id = toast.custom(
      (toastId) => (
        <KibanLoadingContent
          id={toastId}
          title={title}
          description={options?.description}
        />
      ),
      {
        duration: options?.duration ?? Infinity,
        position,
        onDismiss: () => toastStore.untrack(id),
        onAutoClose: () => toastStore.untrack(id),
      },
    );
    toastStore.track(id, position);
    return id;
  },

  promise: kibanPromise,

  custom: (
    render: (id: string | number) => React.ReactElement,
    options?: { duration?: number; position?: KibanToastPosition },
  ) => {
    const position = (options?.position ?? "top-right") as KibanToastPosition;
    const id = toast.custom(
      (toastId) => render(toastId),
      {
        duration: options?.duration ?? 5000,
        position,
        onDismiss: () => toastStore.untrack(id),
        onAutoClose: () => toastStore.untrack(id),
      },
    );
    toastStore.track(id, position);
    return id;
  },
};

export { Toaster, kibanActionableToast, kibanToast };
export type { ActionableToastOptions, ActionableToastVariant } from "./types";
export type { KibanToastOptions, KibanToastPosition } from "./kiban-toast";
export type { KibanPromiseOptions } from "./promise-toast";
export type { ClearAllOptions } from "./clear-all-button";
