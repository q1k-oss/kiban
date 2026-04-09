"use client";

import * as React from "react";
import { toast } from "sonner";

import { cn } from "../../utils";
import { AppIcon } from "../app-icon";
import { Button } from "../button";

import { ProgressBar } from "./progress-bar";
import type { ActionableToastAction, ActionableToastOptions, VariantConfig } from "./types";
import { useCountdown } from "./use-countdown";
import { resolveColors } from "./variants";

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

const ToastIcon = ({
  config,
}: {
  config: VariantConfig;
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
      className={cn("rounded-lg shadow-lg p-px w-[420px]", className)}
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

          <div className="flex items-baseline justify-between mt-2">
            {!isProcessing && showProgress ? (
              <span className="text-xs text-tertiary-text">
                {paused ? (
                  <>
                    Paused.{" "}
                    <Button
                      variant={"ghost"}
                      onClick={() => setPaused(false)}
                      className="font-semibold text-secondary-text bg-transparent border-none cursor-pointer p-1 text-xs hover:text-primary-text rounded-xs inline-block"
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
                      className="font-semibold text-primary-text bg-transparent border-none cursor-pointer p-1 text-xs rounded-xs inline-block"
                    >
                      Click to stop.
                    </Button>
                  </>
                )}
              </span>
            ) : (
              <span />
            )}

            <div className="flex gap-2">
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
        </div>

        {!isProcessing && showProgress && (
          <ProgressBar progress={progress} color={config.progressColor} />
        )}
      </div>
    </div>
  );
};
