"use client";

import * as React from "react";
import { toast } from "sonner";

import { Button } from "../button";

import type { KibanToastPosition } from "./kiban-toast";
import { toastStore } from "./toast-store";

const positionClasses: Record<KibanToastPosition, string> = {
  "top-left": "top-2 left-4",
  "top-center": "top-2 left-1/2 -translate-x-1/2",
  "top-right": "top-2 right-4",
  "bottom-left": "bottom-2 left-4",
  "bottom-center": "bottom-2 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-2 right-4",
};

const emptyArray: never[] = [];

export const ClearAllButtons = () => {
  const tracked = React.useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getSnapshot,
    () => emptyArray,
  );

  const grouped = tracked.reduce<
    Record<string, Array<{ id: string | number }>>
  >((acc, t) => {
    (acc[t.position] ??= []).push(t);
    return acc;
  }, {});

  const positions = Object.entries(grouped).filter(
    ([, items]) => items.length >= 2,
  );

  if (positions.length === 0) return null;

  return (
    <>
      {positions.map(([position]) => (
        <div
          key={position}
          className={`fixed z-[999999999] ${positionClasses[position as KibanToastPosition]}`}
        >
          <Button
            size="sm"
            onClick={() => {
              const ids = toastStore.untrackByPosition(
                position as KibanToastPosition,
              );
              ids.forEach((id) => toast.dismiss(id));
            }}
            className="text-xs px-3 py-1 rounded-md bg-[#151515] text-secondary-text"
          >
            Clear
          </Button>
        </div>
      ))}
    </>
  );
};
