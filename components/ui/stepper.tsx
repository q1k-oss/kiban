"use client";

import React from "react";

export interface StepItem {
  LABEL: string;
  STATUS: "pending" | "on_going" | "completed";
}

interface StepperProps {
  steps: StepItem[];

  size?: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, size = 42 }) => {
  // const validSteps = steps.filter((s) => s.STEP > 0);

  // Instead of pushing only forward, derive completed from currentStep always
  // const completedSteps = validSteps
  //   .filter((s) => s.STEP < currentStep)
  //   .map((s) => s.STEP);

  return (
    <div className="flex flex-col items-center gap-2 pb-8">
      <ol className="flex items-center w-full justify-center">
        {steps.map((step, i) => {
          const isActive = step.STATUS === "on_going";
          const isCompleted = step.STATUS === "completed";
          const isLast = i === steps.length - 1;

          return (
            <li key={i} className="flex items-center relative">
              {/* Step Circle */}
              <span
                style={{ width: size, height: size }}
                className={`flex items-center justify-center shrink-0 
                  transition-all duration-500 text-sm font-bold border rounded-sm
                  ${
                    isCompleted
                      ? "bg-sheet-filetype-color text-primary-text border-sheet-filetype-color"
                      : isActive
                      ? "border-sheet-filetype-color text-sheet-filetype-color bg-primary-text"
                      : "bg-primary-text text-minimap border-stroke"
                  }
                `}
              >
                {isCompleted ? (
                  <svg
                    className="w-5 h-5 animate-[fadeIn_0.3s]"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 11.917 9.724 16.5 19 7.5"
                    />
                  </svg>
                ) : isActive ? (
                  <div className="relative flex items-center justify-center">
                    {/* Glowing animated ring */}
                    <span
                      className="absolute rounded-full animate-ringGlow"
                      style={{
                        width: "26px", // outer ring size (adjust)
                        height: "26px",

                        borderStyle: "solid",
                        borderColor: "var(--sheet-filetype-color)", // primary ring color
                        boxShadow: "0 0 10px var(--sheet-filetype-color)", // soft glow outside
                        borderRadius: "50%",
                        filter: "blur(0.4px)",
                      }}
                    ></span>

                    {/* Dot */}
                    <svg viewBox="0 0 24 24" className="w-3 h-3 relative z-[2]">
                      <circle cx="12" cy="12" r="10" fill="currentColor" />
                    </svg>
                  </div>
                ) : (
                  i + 1
                )}
              </span>

              {/* Label */}
              {step.LABEL && (
                <span className="absolute -bottom-10 -left-7 text-primary-text w-[100px] text-xs text-center">
                  {step.LABEL}
                </span>
              )}

              {/* Progress Line */}
              {!isLast && (
                <div className="relative w-20">
                  <div className="h-1 bg-secondary-text w-full" />

                  <div
                    className="absolute top-0 left-0 h-1 bg-sheet-filetype-color "
                    style={{
                      width:
                        steps[i + 1].STATUS === "completed"
                          ? "100%" // fully completed
                          : step.STATUS === "completed"
                          ? "50%" // half progress (active upcoming)
                          : "0%", // not reached
                      transition: "width .7s ease-in-out",
                    }}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
