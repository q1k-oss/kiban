"use client";

import * as React from "react";
import { toast } from "sonner";

import { AppIcon } from "../app-icon";
import { Button } from "../button";

import type { ActionableToastOptions } from "./types";
import { variantConfig } from "./variants";

export const ActionableToastContent = ({
  id,
  title,
  description,
  variant = "success",
  duration = 5000,
  action,
}: ActionableToastOptions & { id: string | number }) => {
  const config = variantConfig[variant];
  const [paused, setPaused] = React.useState(false);
  const [remaining, setRemaining] = React.useState(duration);
  const startTimeRef = React.useRef(Date.now());
  const remainingAtPauseRef = React.useRef(duration);

  React.useEffect(() => {
    if (paused) {
      remainingAtPauseRef.current = remaining;
      return;
    }

    startTimeRef.current = Date.now();
    const startRemaining = remainingAtPauseRef.current;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const left = Math.max(0, startRemaining - elapsed);
      setRemaining(left);
      if (left <= 0) {
        clearInterval(interval);
        toast.dismiss(id);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [paused, id]);

  const progress = remaining / duration;
  const secondsLeft = Math.ceil(remaining / 1000);

  return (
    <div className="w-[450px] rounded-xl overflow-hidden shadow-lg"  style={{ background: config.bgColor }}>
      <div className="px-5 py-4">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 shrink-0" style={{ color: config.iconColor }}>
            <AppIcon
              iconName={config.iconName}
              source={config.iconSource}
              size={20}
              strokeWidth={2}
            />
          </span>
          <div className="flex-1 min-w-0 ">
            <span className="font-semibold text-primary-text text-sm block">
              {title}
            </span>
            {description && (
              <span className="mt-1 text-tertiary-text text-xs block">
                {description}
              </span>
            )}
            {action && (
              <Button
                onClick={() => {
                  action.onClick();
                  toast.dismiss(id);
                }}
                className="mt-4 py-1.5 px-2 text-xs font-medium cursor-pointer"
              >
                {action.label}
              </Button>
            )}
          </div>
          <Button
            variant={"ghost"}
            onClick={() => toast.dismiss(id)}
            className="bg-transparent border-none text-tertiary-text cursor-pointer p-1 shrink-0 rounded-md"
          >
            <AppIcon iconName="x" size={16} strokeWidth={2} />
          </Button>
        </div>
      </div>

      <div className="border-t border-stroke px-5 py-2 flex items-center">
        <span className="text-xs text-tertiary">
          {paused ? (
            <span>
              Paused.{" "}
              <Button
                variant={"ghost"}
                onClick={() => setPaused(false)}
                className="font-semibold text-secondary-text bg-transparent border-none cursor-pointer p-0 text-xs hover:bg-transparent inline-block"
              >
                Click to resume.
              </Button>
            </span>
          ) : (
            <span>
              This message will close in {secondsLeft}s.{" "}
              <Button
                variant={"ghost"}
                onClick={() => setPaused(true)}
                className="font-semibold text-primary-text bg-transparent border-none cursor-pointer p-0 text-xs hover:bg-transparent inline-block"
              >
                Click to stop.
              </Button>
            </span>
          )}
        </span>
      </div>

      <div className="h-0.5 w-full bg-tertiary-text">
        <div
          className="h-full"
          style={{
            width: `${progress * 100}%`,
            background: config.progressColor,
          }}
        />
      </div>
    </div>
  );
};
