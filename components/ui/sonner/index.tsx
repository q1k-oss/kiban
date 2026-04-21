"use client";

import { useTheme } from "next-themes";
import * as React from "react";
import { Toaster as Sonner, toast } from "sonner";

import { ActionableToastContent } from "./actionable-toast";
import { ClearAllButtons } from "./clear-all-button";
import { createToast } from "./kiban-toast";
import type { KibanToastOptions, KibanToastPosition } from "./kiban-toast";
import { KibanLoadingContent } from "./loading-toast";
import { kibanPromise } from "./promise-toast";
import { toastStore } from "./toast-store";
import type { ActionableToastOptions } from "./types";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const kibanActionableToast = (options: ActionableToastOptions) => {
  const duration = options.duration ?? 5000;
  return toast.custom(
    (id) => <ActionableToastContent id={id} {...options} duration={duration} />,
    { duration: duration + 50 },
  );
};

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <>
      <ClearAllButtons />
      <Sonner
        theme={theme as ToasterProps["theme"]}
        className="toaster group"
        closeButton
        toastOptions={{
          duration: 5000,
        }}
        position="top-right"
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
