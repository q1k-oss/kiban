"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { toast } from "sonner";
import { cn } from "../../utils";
import { AppIcon } from "../app-icon";
import { Button } from "../button";
import { useCountdown } from "./use-countdown";
import { resolveColors } from "./variants";
import { TimeBar } from "./time-bar";
const DEFAULT_ACTIONS = [
    { label: "Yes", icon: "check" },
    { label: "No", icon: "x" },
];
const resolveAction = (action) => {
    var _a, _b, _c;
    return ({
        label: (_a = action.label) !== null && _a !== void 0 ? _a : "OK",
        icon: (_b = action.icon) !== null && _b !== void 0 ? _b : "check",
        variant: action.variant,
        onClick: (_c = action.onClick) !== null && _c !== void 0 ? _c : (() => { }),
    });
};
const ToastIcon = ({ config }) => (_jsx("span", { className: "shrink-0", style: { color: config.iconColor }, children: _jsx(AppIcon, { iconName: config.iconName, source: config.iconSource, size: 20, strokeWidth: 1.5 }) }));
const CloseButton = ({ toastId }) => (_jsx(Button, { variant: "ghost", onClick: () => toast.dismiss(toastId), className: "bg-transparent border-none text-tertiary-text cursor-pointer p-1 shrink-0 rounded-md", children: _jsx(AppIcon, { iconName: "x", size: 20, strokeWidth: 1.5 }) }));
const ActionButton = ({ action, isLoading, disabled, onPress, }) => (_jsxs(Button, { variant: "outline", size: "sm", disabled: disabled, onClick: onPress, className: "text-xs font-medium cursor-pointer gap-1.5 p-1.5 min-w-16", children: [isLoading ? (_jsx(AppIcon, { iconName: "loader", size: 12, strokeWidth: 2, className: "animate-spin" })) : (_jsx(AppIcon, { iconName: action.icon, size: 12, strokeWidth: 2 })), action.label] }));
export const ActionableToastContent = ({ id, title, description, variant = "success", duration = 5000, showProgress = true, colors, className, action, actions, }) => {
    const config = resolveColors(variant, colors);
    const rawActions = actions !== null && actions !== void 0 ? actions : (action ? [action] : DEFAULT_ACTIONS);
    const resolvedActions = rawActions.map(resolveAction);
    const [activeIdx, setActiveIdx] = React.useState(null);
    const [paused, setPaused] = React.useState(false);
    const mountedRef = React.useRef(true);
    React.useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);
    const isProcessing = activeIdx !== null;
    const progress = useCountdown(id, duration, isProcessing || paused);
    const secondsLeft = Math.ceil((progress * duration) / 1000);
    const handleAction = (act, idx) => __awaiter(void 0, void 0, void 0, function* () {
        setActiveIdx(idx);
        try {
            yield act.onClick();
            setTimeout(() => toast.dismiss(id), 300);
        }
        catch (err) {
            console.error("[kiban-toast] Action failed:", err);
            if (mountedRef.current)
                setActiveIdx(null);
        }
    });
    return (_jsx("div", { role: variant === "error" ? "alertdialog" : "dialog", "aria-live": variant === "error" ? "assertive" : "polite", "aria-atomic": "true", "aria-label": title, className: cn("rounded-lg shadow-lg p-px w-[380px] max-w-[380px] overflow-hidden", showProgress && !isProcessing && "pb-0", className), style: { background: config.borderGradient }, children: _jsxs("div", { className: "rounded-lg overflow-hidden bg-[#151515]", children: [_jsxs("div", { className: "p-3 flex flex-col gap-2", style: { background: config.bgColor }, children: [_jsxs("div", { className: cn("flex gap-2", description ? "items-start" : "items-center"), children: [_jsx(ToastIcon, { config: config }), _jsxs("div", { className: "flex-1 min-w-0 flex flex-col gap-2", children: [_jsx("span", { className: "font-medium text-primary-text text-sm leading-tight", children: title }), description && (_jsx("span", { className: "text-tertiary-text text-xs font-normal", children: description }))] }), !isProcessing && _jsx(CloseButton, { toastId: id })] }), _jsx("div", { className: "flex justify-end gap-2 ", children: resolvedActions.map((act, idx) => {
                                if (isProcessing && activeIdx !== idx)
                                    return null;
                                return (_jsx(ActionButton, { action: act, isLoading: activeIdx === idx, disabled: isProcessing, onPress: () => handleAction(act, idx) }, idx));
                            }) })] }), !isProcessing && showProgress && (_jsxs(_Fragment, { children: [_jsx("div", { className: "px-2 border-t", children: _jsx("span", { className: "text-[11px] text-tertiary-text flex items-center gap-1 flex-wrap", children: paused ? (_jsxs(_Fragment, { children: ["Paused.", " ", _jsx(Button, { variant: "ghost", onClick: () => setPaused(false), className: "font-medium text-secondary-text bg-transparent border-none cursor-pointer p-0 text-[11px] hover:text-primary-text hover:bg-transparent rounded-xs inline-block", children: "Click to resume." })] })) : (_jsxs(_Fragment, { children: ["This message will close in ", secondsLeft, "s.", " ", _jsx(Button, { variant: "ghost", onClick: () => setPaused(true), className: "font-medium text-primary-text bg-transparent border-none cursor-pointer p-0 text-[11px] rounded-xs hover:bg-transparent inline-block", children: "Click to stop." })] })) }) }), _jsx(TimeBar, { progress: progress, color: config.progressColor })] }))] }) }));
};
