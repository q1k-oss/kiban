"use client";

import React from "react";
import { cn } from "../../utils";
import { AppIcon } from "../app-icon";
import type { IStepItem, StepStatus, ResolvedColors, ResolvedStyles } from "./types";
import { getStepStyle } from "./utils";

interface StepperHorizontalProps {
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

export const StepperHorizontal = ({
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
}: StepperHorizontalProps) => (
  <div className={cn("flex flex-row items-start overflow-auto", className)}>
    {steps.map((step, i) => {
      const isLast = i === steps.length - 1;
      const hasSubSteps = !!step.subSteps?.length;
      const stepLabel = `${i + 1}`;
      const parentFilled = step.status === "completed";
      const isExpanded = hasSubSteps ? (expandedMap[i] ?? true) : false;

      return (
        <React.Fragment key={i}>
          {/* Main step column */}
          <div className="flex flex-col items-center shrink-0">
            <span
              style={getStepStyle(step.status, size, colors, styles)}
              className="flex items-center justify-center shrink-0 transition-all duration-500"
            >
              {renderIndicator(step.status, stepLabel)}
            </span>
            {showDescription && (
              <div className="flex flex-col items-center leading-none mt-2" style={{ gap: styles.labelDescriptionGap }}>
                <span
                  className="font-medium text-center leading-tight transition-colors duration-300 whitespace-nowrap"
                  style={{
                    fontSize: styles.labelFontSize,
                    color: step.status === "pending" ? colors.pendingText : "inherit",
                  }}
                >
                  {step.label}
                </span>
                {step.description && (
                  <span
                    className="text-center leading-tight transition-colors duration-300 whitespace-nowrap"
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
                className="flex items-center justify-center shrink-0 transition-transform duration-300 cursor-pointer bg-transparent border-none p-0 mt-1"
                style={{
                  transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                  color: step.status === "pending" ? colors.pendingText : "inherit",
                }}
              >
                <AppIcon iconName="chevron-right" size={14} />
              </button>
            )}
          </div>

          {/* Connector + sub-steps between this step and the next */}
          {!isLast && (
            <div className="flex flex-col items-center" style={{ flex: hasSubSteps ? "1 0 auto" : "0 0 auto" }}>
              {/* Main horizontal connector */}
              <div
                className="relative self-stretch"
                style={{
                  height: styles.connectorThickness,
                  marginTop: size / 2 - styles.connectorThickness / 2,
                  minWidth: styles.connectorGap,
                  background: colors.connectorEmpty,
                }}
              >
                <div
                  className="absolute top-0 left-0 h-full transition-all duration-700"
                  style={{
                    width: parentFilled ? "100%" : "0%",
                    background: colors.connectorFilled,
                  }}
                />
              </div>

              {/* Sub-steps below the connector */}
              {hasSubSteps && (
                <div
                  className="grid transition-[grid-template-rows,opacity] duration-300"
                  style={{
                    gridTemplateRows: isExpanded ? "1fr" : "0fr",
                    opacity: isExpanded ? 1 : 0,
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        paddingTop: isExpanded ? styles.subStepsPadding : 0,
                        marginTop: isExpanded ? styles.subStepsOffset : 0,
                      }}
                    >
                      {step.subSteps!.map((sub, subIdx) => {
                        const isLastSub = subIdx === step.subSteps!.length - 1;
                        const subLabel = `${i + 1}.${subIdx + 1}`;
                        const subFilled = sub.status === "completed";

                        return (
                          <React.Fragment key={subIdx}>
                            {/* Sub-step indicator + label */}
                            <div className="flex flex-col items-center shrink-0">
                              <span
                                style={getStepStyle(sub.status, subSize, colors, styles, true)}
                                className="flex items-center justify-center shrink-0 transition-all duration-500"
                              >
                                {renderIndicator(sub.status, subLabel, true)}
                              </span>
                              {showDescription && (
                                <span
                                  className="font-medium text-center leading-tight transition-colors duration-300 whitespace-nowrap"
                                  style={{
                                    marginTop: 6,
                                    fontSize: styles.subLabelFontSize,
                                    color: sub.status === "pending" ? colors.pendingText : "inherit",
                                  }}
                                >
                                  {sub.label}
                                </span>
                              )}
                            </div>

                            {/* Connector between sub-steps */}
                            {!isLastSub && (
                              <div
                                className="relative shrink-0"
                                style={{
                                  height: styles.subConnectorThickness,
                                  width: styles.subConnectorGap,
                                  marginTop: subSize / 2 - styles.subConnectorThickness / 2,
                                  background: colors.connectorEmpty,
                                }}
                              >
                                <div
                                  className="absolute top-0 left-0 h-full transition-all duration-700"
                                  style={{
                                    width: subFilled ? "100%" : "0%",
                                    background: colors.connectorFilled,
                                  }}
                                />
                              </div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </React.Fragment>
      );
    })}
  </div>
);
