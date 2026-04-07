"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { AppIcon } from "../app-icon";
import { Button } from "../button";
import { toastStore } from "./toast-store";
import { variantConfig } from "./variants";
export const KibanToastContent = ({ id, title, description, variant, }) => {
    const config = variantConfig[variant];
    return (_jsx("div", { className: "rounded-lg shadow-lg p-px w-[420px]", style: { background: config.borderGradient }, children: _jsxs("div", { className: "relative rounded-lg p-4 flex flex-col gap-2 overflow-hidden", style: { background: config.bgColor }, children: [_jsxs("div", { className: "flex items-center gap-2.5", children: [_jsx("span", { className: "shrink-0", style: { color: config.iconColor }, children: _jsx(AppIcon, { iconName: config.iconName, source: config.iconSource, size: 20, strokeWidth: 1.5 }) }), _jsx("span", { className: "font-semibold text-primary-text text-sm leading-tight flex-1", children: title }), _jsx(Button, { variant: "ghost", onClick: () => toast.dismiss(id), className: "bg-transparent border-none text-tertiary-text cursor-pointer p-1 shrink-0 rounded-md", children: _jsx(AppIcon, { iconName: "x", size: 14, strokeWidth: 2 }) })] }), description && (_jsx("span", { className: "text-tertiary-text text-xs block", children: description }))] }) }));
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
