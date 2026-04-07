"use client";

import * as React from "react";
import { toast } from "sonner";

import { AppIcon } from "../app-icon";
import { Button } from "../button";

import type { ActionableToastAction, ActionableToastOptions } from "./types";
import { variantConfig } from "./variants";

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

const useCountdown = (
  toastId: string | number,
  duration: number,
  paused: boolean,
) => {
  const [remaining, setRemaining] = React.useState(duration);
  const startRef = React.useRef(Date.now());

  React.useEffect(() => {
    if (paused) return;

    startRef.current = Date.now();
    const startRemaining = remaining;

    const timer = setInterval(() => {
      const left = Math.max(
        0,
        startRemaining - (Date.now() - startRef.current),
      );
      setRemaining(left);
      if (left <= 0) {
        clearInterval(timer);
        toast.dismiss(toastId);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [paused, toastId]);

  return remaining / duration;
};

const ToastIcon = ({
  config,
}: {
  config: (typeof variantConfig)[keyof typeof variantConfig];
}) => (
  <span className="shrink-0" style={{ color: config.iconColor }}>
    <AppIcon
      iconName={config.iconName}
      source={config.iconSource}
      size={20}
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
    <AppIcon iconName="x" size={14} strokeWidth={2} />
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

const ProgressBar = ({
  progress,
  color,
}: {
  progress: number;
  color: string;
}) => (
  <div className="h-1 w-full bg-transparent">
    <div
      className="h-full transition-all duration-100 ease-linear rounded-full"
      style={{ width: `${progress * 100}%`, background: color }}
    />
  </div>
);

export const ActionableToastContent = ({
  id,
  title,
  description,
  variant = "success",
  duration = 5000,
  action,
  actions,
}: ActionableToastOptions & { id: string | number }) => {
  const config = variantConfig[variant];
  const rawActions = actions ?? (action ? [action] : DEFAULT_ACTIONS);
  const resolvedActions = rawActions.map(resolveAction);

  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);
  const [paused, setPaused] = React.useState(false);
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
    } catch {
      setActiveIdx(null);
    }
  };

  return (
    <div
      className="rounded-lg shadow-lg p-px w-[420px]"
      style={{ background: config.borderGradient }}
    >
      <div
        className="rounded-lg overflow-hidden"
        style={{ background: config.bgColor }}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <ToastIcon config={config} />
            <span className="font-semibold text-primary-text text-sm leading-tight flex-1">
              {title}
            </span>
            {!isProcessing && <CloseButton toastId={id} />}
          </div>

          {description && (
            <span className="text-tertiary-text text-xs block">
              {description}
            </span>
          )}

          <div className="flex justify-end gap-2 mt-1">
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

        {!isProcessing && (
          <>
            <div className="px-4 pb-2">
              <span className="text-xs text-tertiary-text">
                {paused ? (
                  <>
                    Paused.{" "}
                    <Button
                      variant={"ghost"}
                      onClick={() => setPaused(false)}
                      className="font-semibold text-secondary-text bg-transparent border-none cursor-pointer text-xs hover:text-primary-text inline-block p-1 rounded-xs"
                    >
                      Click to resume.
                    </Button>
                  </>
                ) : (
                  <>
                    Closes in {secondsLeft}s.{" "}
                    <Button
                      variant={"ghost"}
                      onClick={() => setPaused(true)}
                      className="font-semibold text-primary-text bg-transparent border-none cursor-pointer text-xs inline-block p-1 rounded-xs"
                    >
                      Click to stop.
                    </Button>
                  </>
                )}
              </span>
            </div>
            <ProgressBar progress={progress} color={config.iconColor} />
          </>
        )}
      </div>
    </div>
  );
};
