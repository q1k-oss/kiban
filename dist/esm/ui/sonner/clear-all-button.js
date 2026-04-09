"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { toast } from "sonner";
import { AppIcon } from "../app-icon";
import { Button } from "../button";
import { toastStore } from "./toast-store";
const positionClasses = {
    "top-left": "top-1 left-4",
    "top-center": "top-1 left-1/2 -translate-x-1/2",
    "top-right": "top-1 right-4",
    "bottom-left": "bottom-1 left-4",
    "bottom-center": "bottom-1 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-1 right-4",
};
const emptyArray = [];
export const ClearAllButtons = () => {
    const tracked = React.useSyncExternalStore(toastStore.subscribe, toastStore.getSnapshot, () => emptyArray);
    const grouped = tracked.reduce((acc, t) => {
        var _a;
        var _b;
        ((_a = acc[_b = t.position]) !== null && _a !== void 0 ? _a : (acc[_b] = [])).push(t);
        return acc;
    }, {});
    const positions = Object.entries(grouped).filter(([, items]) => items.length >= 2);
    if (positions.length === 0)
        return null;
    return (_jsx(_Fragment, { children: positions.map(([position]) => (_jsx("div", { className: `fixed z-[999999999] ${positionClasses[position]}`, children: _jsxs(Button, { size: "sm", onClick: () => {
                    const ids = toastStore.untrackByPosition(position);
                    ids.forEach((id) => toast.dismiss(id));
                }, className: "text-xs gap-1.5 px-2 py-1 rounded-xs", children: [_jsx(AppIcon, { iconName: "x", size: 12, strokeWidth: 2 }), "Clear all"] }) }, position))) }));
};
