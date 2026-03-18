"use client";
import { useState, useRef, useCallback } from "react";
import { deepCopySteps } from "./utils";
export function useStepper({ initialSteps, animationDelay, onStepChange, }) {
    const [steps, setSteps] = useState(() => deepCopySteps(initialSteps));
    const animLock = useRef(false);
    const next = useCallback(() => {
        if (animLock.current)
            return;
        animLock.current = true;
        setSteps((prev) => {
            var _a, _b;
            const copy = deepCopySteps(prev);
            const mainIdx = copy.findIndex((s) => s.status === "on_going");
            if (mainIdx === -1) {
                copy[0].status = "on_going";
                if ((_a = copy[0].subSteps) === null || _a === void 0 ? void 0 : _a.length) {
                    copy[0].subSteps[0].status = "on_going";
                }
                onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(0, "on_going");
                animLock.current = false;
                return copy;
            }
            const currentStep = copy[mainIdx];
            if ((_b = currentStep.subSteps) === null || _b === void 0 ? void 0 : _b.length) {
                const subIdx = currentStep.subSteps.findIndex((ss) => ss.status === "on_going");
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
                            c[mainIdx].subSteps[subIdx + 1].status = "on_going";
                            return c;
                        });
                        animLock.current = false;
                    }, animationDelay);
                    return copy;
                }
                currentStep.subSteps[subIdx].status = "completed";
            }
            currentStep.status = "completed";
            onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(mainIdx, "completed");
            if (mainIdx >= copy.length - 1) {
                animLock.current = false;
                return copy;
            }
            setTimeout(() => {
                setSteps((p) => {
                    var _a;
                    const c = deepCopySteps(p);
                    c[mainIdx + 1].status = "on_going";
                    if ((_a = c[mainIdx + 1].subSteps) === null || _a === void 0 ? void 0 : _a.length) {
                        c[mainIdx + 1].subSteps[0].status = "on_going";
                    }
                    onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(mainIdx + 1, "on_going");
                    return c;
                });
                animLock.current = false;
            }, animationDelay);
            return copy;
        });
    }, [animationDelay, onStepChange]);
    const prev = useCallback(() => {
        if (animLock.current)
            return;
        animLock.current = true;
        setSteps((prev) => {
            var _a;
            const copy = deepCopySteps(prev);
            const mainIdx = copy.findIndex((s) => s.status === "on_going");
            if (mainIdx === -1) {
                animLock.current = false;
                return copy;
            }
            const currentStep = copy[mainIdx];
            if ((_a = currentStep.subSteps) === null || _a === void 0 ? void 0 : _a.length) {
                const subIdx = currentStep.subSteps.findIndex((ss) => ss.status === "on_going");
                if (subIdx > 0) {
                    currentStep.subSteps[subIdx].status = "pending";
                    setTimeout(() => {
                        setSteps((p) => {
                            const c = deepCopySteps(p);
                            c[mainIdx].subSteps[subIdx - 1].status = "on_going";
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
                    var _a;
                    const c = deepCopySteps(p);
                    c[mainIdx - 1].status = "on_going";
                    if ((_a = c[mainIdx - 1].subSteps) === null || _a === void 0 ? void 0 : _a.length) {
                        const subs = c[mainIdx - 1].subSteps;
                        subs.forEach((ss) => (ss.status = "completed"));
                        subs[subs.length - 1].status = "on_going";
                    }
                    onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(mainIdx - 1, "on_going");
                    return c;
                });
                animLock.current = false;
            }, animationDelay);
            return copy;
        });
    }, [animationDelay, onStepChange]);
    const goTo = useCallback((index) => {
        if (index < 0 || index >= steps.length)
            return;
        setSteps((prev) => {
            const copy = deepCopySteps(prev);
            copy.forEach((step, i) => {
                var _a, _b, _c;
                if (i < index) {
                    step.status = "completed";
                    (_a = step.subSteps) === null || _a === void 0 ? void 0 : _a.forEach((ss) => (ss.status = "completed"));
                }
                else if (i === index) {
                    step.status = "on_going";
                    (_b = step.subSteps) === null || _b === void 0 ? void 0 : _b.forEach((ss, si) => {
                        ss.status = si === 0 ? "on_going" : "pending";
                    });
                }
                else {
                    step.status = "pending";
                    (_c = step.subSteps) === null || _c === void 0 ? void 0 : _c.forEach((ss) => (ss.status = "pending"));
                }
            });
            onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(index, "on_going");
            return copy;
        });
    }, [steps.length, onStepChange]);
    const reset = useCallback(() => {
        setSteps(() => {
            const copy = deepCopySteps(initialSteps);
            copy.forEach((step) => {
                var _a;
                step.status = "pending";
                (_a = step.subSteps) === null || _a === void 0 ? void 0 : _a.forEach((ss) => (ss.status = "pending"));
            });
            return copy;
        });
    }, [initialSteps]);
    return { steps, next, prev, goTo, reset };
}
