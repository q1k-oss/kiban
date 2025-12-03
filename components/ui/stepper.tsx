"use client";
import React from "react";

export interface StepItem {
  STEP: number;
  LABEL?: string;
}

interface StepperProps {
  steps: StepItem[];
  currentStep: number;
  size?: number;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  size = 42,
}) => {
  const validSteps = steps.filter((s) => s.STEP > 0);

  return (
    <div className="flex flex-col items-center gap-2 pb-8">
      {/* Progress UI */}
      <ol className="flex items-center w-full justify-center">
        {validSteps.map((step, i) => {
          const isCompleted = currentStep > step.STEP;
          const isActive = currentStep === step.STEP;
          const isLast = i === validSteps.length - 1;

          return (
            <li key={i} className="flex items-center relative">
              {/* Step Circle */}
              <span
                style={{ width: size, height: size }}
                className={`flex items-center justify-center shrink-0 
    transition-all duration-500 text-sm font-bold border-2 rounded-sm
    ${
      isCompleted
        ? "bg-sheet-filetype-color text-primary-text border-sheet-filetype-color"
        : isActive
        ? "border-sheet-filetype-color text-sheet-filetype-color bg-primary-text"
        : "bg-gray-200 text-minimap border-stroke"
    }
  `}
              >
                {isCompleted ? (
                  <svg
                    className="w-5 h-5"
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
                ) : (
                  step.STEP
                )}
              </span>

              {step.LABEL && (
                <span className="absolute -bottom-10 -left-7 text-primary-text w-[100px] text-xs text-center ">
                  {step.LABEL}
                </span>
              )}

              {/* Progress Line */}
              {!isLast && (
                <div className="relative w-20">
                  {/* Base line */}
                  <div className="h-1 bg-secondary-text  w-full" />

                  {/* Filled active/completed line */}
                  <div
                    className={`absolute top-0 left-0 h-1 transition-all duration-700
      ${
        isCompleted
          ? `bg-sheet-filetype-color w-full`
          : isActive
          ? `bg-sheet-filetype-color w-1/2`
          : "w-0"
      }
      `}
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
