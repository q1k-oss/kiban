"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn } from "../../utils";
import { AppIcon } from "../app-icon";
import { getStepStyle } from "./utils";
export const StepperHorizontal = ({ steps, size, subSize, showDescription, colors, styles, className, renderIndicator, expandedMap, onToggleExpanded, showExpandIcon, }) => (_jsx("div", { className: cn("flex flex-row items-start overflow-auto", className), children: steps.map((step, i) => {
        var _a, _b;
        const isLast = i === steps.length - 1;
        const hasSubSteps = !!((_a = step.subSteps) === null || _a === void 0 ? void 0 : _a.length);
        const stepLabel = `${i + 1}`;
        const parentFilled = step.status === "completed";
        const isExpanded = hasSubSteps ? ((_b = expandedMap[i]) !== null && _b !== void 0 ? _b : true) : false;
        return (_jsxs(React.Fragment, { children: [_jsxs("div", { className: "flex flex-col items-center shrink-0", children: [_jsx("span", { style: getStepStyle(step.status, size, colors, styles), className: "flex items-center justify-center shrink-0 transition-all duration-500", children: renderIndicator(step.status, stepLabel) }), showDescription && (_jsxs("div", { className: "flex flex-col items-center leading-none mt-2", style: { gap: styles.labelDescriptionGap }, children: [_jsx("span", { className: "font-medium text-center leading-tight transition-colors duration-300 whitespace-nowrap", style: {
                                        fontSize: styles.labelFontSize,
                                        color: step.status === "pending" ? colors.pendingText : "inherit",
                                    }, children: step.label }), step.description && (_jsx("span", { className: "text-center leading-tight transition-colors duration-300 whitespace-nowrap", style: {
                                        fontSize: styles.descriptionFontSize,
                                        color: colors.pendingText,
                                    }, children: step.description }))] })), hasSubSteps && showExpandIcon && (_jsx("button", { type: "button", onClick: () => onToggleExpanded(i), className: "flex items-center justify-center shrink-0 transition-transform duration-300 cursor-pointer bg-transparent border-none p-0 mt-1", style: {
                                transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                                color: step.status === "pending" ? colors.pendingText : "inherit",
                            }, children: _jsx(AppIcon, { iconName: "chevron-right", size: 14 }) }))] }), !isLast && (_jsxs("div", { className: "flex flex-col items-center", style: { flex: hasSubSteps ? "1 0 auto" : "0 0 auto" }, children: [_jsx("div", { className: "relative self-stretch", style: {
                                height: styles.connectorThickness,
                                marginTop: size / 2 - styles.connectorThickness / 2,
                                minWidth: styles.connectorGap,
                                background: colors.connectorEmpty,
                            }, children: _jsx("div", { className: "absolute top-0 left-0 h-full transition-all duration-700", style: {
                                    width: parentFilled ? "100%" : "0%",
                                    background: colors.connectorFilled,
                                } }) }), hasSubSteps && (_jsx("div", { className: "grid transition-[grid-template-rows,opacity] duration-300", style: {
                                gridTemplateRows: isExpanded ? "1fr" : "0fr",
                                opacity: isExpanded ? 1 : 0,
                            }, children: _jsx("div", { style: { overflow: "hidden" }, children: _jsx("div", { style: {
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                        paddingTop: isExpanded ? styles.subStepsPadding : 0,
                                        marginTop: isExpanded ? styles.subStepsOffset : 0,
                                    }, children: step.subSteps.map((sub, subIdx) => {
                                        const isLastSub = subIdx === step.subSteps.length - 1;
                                        const subLabel = `${i + 1}.${subIdx + 1}`;
                                        const subFilled = sub.status === "completed";
                                        return (_jsxs(React.Fragment, { children: [_jsxs("div", { className: "flex flex-col items-center shrink-0", children: [_jsx("span", { style: getStepStyle(sub.status, subSize, colors, styles, true), className: "flex items-center justify-center shrink-0 transition-all duration-500", children: renderIndicator(sub.status, subLabel, true) }), showDescription && (_jsx("span", { className: "font-medium text-center leading-tight transition-colors duration-300 whitespace-nowrap", style: {
                                                                marginTop: 6,
                                                                fontSize: styles.subLabelFontSize,
                                                                color: sub.status === "pending" ? colors.pendingText : "inherit",
                                                            }, children: sub.label }))] }), !isLastSub && (_jsx("div", { className: "relative shrink-0", style: {
                                                        height: styles.subConnectorThickness,
                                                        width: styles.subConnectorGap,
                                                        marginTop: subSize / 2 - styles.subConnectorThickness / 2,
                                                        background: colors.connectorEmpty,
                                                    }, children: _jsx("div", { className: "absolute top-0 left-0 h-full transition-all duration-700", style: {
                                                            width: subFilled ? "100%" : "0%",
                                                            background: colors.connectorFilled,
                                                        } }) }))] }, subIdx));
                                    }) }) }) }))] }))] }, i));
    }) }));
