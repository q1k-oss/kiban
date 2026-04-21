"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useImperativeHandle, forwardRef, useState } from "react";
import { CheckIcon, DotIndicator } from "./icons";
import { StepperHorizontal } from "./stepper-horizontal";
import { StepperVertical } from "./stepper-vertical";
import { useStepper } from "./use-stepper";
import { DEFAULT_COLORS, DEFAULT_SIZES, DEFAULT_STYLES } from "./utils";
const DEFAULT_STEPS = [
    { label: "Step 1", status: "on_going" },
    { label: "Step 2", status: "pending" },
    { label: "Step 3", status: "pending" },
];
export const Stepper = forwardRef(({ steps: initialSteps = DEFAULT_STEPS, indicator = "number", orientation = "vertical", colors = {}, sizes = {}, styles = {}, animationDelay = 600, className, showDescription = true, defaultExpanded = true, showExpandIcon = true, onStepChange, }, ref) => {
    const resolvedColors = Object.assign(Object.assign({}, DEFAULT_COLORS), Object.fromEntries(Object.entries(colors).filter(([, v]) => v !== undefined)));
    const resolvedSizes = Object.assign(Object.assign({}, DEFAULT_SIZES), Object.fromEntries(Object.entries(sizes).filter(([, v]) => v !== undefined)));
    const resolvedStyles = Object.assign(Object.assign({}, DEFAULT_STYLES), Object.fromEntries(Object.entries(styles).filter(([, v]) => v !== undefined)));
    const { steps, next, prev, goTo, reset } = useStepper({
        initialSteps,
        animationDelay,
        onStepChange,
    });
    useImperativeHandle(ref, () => ({ next, prev, goTo, reset }));
    const [expandedMap, setExpandedMap] = useState(() => {
        const map = {};
        initialSteps.forEach((step, i) => {
            var _a;
            if ((_a = step.subSteps) === null || _a === void 0 ? void 0 : _a.length)
                map[i] = defaultExpanded;
        });
        return map;
    });
    const toggleExpanded = (index) => {
        setExpandedMap((prev) => (Object.assign(Object.assign({}, prev), { [index]: !prev[index] })));
    };
    const { boxSize, subBoxSize } = resolvedSizes;
    const renderIndicator = (status, label, isSubStep) => {
        var _a, _b;
        const currentSize = isSubStep ? subBoxSize : boxSize;
        const checkSize = isSubStep
            ? ((_a = resolvedSizes.subCompletedIconSize) !== null && _a !== void 0 ? _a : Math.round(currentSize * 0.45))
            : ((_b = resolvedSizes.completedIconSize) !== null && _b !== void 0 ? _b : Math.round(currentSize * 0.45));
        if (status === "completed") {
            return _jsx(CheckIcon, { color: resolvedColors.completedIconColor, size: checkSize });
        }
        if (indicator === "dot" || (indicator === "number" && status === "on_going")) {
            const dotSize = isSubStep ? resolvedSizes.subDotSize : resolvedSizes.dotSize;
            return (_jsx(DotIndicator, { color: status === "on_going" ? resolvedColors.activeDotColor : resolvedColors.pendingDotColor, glowColor: resolvedColors.glowColor, isActive: status === "on_going", dotSize: dotSize, glowSize: resolvedSizes.glowSize }));
        }
        return (_jsx("span", { className: "font-semibold", style: {
                fontSize: isSubStep
                    ? resolvedStyles.subIndicatorFontSize
                    : resolvedStyles.indicatorFontSize,
            }, children: label }));
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
    return orientation === "vertical" ? (_jsx(StepperVertical, Object.assign({}, sharedProps))) : (_jsx(StepperHorizontal, Object.assign({}, sharedProps)));
});
Stepper.displayName = "Stepper";
