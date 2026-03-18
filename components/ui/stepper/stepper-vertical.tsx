"use client";

import React from "react";
import { cn } from "../../utils";
import { AppIcon } from "../app-icon";
import type { IStepItem, StepStatus, ResolvedColors, ResolvedStyles } from "./types";
import { getStepStyle } from "./utils";

interface StepperVerticalProps {
  steps: IStepItem[];
  size: number;
  subSize: number;
  showDescription: boolean;
  colors: ResolvedColors;
  styles: ResolvedStyles;
  className?: string;
  renderIndicator: (status: StepStatus, label: string, isSubStep?: boolean) => React.ReactNode;
  expandedMap: Record<number, boolean>;
  onToggleExpanded: (index: number) => void;
  showExpandIcon: boolean;
}

export const StepperVertical = ({
  steps,
  size,
  subSize,
  showDescription,
  colors,
  styles,
  className,
  renderIndicator,
  expandedMap,
  onToggleExpanded,
  showExpandIcon,
}: StepperVerticalProps) => (
  <div className={cn("flex flex-col", className)}>
    {steps.map((step, i) => {
      const isLast = i === steps.length - 1;
      const hasSubSteps = !!step.subSteps?.length;
      const stepLabel = `${i + 1}`;
      const parentFilled = step.status === "completed";
      const isExpanded = hasSubSteps ? (expandedMap[i] ?? true) : false;

      return (
        <div key={i} className="flex flex-col">
          {/* Main step row */}
          <div className="flex items-center gap-3">
            <span
              style={getStepStyle(step.status, size, colors, styles)}
              className="flex items-center justify-center shrink-0 transition-all duration-500"
            >
              {renderIndicator(step.status, stepLabel)}
            </span>

            {showDescription && (
              <div className="flex flex-col leading-none" style={{ gap: styles.labelDescriptionGap }}>
                <span
                  className="font-medium leading-tight transition-colors duration-300"
                  style={{
                    fontSize: styles.labelFontSize,
                    color: step.status === "pending" ? colors.pendingText : "inherit",
                  }}
                >
                  {step.label}
                </span>
                {step.description && (
                  <span
                    className="leading-tight transition-colors duration-300"
                    style={{
                      fontSize: styles.descriptionFontSize,
                      color: colors.pendingText,
                    }}
                  >
                    {step.description}
                  </span>
                )}
              </div>
            )}

            {hasSubSteps && showExpandIcon && (
              <button
                type="button"
                onClick={() => onToggleExpanded(i)}
                className="flex items-center justify-center shrink-0 transition-transform duration-300 cursor-pointer bg-transparent border-none p-0"
                style={{
                  transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                  color: step.status === "pending" ? colors.pendingText : "inherit",
                }}
              >
                <AppIcon iconName="chevron-right" size={16} />
              </button>
            )}
          </div>

          {/* Connector + sub-steps area */}
          {!isLast && (
            <div className="flex" style={{ marginLeft: size / 2 - styles.connectorThickness / 2 }}>
              {/* Continuous main connector line */}
              <div
                className="relative flex-shrink-0"
                style={{
                  width: styles.connectorThickness,
                  background: colors.connectorEmpty,
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full transition-all duration-700"
                  style={{
                    height: parentFilled ? "100%" : "0%",
                    background: colors.connectorFilled,
                  }}
                />
              </div>

              {/* Sub-steps branching off to the right */}
              {hasSubSteps ? (
                <div
                  className="grid transition-[grid-template-rows,opacity] duration-300"
                  style={{
                    gridTemplateRows: isExpanded ? "1fr" : "0fr",
                    opacity: isExpanded ? 1 : 0,
                    marginLeft: styles.subStepsOffset,
                  }}
                >
                <div className="overflow-hidden">
                <div
                  className="flex flex-col"
                  style={{
                    paddingTop: isExpanded ? styles.subStepsPadding : 0,
                    paddingBottom: isExpanded ? styles.subStepsPadding : 0,
                  }}
                >
                  {step.subSteps!.map((sub, subIdx) => {
                    const isLastSub = subIdx === step.subSteps!.length - 1;
                    const subLabel = `${i + 1}.${subIdx + 1}`;

                    return (
                      <div key={subIdx} className="flex flex-col">
                        <div className="flex items-center gap-3">
                          <span
                            style={getStepStyle(sub.status, subSize, colors, styles, true)}
                            className="flex items-center justify-center shrink-0 transition-all duration-500"
                          >
                            {renderIndicator(sub.status, subLabel, true)}
                          </span>

                          {showDescription && (
                            <div className="flex flex-col leading-none" style={{ gap: styles.subLabelDescriptionGap }}>
                              <span
                                className="font-medium leading-tight transition-colors duration-300"
                                style={{
                                  fontSize: styles.subLabelFontSize,
                                  color:
                                    sub.status === "pending"
                                      ? colors.pendingText
                                      : "inherit",
                                }}
                              >
                                {sub.label}
                              </span>
                              {sub.description && (
                                <span
                                  className="leading-tight transition-colors duration-300"
                                  style={{
                                    fontSize: styles.descriptionFontSize,
                                    color: colors.pendingText,
                                  }}
                                >
                                  {sub.description}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Sub-step connector */}
                        {!isLastSub && (
                          <div
                            className="relative flex-shrink-0"
                            style={{
                              width: styles.subConnectorThickness,
                              height: styles.subConnectorGap,
                              marginLeft: subSize / 2 - styles.subConnectorThickness / 2,
                              background: colors.connectorEmpty,
                            }}
                          >
                            <div
                              className="absolute top-0 left-0 w-full transition-all duration-700"
                              style={{
                                height: sub.status === "completed" ? "100%" : "0%",
                                background: colors.connectorFilled,
                              }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                </div>
                </div>
              ) : (
                <div style={{ height: styles.connectorGap }} />
              )}
              {hasSubSteps && !isExpanded && (
                <div style={{ height: styles.connectorGap }} />
              )}
            </div>
          )}
        </div>
      );
    })}
  </div>
);
