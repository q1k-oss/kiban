"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { AppIcon } from "../app-icon";
import { Button } from "../button";
import { toastStore } from "./toast-store";
import { variantConfig } from "./variants";
export const KibanToastContent = ({ id, title, description, variant, }) => {
    const config = variantConfig[variant];
    return (_jsx("div", { className: "relative overflow-hidden rounded-xl shadow-lg", children: _jsxs("div", { className: "border-1 border-button-border-disabled rounded-xl overflow-hidden", children: [_jsx("div", { className: "absolute -top-2 -left-2 w-7 h-7 rounded-full blur-sm pointer-events-none", style: { background: config.borderColor } }), _jsxs("div", { className: "relative w-[420px] p-4 flex items-start gap-3", style: { background: config.bgColor }, children: [_jsx("div", { className: "absolute top-4 -left-5 w-24 h-2.5 rotate-45 blur-lg pointer-events-none", style: {
                                background: `linear-gradient(to right, color-mix(in srgb, ${config.progressColor} , transparent), transparent)`,
                            } }), _jsx("div", { className: "p-1.5 rounded-full flex items-center justify-center shrink-0", style: { background: `${config.iconColor}33` }, children: _jsx(AppIcon, { iconName: config.iconName, source: config.iconSource, size: 14, strokeWidth: 2, className: `text-[${config.iconColor}]` }) }), _jsxs("div", { className: "flex-1 min-w-0 pt-0.5 flex flex-col gap-1", children: [_jsx("span", { className: "font-medium text-primary-text text-sm leading-tight block", children: title }), description && (_jsx("span", { className: "text-tertiary-text text-xs block", children: description }))] }), _jsx(Button, { variant: "ghost", onClick: () => toast.dismiss(id), className: "bg-transparent border-none text-tertiary-text cursor-pointer p-1 shrink-0  rounded-md", children: _jsx(AppIcon, { iconName: "x", size: 14, strokeWidth: 2 }) })] })] }) }));
};
const createToast = (variant) => {
    return (title, options) => {
        var _a, _b;
        const duration = (_a = options === null || options === void 0 ? void 0 : options.duration) !== null && _a !== void 0 ? _a : 5000;
        const position = (_b = options === null || options === void 0 ? void 0 : options.position) !== null && _b !== void 0 ? _b : "top-right";
        const id = toast.custom((toastId) => (_jsx(KibanToastContent, { id: toastId, title: title, description: options === null || options === void 0 ? void 0 : options.description, variant: variant })), {
            duration,
            position,
            onDismiss: () => toastStore.untrack(id),
            onAutoClose: () => toastStore.untrack(id),
        });
        toastStore.track(id, position);
        return id;
    };
};
export { createToast };
