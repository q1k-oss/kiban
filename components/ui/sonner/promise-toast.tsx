"use client";

import * as React from "react";
import { toast } from "sonner";

import { KibanToastContent } from "./kiban-toast";
import type { KibanToastPosition } from "./kiban-toast";
import { KibanLoadingContent } from "./loading-toast";
import { toastStore } from "./toast-store";

export interface KibanPromiseOptions<T> {
  loading: string;
  success: string | ((data: T) => string);
  error: string | ((err: unknown) => string);
  description?: {
    loading?: string;
    success?: string | ((data: T) => string);
    error?: string | ((err: unknown) => string);
  };
  position?: KibanToastPosition;
}

export const kibanPromise = <T,>(
  promise: Promise<T>,
  options: KibanPromiseOptions<T>,
) => {
  const position = options.position ?? "top-right";
  const id = toast.custom(
    (toastId) => (
      <KibanLoadingContent
        id={toastId}
        title={options.loading}
        description={options.description?.loading}
      />
    ),
    {
      duration: Infinity,
      position,
      onDismiss: () => toastStore.untrack(id),
      onAutoClose: () => toastStore.untrack(id),
    },
  );

  toastStore.track(id, position);

  promise
    .then((data) => {
      const title =
        typeof options.success === "function"
          ? options.success(data)
          : options.success;
      const desc =
        typeof options.description?.success === "function"
          ? options.description.success(data)
          : options.description?.success;
      toast.custom(
        (toastId) => (
          <KibanToastContent
            id={toastId}
            title={title}
            description={desc}
            variant="success"
          />
        ),
        { id, duration: 5000, position },
      );
    })
    .catch((err) => {
      const title =
        typeof options.error === "function"
          ? options.error(err)
          : options.error;
      const desc =
        typeof options.description?.error === "function"
          ? options.description.error(err)
          : options.description?.error;
      toast.custom(
        (toastId) => (
          <KibanToastContent
            id={toastId}
            title={title}
            description={desc}
            variant="error"
          />
        ),
        { id, duration: 5000, position },
      );
    })
    .catch((err) => {
      console.error("[kiban-toast] Promise handler threw:", err);
    });

  return id;
};
