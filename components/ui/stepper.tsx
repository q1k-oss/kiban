"use client";

import React, { useImperativeHandle, useState, forwardRef } from "react";

export interface IStepItem {
  LABEL: string;
  STATUS: "pending" | "on_going" | "completed";
}

interface StepperProps {
  steps: IStepItem[];
  size?: number;
}

// expose methods via useImperativeHandle
export const Stepper = forwardRef(
  ({ steps: initialSteps, size = 42 }: StepperProps, ref) => {
    const [steps, setSteps] = useState<IStepItem[]>(initialSteps);
    const animLock = React.useRef(false);

    // ---------- INTERNAL NEXT ----------
    const next = () => {
      if (animLock.current) return;
      animLock.current = true;

      const idx = steps.findIndex((s) => s.STATUS === "on_going");

      //if no active step, activate first
      if (idx === -1) {
        setSteps((prev) => {
          const copy = [...prev];
          copy[0].STATUS = "on_going";
          return copy;
        });
        animLock.current = false;
        return;
      }

      if (idx === steps.length) return;

      // 1. active → completed
      setSteps((prev) => {
        const copy = [...prev];
        copy[idx].STATUS = "completed";
        return copy;
      });

      if (idx === steps.length - 1) {
        animLock.current = true;
        return;
      } // if last index then don't update next-step -> state
      setTimeout(() => {
        setSteps((prev) => {
          const copy = [...prev];
          copy[idx + 1].STATUS = "on_going";
          return copy;
        });
        animLock.current = false;
      }, 1500);
    };

    const prev = () => {
      if (animLock.current) return;

      const idx = steps.findIndex((s) => s.STATUS === "on_going");

      //no active step → do nothing or activate first step (optional)
      if (idx === -1 || idx <= 0) return;

      // revert active → pending
      setSteps((prev) => {
        const copy = [...prev];
        copy[idx].STATUS = "pending";
        return copy;
      });

      setTimeout(() => {
        setSteps((prev) => {
          const copy = [...prev];
          copy[idx - 1].STATUS = "on_going";
          for (let i = idx; i < copy.length; i++) copy[i].STATUS = "pending";
          return copy;
        });
        animLock.current = false;
      }, 1200);
    };

    // exposing next() & prev() to parent
    useImperativeHandle(ref, () => ({ next, prev }));

    return (
      <div className="flex flex-col items-center gap-2 pb-8">
        <ol className="flex items-center w-full justify-center">
          {steps.map((step, i) => {
            const isActive = step.STATUS === "on_going";
            const isCompleted = step.STATUS === "completed";
            const isLast = i === steps.length - 1;

            return (
              <li key={i} className="flex items-center relative">
                <span
                  style={{ width: size, height: size }}
                  className={`flex items-center justify-center shrink-0 transition-all duration-500 text-sm font-bold border rounded-sm
                ${
                  isCompleted
                    ? "bg-sheet-filetype-color text-primary-text border-sheet-filetype-color"
                    : isActive
                    ? "border-sheet-filetype-color text-sheet-filetype-color bg-primary-text"
                    : "bg-primary-text text-minimap border-stroke"
                }`}
                >
                  {isCompleted ? (
                    <svg
                      className="w-5 h-5 animate-[fadeIn_0.3s]"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 11.917 9.724 16.5 19 7.5"
                      />{" "}
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
                          filter: "blur(1px)",
                        }}
                      ></span>{" "}
                      {/* Dot */}
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3 h-3 relative z-[2]"
                      >
                        {" "}
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="currentColor"
                        />{" "}
                      </svg>{" "}
                    </div>
                  ) : (
                    i + 1
                  )}
                </span>

                {step.LABEL && (
                  <span className="absolute -bottom-10 -left-7 text-primary-text w-[100px] text-xs text-center">
                    {step.LABEL}
                  </span>
                )}

                {!isLast && (
                  <div className="relative w-20">
                    <div className="h-1 bg-secondary-text w-full" />
                    <div
                      className="absolute top-0 left-0 h-1 bg-sheet-filetype-color transition-all duration-1000 delay-500"
                      style={{
                        width: step.STATUS === "completed" ? "100%" : "0%",
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
  }
);

Stepper.displayName = "Stepper";
