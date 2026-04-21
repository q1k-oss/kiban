"use client";

import * as React from "react";
import { toast } from "sonner";

import { cn } from "../../utils";
import { AppIcon } from "../app-icon";
import { Button } from "../button";


import type {
  ActionableToastAction,
  ActionableToastOptions,
  VariantConfig,
} from "./types";
import { useCountdown } from "./use-countdown";
import { resolveColors } from "./variants";
import { TimeBar } from "./time-bar";

const DEFAULT_ACTIONS: ActionableToastAction[] = [
  { label: "Yes", icon: "check" },
  { label: "No", icon: "x" },
];

const resolveAction = (action: ActionableToastAction) => ({
  label: action.label ?? "OK",
  icon: action.icon ?? "check",
  variant: action.variant,
  onClick: action.onClick ?? (() => {}),
});

const ToastIcon = ({ config }: { config: VariantConfig }) => (
  <span className="shrink-0" style={{ color: config.iconColor }}>
    <AppIcon
      iconName={config.iconName}
      source={config.iconSource}
      size={18}
      strokeWidth={1.5}
    />
  </span>
);

const CloseButton = ({ toastId }: { toastId: string | number }) => (
  <Button
    variant="ghost"
    onClick={() => toast.dismiss(toastId)}
    className="bg-transparent border-none text-tertiary-text cursor-pointer p-1 shrink-0 rounded-md"
  >
    <AppIcon iconName="x" size={18} strokeWidth={1.5} />
  </Button>
);

const ActionButton = ({
  action,
  isLoading,
  disabled,
  onPress,
}: {
  action: ReturnType<typeof resolveAction>;
  isLoading: boolean;
  disabled: boolean;
  onPress: () => void;
}) => (
  <Button
    variant="outline"
    size="sm"
    disabled={disabled}
    onClick={onPress}
    className="text-xs font-medium cursor-pointer gap-1.5 p-1.5 min-w-16"
  >
    {isLoading ? (
      <AppIcon
        iconName="loader"
        size={12}
        strokeWidth={2}
        className="animate-spin"
      />
    ) : (
      <AppIcon iconName={action.icon} size={12} strokeWidth={2} />
    )}
    {action.label}
  </Button>
);

export const ActionableToastContent = ({
  id,
  title,
  description,
  variant = "success",
  duration = 5000,
  showProgress = true,
  colors,
  className,
  action,
  actions,
}: ActionableToastOptions & { id: string | number }) => {
  const config = resolveColors(variant, colors);
  const rawActions = actions ?? (action ? [action] : DEFAULT_ACTIONS);
  const resolvedActions = rawActions.map(resolveAction);

  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);
  const [paused, setPaused] = React.useState(false);
  const mountedRef = React.useRef(true);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const isProcessing = activeIdx !== null;
  const progress = useCountdown(id, duration, isProcessing || paused);
  const secondsLeft = Math.ceil((progress * duration) / 1000);

  const handleAction = async (
    act: ReturnType<typeof resolveAction>,
    idx: number,
  ) => {
    setActiveIdx(idx);
    try {
      await act.onClick();
      setTimeout(() => toast.dismiss(id), 300);
    } catch (err) {
      console.error("[kiban-toast] Action failed:", err);
      if (mountedRef.current) setActiveIdx(null);
    }
  };

  return (
    <div
      role={variant === "error" ? "alertdialog" : "dialog"}
      aria-live={variant === "error" ? "assertive" : "polite"}
      aria-atomic="true"
      aria-label={title}
      className={cn(
        "rounded-lg shadow-lg p-px w-[380px] max-w-[380px] overflow-hidden",
        showProgress && !isProcessing && "pb-0",
        className,
      )}
      style={{ background: config.borderGradient }}
    >
      <div className="rounded-lg overflow-hidden bg-[#151515]">
        <div
          className="px-2 py-2 flex flex-col gap-2"
          style={{ background: config.bgColor }}
        >
          <div className={cn("flex gap-2", description ? "items-start" : "items-center")}>
            <ToastIcon config={config} />
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
            {!isProcessing && <CloseButton toastId={id} />}
          </div>

          <div className="flex justify-end gap-2 ">
            {resolvedActions.map((act, idx) => {
              if (isProcessing && activeIdx !== idx) return null;
              return (
                <ActionButton
                  key={idx}
                  action={act}
                  isLoading={activeIdx === idx}
                  disabled={isProcessing}
                  onPress={() => handleAction(act, idx)}
                />
              );
            })}
          </div>
        </div>

        {!isProcessing && showProgress && (
          <>
            <div className="px-2 border-t">
              <span className="text-[11px] text-tertiary-text flex items-center gap-1 flex-wrap">
                {paused ? (
                  <>
                    Paused.{" "}
                    <Button
                      variant="ghost"
                      onClick={() => setPaused(false)}
                      className="font-medium text-secondary-text bg-transparent border-none cursor-pointer p-0 text-[11px] hover:text-primary-text hover:bg-transparent rounded-xs inline-block"
                    >
                      Click to resume.
                    </Button>
                  </>
                ) : (
                  <>
                    This message will close in {secondsLeft}s.{" "}
                    <Button
                      variant="ghost"
                      onClick={() => setPaused(true)}
                      className="font-medium text-primary-text bg-transparent border-none cursor-pointer p-0 text-[11px] rounded-xs hover:bg-transparent inline-block"
                    >
                      Click to stop.
                    </Button>
                  </>
                )}
              </span>
            </div>
            <TimeBar progress={progress} color={config.progressColor} />
          </>
        )}
      </div>
    </div>
  );
};
