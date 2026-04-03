"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { toast } from "sonner";
import { AppIcon } from "../app-icon";
import { Button } from "../button";
import { variantConfig } from "./variants";
export const ActionableToastContent = ({ id, title, description, variant = "success", duration = 5000, action, }) => {
    const config = variantConfig[variant];
    const [paused, setPaused] = React.useState(false);
    const [remaining, setRemaining] = React.useState(duration);
    const startTimeRef = React.useRef(Date.now());
    const remainingAtPauseRef = React.useRef(duration);
    React.useEffect(() => {
        if (paused) {
            remainingAtPauseRef.current = remaining;
            return;
        }
        startTimeRef.current = Date.now();
        const startRemaining = remainingAtPauseRef.current;
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTimeRef.current;
            const left = Math.max(0, startRemaining - elapsed);
            setRemaining(left);
            if (left <= 0) {
                clearInterval(interval);
                toast.dismiss(id);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [paused, id]);
    const progress = remaining / duration;
    const secondsLeft = Math.ceil(remaining / 1000);
    return (_jsxs("div", { className: "w-[450px] rounded-xl overflow-hidden shadow-lg", style: { background: config.bgColor }, children: [_jsx("div", { className: "px-5 py-4", children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsx("span", { className: "mt-0.5 shrink-0", style: { color: config.iconColor }, children: _jsx(AppIcon, { iconName: config.iconName, source: config.iconSource, size: 20, strokeWidth: 2 }) }), _jsxs("div", { className: "flex-1 min-w-0 ", children: [_jsx("span", { className: "font-semibold text-primary-text text-sm block", children: title }), description && (_jsx("span", { className: "mt-1 text-tertiary-text text-xs block", children: description })), action && (_jsx(Button, { onClick: () => {
                                        action.onClick();
                                        toast.dismiss(id);
                                    }, className: "mt-4 py-1.5 px-2 text-xs font-medium cursor-pointer", children: action.label }))] }), _jsx(Button, { variant: "ghost", onClick: () => toast.dismiss(id), className: "bg-transparent border-none text-tertiary-text cursor-pointer p-1 shrink-0 rounded-md", children: _jsx(AppIcon, { iconName: "x", size: 16, strokeWidth: 2 }) })] }) }), _jsx("div", { className: "border-t border-stroke px-5 py-2 flex items-center", children: _jsx("span", { className: "text-xs text-tertiary", children: paused ? (_jsxs("span", { children: ["Paused.", " ", _jsx(Button, { variant: "ghost", onClick: () => setPaused(false), className: "font-semibold text-secondary-text bg-transparent border-none cursor-pointer p-0 text-xs hover:bg-transparent inline-block", children: "Click to resume." })] })) : (_jsxs("span", { children: ["This message will close in ", secondsLeft, "s.", " ", _jsx(Button, { variant: "ghost", onClick: () => setPaused(true), className: "font-semibold text-primary-text bg-transparent border-none cursor-pointer p-0 text-xs hover:bg-transparent inline-block", children: "Click to stop." })] })) }) }), _jsx("div", { className: "h-0.5 w-full bg-tertiary-text", children: _jsx("div", { className: "h-full", style: {
                        width: `${progress * 100}%`,
                        background: config.progressColor,
                    } }) })] }));
};
