"use client";

import React, { useImperativeHandle, forwardRef, useState } from "react";

import { CheckIcon, DotIndicator } from "./icons";
import { StepperHorizontal } from "./stepper-horizontal";
import { StepperVertical } from "./stepper-vertical";
import type { StepperProps, StepperRef, StepStatus, IStepItem } from "./types";
import { useStepper } from "./use-stepper";
import { DEFAULT_COLORS, DEFAULT_SIZES, DEFAULT_STYLES } from "./utils";

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
  StepperSizes,
  StepperStyles,
  StepperProps,
  StepperRef,
  ResolvedColors,
  ResolvedSizes,
  ResolvedStyles,
} from "./types";

export const Stepper = forwardRef<StepperRef, StepperProps>(
  (
    {
      steps: initialSteps = DEFAULT_STEPS,
      indicator = "number",
      orientation = "vertical",
      colors = {},
      sizes = {},
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

    const resolvedSizes = {
      ...DEFAULT_SIZES,
      ...Object.fromEntries(
        Object.entries(sizes).filter(([, v]) => v !== undefined)
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

    const { boxSize, subBoxSize } = resolvedSizes;

    const renderIndicator = (
      status: StepStatus,
      label: string,
      isSubStep?: boolean
    ) => {
      const currentSize = isSubStep ? subBoxSize : boxSize;
      const checkSize = isSubStep
        ? (resolvedSizes.subCompletedIconSize ?? Math.round(currentSize * 0.45))
        : (resolvedSizes.completedIconSize ?? Math.round(currentSize * 0.45));
      if (status === "completed") {
        return <CheckIcon color={resolvedColors.completedIconColor} size={checkSize} />;
      }
      if (indicator === "dot" || (indicator === "number" && status === "on_going")) {
        const dotSize = isSubStep ? resolvedSizes.subDotSize : resolvedSizes.dotSize;
        return (
          <DotIndicator
            color={status === "on_going" ? resolvedColors.activeDotColor : resolvedColors.pendingDotColor}
            glowColor={resolvedColors.glowColor}
            isActive={status === "on_going"}
            dotSize={dotSize}
            glowSize={resolvedSizes.glowSize}
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

    const sharedProps = {
      steps,
      size: boxSize,
      subSize: subBoxSize,
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
