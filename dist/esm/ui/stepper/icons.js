"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppIcon } from "../app-icon";
export const CheckIcon = ({ color, size = 16 }) => (_jsx("span", { className: "animate-[fadeIn_0.3s]", style: { color: color || "currentColor" }, children: _jsx(AppIcon, { iconName: "check", size: size, strokeWidth: 2.5 }) }));
export const DotIndicator = ({ color, glowColor, isActive, dotSize = 10, glowSize = 20, }) => (_jsxs("div", { className: "relative flex items-center justify-center", children: [isActive && (_jsx("span", { className: "absolute rounded-full animate-ping", style: {
                width: glowSize,
                height: glowSize,
                background: glowColor || color || "currentColor",
                opacity: 0.3,
            } })), _jsx("div", { className: "relative z-[2] rounded-full", style: {
                width: dotSize,
                height: dotSize,
                background: color || "currentColor",
            } })] }));
