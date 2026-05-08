"use client";

import * as React from "react";
import { toast } from "sonner";

import type { KibanToastPosition } from "./kiban-toast";
import { toastStore } from "./toast-store";

export interface ClearAllOptions {
  /** Hide the clear-all button entirely. */
  disabled?: boolean;
  /** Label text. Default: "Clear all". */
  label?: string;
  /** Minimum number of toasts before showing the button. Default: 2. */
  minToasts?: number;
  /** Replace the default classes on the button. */
  className?: string;
  /** Merged into the button's inline style. */
  style?: React.CSSProperties;
  /** Merged into the inline style on hover. */
  hoverStyle?: React.CSSProperties;
}

const buildPositionStyles = (
  offset: number,
): Record<KibanToastPosition, React.CSSProperties> => ({
  "top-left": { top: 8, left: offset },
  "top-center": { top: 8, left: "50%", transform: "translateX(-50%)" },
  "top-right": { top: 8, right: offset },
  "bottom-left": { bottom: 8, left: offset },
  "bottom-center": { bottom: 8, left: "50%", transform: "translateX(-50%)" },
  "bottom-right": { bottom: 8, right: offset },
});

const baseStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.06)",
  color: "rgba(255,255,255,0.82)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 8,
  padding: "5px 12px",
  fontSize: 12,
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: "0.01em",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
  cursor: "pointer",
  transition:
    "background-color 150ms ease, color 150ms ease, border-color 150ms ease",
};

const baseHoverStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.12)",
  color: "rgba(255,255,255,1)",
  borderColor: "rgba(255,255,255,0.16)",
};

const emptyArray: never[] = [];

const ClearAllButton = ({
  onClick,
  options,
}: {
  onClick: () => void;
  options: ClearAllOptions;
}) => {
  const [hover, setHover] = React.useState(false);

  const merged: React.CSSProperties = {
    ...baseStyle,
    ...options.style,
    ...(hover
      ? { ...baseHoverStyle, ...options.hoverStyle }
      : {}),
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={options.className}
      style={options.className ? options.style : merged}
    >
      {options.label ?? "Clear all"}
    </button>
  );
};

export const ClearAllButtons = ({
  options = {},
  offset = 36,
}: {
  options?: ClearAllOptions;
  /** Horizontal viewport offset to share with the toast stack (px). */
  offset?: number;
}) => {
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

  const minToasts = options.minToasts ?? 2;
  const positions = Object.entries(grouped).filter(
    ([, items]) => items.length >= minToasts,
  );

  if (options.disabled || positions.length === 0) return null;

  const positionStyles = buildPositionStyles(offset);

  return (
    <>
      {positions.map(([position]) => (
        <div
          key={position}
          style={{
            position: "fixed",
            zIndex: 999999999,
            ...positionStyles[position as KibanToastPosition],
          }}
        >
          <ClearAllButton
            options={options}
            onClick={() => {
              const ids = toastStore.untrackByPosition(
                position as KibanToastPosition,
              );
              ids.forEach((id) => toast.dismiss(id));
            }}
          />
        </div>
      ))}
    </>
  );
};
