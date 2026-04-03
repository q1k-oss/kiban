"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";
import { ActionableToastContent } from "./actionable-toast";
import { ClearAllButtons } from "./clear-all-button";
import { createToast } from "./kiban-toast";
import { KibanLoadingContent } from "./loading-toast";
import { kibanPromise } from "./promise-toast";
import { toastStore } from "./toast-store";
const actionableToast = (options) => {
    var _a;
    const duration = (_a = options.duration) !== null && _a !== void 0 ? _a : 5000;
    return toast.custom((id) => _jsx(ActionableToastContent, Object.assign({ id: id }, options, { duration: duration })), { duration: Infinity });
};
const Toaster = (_a) => {
    var props = __rest(_a, []);
    const { theme = "system" } = useTheme();
    return (_jsxs(_Fragment, { children: [_jsx(ClearAllButtons, {}), _jsx(Sonner, Object.assign({ theme: theme, className: "toaster group", closeButton: true, toastOptions: {
                    duration: 5000,
                }, position: "top-right" }, props))] }));
};
const kibanToast = {
    success: createToast("success"),
    error: createToast("error"),
    warning: createToast("warning"),
    info: createToast("info"),
    dismiss: (id) => toast.dismiss(id),
    loading: (title, options) => {
        var _a, _b;
        const position = (_a = options === null || options === void 0 ? void 0 : options.position) !== null && _a !== void 0 ? _a : "top-right";
        const id = toast.custom((toastId) => (_jsx(KibanLoadingContent, { id: toastId, title: title, description: options === null || options === void 0 ? void 0 : options.description })), {
            duration: (_b = options === null || options === void 0 ? void 0 : options.duration) !== null && _b !== void 0 ? _b : Infinity,
            position,
            onDismiss: () => toastStore.untrack(id),
            onAutoClose: () => toastStore.untrack(id),
        });
        toastStore.track(id, position);
        return id;
    },
    promise: kibanPromise,
    custom: (render, options) => {
        var _a, _b;
        const position = ((_a = options === null || options === void 0 ? void 0 : options.position) !== null && _a !== void 0 ? _a : "top-right");
        const id = toast.custom((toastId) => render(toastId), {
            duration: (_b = options === null || options === void 0 ? void 0 : options.duration) !== null && _b !== void 0 ? _b : 5000,
            position,
            onDismiss: () => toastStore.untrack(id),
            onAutoClose: () => toastStore.untrack(id),
        });
        toastStore.track(id, position);
        return id;
    },
};
export { Toaster, actionableToast, kibanToast };
