"use client";

import React, { useImperativeHandle, forwardRef, useState } from "react";

import type { StepperProps, StepperRef, StepStatus } from "./types";
import { DEFAULT_COLORS, DEFAULT_STYLES } from "./utils";
import { CheckIcon, DotIndicator } from "./icons";
import { useStepper } from "./use-stepper";
import { StepperVertical } from "./stepper-vertical";
import { StepperHorizontal } from "./stepper-horizontal";
import type { IStepItem } from "./types";

const DEFAULT_STEPS: IStepItem[] = [
  { label: "Step 1", status: "on_going" },
  { label: "Step 2", status: "pending" },
  { label: "Step 3", status: "pending" },
];

// Re-export all types
export type {
  StepStatus,
  ISubStepItem,
  IStepItem,
  StepperColors,
  StepperStyles,
  StepperProps,
  StepperRef,
  ResolvedColors,
  ResolvedStyles,
} from "./types";

export const Stepper = forwardRef<StepperRef, StepperProps>(
  (
    {
      steps: initialSteps = DEFAULT_STEPS,
      size = 42,
      subSize = 32,
      indicator = "number",
      orientation = "vertical",
      colors = {},
      styles = {},
      animationDelay = 600,
      className,
      showDescription = true,
      defaultExpanded = true,
      showExpandIcon = true,
      onStepChange,
    },
    ref
  ) => {
    const resolvedColors = {
      ...DEFAULT_COLORS,
      ...Object.fromEntries(
        Object.entries(colors).filter(([, v]) => v !== undefined)
      ),
    };

    const resolvedStyles = {
      ...DEFAULT_STYLES,
      ...Object.fromEntries(
        Object.entries(styles).filter(([, v]) => v !== undefined)
      ),
    };

    const { steps, next, prev, goTo, reset } = useStepper({
      initialSteps,
      animationDelay,
      onStepChange,
    });

    useImperativeHandle(ref, () => ({ next, prev, goTo, reset }));

    const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>(() => {
      const map: Record<number, boolean> = {};
      initialSteps.forEach((step, i) => {
        if (step.subSteps?.length) map[i] = defaultExpanded;
      });
      return map;
    });

    const toggleExpanded = (index: number) => {
      setExpandedMap((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    const renderIndicator = (
      status: StepStatus,
      label: string,
      isSubStep?: boolean
    ) => {
      const currentSize = isSubStep ? finalSubSize : finalSize;
      const checkSize = isSubStep
        ? (resolvedStyles.subCompletedIconSize ?? Math.round(currentSize * 0.45))
        : (resolvedStyles.completedIconSize ?? Math.round(currentSize * 0.45));
      if (status === "completed") {
        return <CheckIcon color={resolvedColors.completedIconColor} size={checkSize} />;
      }
      if (indicator === "dot" || (indicator === "number" && status === "on_going")) {
        return (
          <DotIndicator
            color={status === "on_going" ? resolvedColors.activeDotColor : resolvedColors.pendingDotColor}
            glowColor={resolvedColors.glowColor}
            isActive={status === "on_going"}
          />
        );
      }
      return (
        <span
          className="font-semibold"
          style={{
            fontSize: isSubStep
              ? resolvedStyles.subIndicatorFontSize
              : resolvedStyles.indicatorFontSize,
          }}
        >
          {label}
        </span>
      );
    };

    const finalSize = resolvedStyles.boxSize ?? size;
    const finalSubSize = resolvedStyles.subBoxSize ?? subSize;

    const sharedProps = {
      steps,
      size: finalSize,
      subSize: finalSubSize,
      showDescription,
      colors: resolvedColors,
      styles: resolvedStyles,
      className,
      renderIndicator,
      expandedMap: showExpandIcon ? expandedMap : {},
      onToggleExpanded: toggleExpanded,
      showExpandIcon,
    };

    return orientation === "vertical" ? (
      <StepperVertical {...sharedProps} />
    ) : (
      <StepperHorizontal {...sharedProps} />
    );
  }
);

Stepper.displayName = "Stepper";
