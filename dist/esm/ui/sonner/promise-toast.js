"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { toast } from "sonner";
import { KibanToastContent } from "./kiban-toast";
import { KibanLoadingContent } from "./loading-toast";
import { toastStore } from "./toast-store";
export const kibanPromise = (promise, options) => {
    var _a;
    const position = (_a = options.position) !== null && _a !== void 0 ? _a : "top-right";
    const id = toast.custom((toastId) => {
        var _a;
        return (_jsx(KibanLoadingContent, { id: toastId, title: options.loading, description: (_a = options.description) === null || _a === void 0 ? void 0 : _a.loading }));
    }, {
        duration: Infinity,
        position,
        onDismiss: () => toastStore.untrack(id),
        onAutoClose: () => toastStore.untrack(id),
    });
    toastStore.track(id, position);
    promise
        .then((data) => {
        var _a, _b;
        const title = typeof options.success === "function"
            ? options.success(data)
            : options.success;
        const desc = typeof ((_a = options.description) === null || _a === void 0 ? void 0 : _a.success) === "function"
            ? options.description.success(data)
            : (_b = options.description) === null || _b === void 0 ? void 0 : _b.success;
        toast.custom((toastId) => (_jsx(KibanToastContent, { id: toastId, title: title, description: desc, variant: "success" })), { id, duration: 5000, position });
    })
        .catch((err) => {
        var _a, _b;
        const title = typeof options.error === "function"
            ? options.error(err)
            : options.error;
        const desc = typeof ((_a = options.description) === null || _a === void 0 ? void 0 : _a.error) === "function"
            ? options.description.error(err)
            : (_b = options.description) === null || _b === void 0 ? void 0 : _b.error;
        toast.custom((toastId) => (_jsx(KibanToastContent, { id: toastId, title: title, description: desc, variant: "error" })), { id, duration: 5000, position });
    })
        .catch((err) => {
        console.error("[kiban-toast] Promise handler threw:", err);
    });
    return id;
};
