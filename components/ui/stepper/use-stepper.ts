"use client";

import { useState, useRef, useCallback } from "react";
import type { IStepItem, StepStatus } from "./types";
import { deepCopySteps } from "./utils";

interface UseStepperOptions {
  initialSteps: IStepItem[];
  animationDelay: number;
  onStepChange?: (stepIndex: number, status: StepStatus) => void;
}

export function useStepper({
  initialSteps,
  animationDelay,
  onStepChange,
}: UseStepperOptions) {
  const [steps, setSteps] = useState<IStepItem[]>(() =>
    deepCopySteps(initialSteps)
  );
  const animLock = useRef(false);

  const next = useCallback(() => {
    if (animLock.current) return;
    animLock.current = true;

    setSteps((prev) => {
      const copy = deepCopySteps(prev);
      const mainIdx = copy.findIndex((s) => s.status === "on_going");

      if (mainIdx === -1) {
        copy[0].status = "on_going";
        if (copy[0].subSteps?.length) {
          copy[0].subSteps[0].status = "on_going";
        }
        onStepChange?.(0, "on_going");
        animLock.current = false;
        return copy;
      }

      const currentStep = copy[mainIdx];

      if (currentStep.subSteps?.length) {
        const subIdx = currentStep.subSteps.findIndex(
          (ss) => ss.status === "on_going"
        );

        if (subIdx === -1) {
          currentStep.subSteps[0].status = "on_going";
          animLock.current = false;
          return copy;
        }

        if (subIdx < currentStep.subSteps.length - 1) {
          currentStep.subSteps[subIdx].status = "completed";
          setTimeout(() => {
            setSteps((p) => {
              const c = deepCopySteps(p);
              c[mainIdx].subSteps![subIdx + 1].status = "on_going";
              return c;
            });
            animLock.current = false;
          }, animationDelay);
          return copy;
        }

        currentStep.subSteps[subIdx].status = "completed";
      }

      currentStep.status = "completed";
      onStepChange?.(mainIdx, "completed");

      if (mainIdx >= copy.length - 1) {
        animLock.current = false;
        return copy;
      }

      setTimeout(() => {
        setSteps((p) => {
          const c = deepCopySteps(p);
          c[mainIdx + 1].status = "on_going";
          if (c[mainIdx + 1].subSteps?.length) {
            c[mainIdx + 1].subSteps![0].status = "on_going";
          }
          onStepChange?.(mainIdx + 1, "on_going");
          return c;
        });
        animLock.current = false;
      }, animationDelay);

      return copy;
    });
  }, [animationDelay, onStepChange]);

  const prev = useCallback(() => {
    if (animLock.current) return;
    animLock.current = true;

    setSteps((prev) => {
      const copy = deepCopySteps(prev);
      const mainIdx = copy.findIndex((s) => s.status === "on_going");

      if (mainIdx === -1) {
        animLock.current = false;
        return copy;
      }

      const currentStep = copy[mainIdx];

      if (currentStep.subSteps?.length) {
        const subIdx = currentStep.subSteps.findIndex(
          (ss) => ss.status === "on_going"
        );

        if (subIdx > 0) {
          currentStep.subSteps[subIdx].status = "pending";
          setTimeout(() => {
            setSteps((p) => {
              const c = deepCopySteps(p);
              c[mainIdx].subSteps![subIdx - 1].status = "on_going";
              return c;
            });
            animLock.current = false;
          }, animationDelay);
          return copy;
        }

        if (subIdx === 0) {
          currentStep.subSteps.forEach((ss) => (ss.status = "pending"));
        }
      }

      if (mainIdx <= 0) {
        currentStep.status = "pending";
        animLock.current = false;
        return copy;
      }

      currentStep.status = "pending";

      setTimeout(() => {
        setSteps((p) => {
          const c = deepCopySteps(p);
          c[mainIdx - 1].status = "on_going";
          if (c[mainIdx - 1].subSteps?.length) {
            const subs = c[mainIdx - 1].subSteps!;
            subs.forEach((ss) => (ss.status = "completed"));
            subs[subs.length - 1].status = "on_going";
          }
          onStepChange?.(mainIdx - 1, "on_going");
          return c;
        });
        animLock.current = false;
      }, animationDelay);

      return copy;
    });
  }, [animationDelay, onStepChange]);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= steps.length) return;
      setSteps((prev) => {
        const copy = deepCopySteps(prev);
        copy.forEach((step, i) => {
          if (i < index) {
            step.status = "completed";
            step.subSteps?.forEach((ss) => (ss.status = "completed"));
          } else if (i === index) {
            step.status = "on_going";
            step.subSteps?.forEach((ss, si) => {
              ss.status = si === 0 ? "on_going" : "pending";
            });
          } else {
            step.status = "pending";
            step.subSteps?.forEach((ss) => (ss.status = "pending"));
          }
        });
        onStepChange?.(index, "on_going");
        return copy;
      });
    },
    [steps.length, onStepChange]
  );

  const reset = useCallback(() => {
    setSteps(() => {
      const copy = deepCopySteps(initialSteps);
      copy.forEach((step) => {
        step.status = "pending";
        step.subSteps?.forEach((ss) => (ss.status = "pending"));
      });
      return copy;
    });
  }, [initialSteps]);

  return { steps, next, prev, goTo, reset };
}
