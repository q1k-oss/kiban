"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { cn } from "../../utils";
import { AppIcon } from "../app-icon";
import { Button } from "../button";
import { ProgressBar } from "./progress-bar";
import { toastStore } from "./toast-store";
import { useCountdown } from "./use-countdown";
import { resolveColors } from "./variants";
export const KibanToastContent = ({ id, title, description, variant, duration = 5000, showProgress = true, colors, className, }) => {
    const config = resolveColors(variant, colors);
    const progress = useCountdown(id, duration);
    return (_jsx("div", { className: cn("rounded-lg shadow-lg p-px w-[420px]", className), style: { background: config.borderGradient }, children: _jsxs("div", { className: "relative rounded-lg overflow-hidden flex flex-col", style: { background: config.bgColor }, children: [_jsxs("div", { className: "p-4 flex flex-col gap-2", children: [_jsxs("div", { className: "flex items-center gap-2.5", children: [_jsx("span", { className: "shrink-0", style: { color: config.iconColor }, children: _jsx(AppIcon, { iconName: config.iconName, source: config.iconSource, size: 20, strokeWidth: 1.5 }) }), _jsx("span", { className: "font-semibold text-primary-text text-sm leading-tight flex-1", children: title }), _jsx(Button, { variant: "ghost", onClick: () => toast.dismiss(id), className: "bg-transparent border-none text-tertiary-text cursor-pointer p-1 shrink-0 rounded-md", children: _jsx(AppIcon, { iconName: "x", size: 14, strokeWidth: 2 }) })] }), description && (_jsx("span", { className: "text-tertiary-text text-xs block", children: description }))] }), showProgress && _jsx(ProgressBar, { progress: progress, color: config.progressColor })] }) }));
};
const createToast = (variant) => {
    return (title, options) => {
        var _a, _b;
        const duration = (_a = options === null || options === void 0 ? void 0 : options.duration) !== null && _a !== void 0 ? _a : 5000;
        const position = (_b = options === null || options === void 0 ? void 0 : options.position) !== null && _b !== void 0 ? _b : "top-right";
        const id = toast.custom((toastId) => {
            var _a;
            return (_jsx(KibanToastContent, { id: toastId, title: title, description: options === null || options === void 0 ? void 0 : options.description, variant: variant, duration: duration, showProgress: (_a = options === null || options === void 0 ? void 0 : options.showProgress) !== null && _a !== void 0 ? _a : true, colors: options === null || options === void 0 ? void 0 : options.colors, className: options === null || options === void 0 ? void 0 : options.className }));
        }, {
            duration: duration + 50,
            position,
            onDismiss: () => toastStore.untrack(id),
            onAutoClose: () => toastStore.untrack(id),
        });
        toastStore.track(id, position);
        return id;
    };
};
export { createToast };
