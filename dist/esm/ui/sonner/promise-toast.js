"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { toast } from "sonner";
import { KibanToastContent } from "./kiban-toast";
import { KibanLoadingContent } from "./loading-toast";
export const kibanPromise = (promise, options) => {
    const id = toast.custom((toastId) => {
        var _a;
        return (_jsx(KibanLoadingContent, { id: toastId, title: options.loading, description: (_a = options.description) === null || _a === void 0 ? void 0 : _a.loading }));
    }, { duration: Infinity, position: options.position });
    promise
        .then((data) => {
        var _a, _b;
        const title = typeof options.success === "function"
            ? options.success(data)
            : options.success;
        const desc = typeof ((_a = options.description) === null || _a === void 0 ? void 0 : _a.success) === "function"
            ? options.description.success(data)
            : (_b = options.description) === null || _b === void 0 ? void 0 : _b.success;
        toast.custom((toastId) => (_jsx(KibanToastContent, { id: toastId, title: title, description: desc, variant: "success" })), { id, duration: 5000, position: options.position });
    })
        .catch((err) => {
        var _a, _b;
        const title = typeof options.error === "function"
            ? options.error(err)
            : options.error;
        const desc = typeof ((_a = options.description) === null || _a === void 0 ? void 0 : _a.error) === "function"
            ? options.description.error(err)
            : (_b = options.description) === null || _b === void 0 ? void 0 : _b.error;
        toast.custom((toastId) => (_jsx(KibanToastContent, { id: toastId, title: title, description: desc, variant: "error" })), { id, duration: 5000, position: options.position });
    });
    return id;
};
