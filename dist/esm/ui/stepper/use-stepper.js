"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { deepCopySteps } from "./utils";
export function useStepper({ initialSteps, animationDelay, onStepChange, }) {
    const [steps, setSteps] = useState(() => deepCopySteps(initialSteps));
    const animLock = useRef(false);
    // Capture initialSteps once so `reset` always targets the original shape
    const initialStepsRef = useRef(initialSteps);
    // Keep callbacks/values behind refs so memoized functions don't churn on re-render
    const onStepChangeRef = useRef(onStepChange);
    const animationDelayRef = useRef(animationDelay);
    useEffect(() => {
        onStepChangeRef.current = onStepChange;
        animationDelayRef.current = animationDelay;
    }, [onStepChange, animationDelay]);
    const next = useCallback(() => {
        if (animLock.current)
            return;
        animLock.current = true;
        // Snapshot delay for the lifetime of this animation so mid-flight
        // changes to `animationDelay` don't reschedule queued updates.
        const delay = animationDelayRef.current;
        setSteps((prev) => {
            var _a, _b, _c, _d, _e;
            const copy = deepCopySteps(prev);
            const mainIdx = copy.findIndex((s) => s.status === "on_going");
            if (mainIdx === -1) {
                copy[0].status = "on_going";
                if ((_a = copy[0].subSteps) === null || _a === void 0 ? void 0 : _a.length) {
                    copy[0].subSteps[0].status = "on_going";
                }
                (_b = onStepChangeRef.current) === null || _b === void 0 ? void 0 : _b.call(onStepChangeRef, 0, "on_going");
                animLock.current = false;
                return copy;
            }
            const currentStep = copy[mainIdx];
            if ((_c = currentStep.subSteps) === null || _c === void 0 ? void 0 : _c.length) {
                const subIdx = currentStep.subSteps.findIndex((ss) => ss.status === "on_going");
                if (subIdx === -1) {
                    currentStep.subSteps[0].status = "on_going";
                    animLock.current = false;
                    return copy;
                }
                if (subIdx < currentStep.subSteps.length - 1) {
                    currentStep.subSteps[subIdx].status = "completed";
                    setTimeout(() => {
                        try {
                            setSteps((p) => {
                                const c = deepCopySteps(p);
                                c[mainIdx].subSteps[subIdx + 1].status = "on_going";
                                return c;
                            });
                        }
                        finally {
                            animLock.current = false;
                        }
                    }, delay);
                    return copy;
                }
                currentStep.subSteps[subIdx].status = "completed";
            }
            currentStep.status = "completed";
            (_d = onStepChangeRef.current) === null || _d === void 0 ? void 0 : _d.call(onStepChangeRef, mainIdx, "completed");
            if (mainIdx >= copy.length - 1) {
                // Terminal state — notify caller so they can react (e.g. show confetti)
                (_e = onStepChangeRef.current) === null || _e === void 0 ? void 0 : _e.call(onStepChangeRef, mainIdx, "done");
                animLock.current = false;
                return copy;
            }
            setTimeout(() => {
                try {
                    setSteps((p) => {
                        var _a, _b;
                        const c = deepCopySteps(p);
                        c[mainIdx + 1].status = "on_going";
                        if ((_a = c[mainIdx + 1].subSteps) === null || _a === void 0 ? void 0 : _a.length) {
                            c[mainIdx + 1].subSteps[0].status = "on_going";
                        }
                        (_b = onStepChangeRef.current) === null || _b === void 0 ? void 0 : _b.call(onStepChangeRef, mainIdx + 1, "on_going");
                        return c;
                    });
                }
                finally {
                    animLock.current = false;
                }
            }, delay);
            return copy;
        });
    }, []);
    const prev = useCallback(() => {
        if (animLock.current)
            return;
        animLock.current = true;
        const delay = animationDelayRef.current;
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
                        try {
                            setSteps((p) => {
                                const c = deepCopySteps(p);
                                c[mainIdx].subSteps[subIdx - 1].status = "on_going";
                                return c;
                            });
                        }
                        finally {
                            animLock.current = false;
                        }
                    }, delay);
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
                try {
                    setSteps((p) => {
                        var _a, _b;
                        const c = deepCopySteps(p);
                        c[mainIdx - 1].status = "on_going";
                        if ((_a = c[mainIdx - 1].subSteps) === null || _a === void 0 ? void 0 : _a.length) {
                            const subs = c[mainIdx - 1].subSteps;
                            subs.forEach((ss) => (ss.status = "completed"));
                            subs[subs.length - 1].status = "on_going";
                        }
                        (_b = onStepChangeRef.current) === null || _b === void 0 ? void 0 : _b.call(onStepChangeRef, mainIdx - 1, "on_going");
                        return c;
                    });
                }
                finally {
                    animLock.current = false;
                }
            }, delay);
            return copy;
        });
    }, []);
    const goTo = useCallback((index) => {
        setSteps((prev) => {
            var _a;
            if (index < 0 || index >= prev.length)
                return prev;
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
            (_a = onStepChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onStepChangeRef, index, "on_going");
            return copy;
        });
    }, []);
    const reset = useCallback(() => {
        setSteps(() => {
            // Always reset to the shape captured at mount, not whatever initialSteps points to now
            const copy = deepCopySteps(initialStepsRef.current);
            copy.forEach((step) => {
                var _a;
                step.status = "pending";
                (_a = step.subSteps) === null || _a === void 0 ? void 0 : _a.forEach((ss) => (ss.status = "pending"));
            });
            return copy;
        });
    }, []);
    return { steps, next, prev, goTo, reset };
}
