"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { cn } from "../../utils";
import { AppIcon } from "../app-icon";
import { Button } from "../button";
import { TimeBar } from "./progress-bar";
import { toastStore } from "./toast-store";
import { useCountdown } from "./use-countdown";
import { resolveColors } from "./variants";
export const KibanToastContent = ({ id, title, description, variant, duration = 5000, showProgress = true, colors, className, }) => {
    const config = resolveColors(variant, colors);
    const progress = useCountdown(id, duration);
    return (_jsx("div", { className: cn("rounded-lg shadow-lg p-px w-[380px]", className), style: { background: config.borderGradient }, children: _jsxs("div", { className: "relative rounded-lg overflow-hidden flex flex-col", style: { background: config.bgColor }, children: [_jsx("div", { className: "p-2 flex flex-col gap-2", children: _jsxs("div", { className: "flex items-start gap-2", children: [_jsx("span", { className: "shrink-0", style: { color: config.iconColor }, children: _jsx(AppIcon, { iconName: config.iconName, source: config.iconSource, size: 18, strokeWidth: 1.5 }) }), _jsxs("div", { className: "flex-1 min-w-0 flex flex-col gap-1", children: [_jsx("span", { className: "font-medium text-primary-text text-xs leading-tight", children: title }), description && (_jsx("span", { className: "text-tertiary-text text-xs font-normal", children: description }))] }), _jsx(Button, { variant: "ghost", onClick: () => toast.dismiss(id), className: "bg-transparent border-none text-tertiary-text cursor-pointer p-1 shrink-0 rounded-md", children: _jsx(AppIcon, { iconName: "x", size: 18, strokeWidth: 1.5 }) })] }) }), showProgress && _jsx(TimeBar, { progress: progress, color: config.progressColor })] }) }));
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
