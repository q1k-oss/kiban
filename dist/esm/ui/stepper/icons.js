"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppIcon } from "../app-icon";
export const CheckIcon = ({ color, size = 16 }) => (_jsx("span", { className: "animate-[fadeIn_0.3s]", style: { color: color || "currentColor" }, children: _jsx(AppIcon, { iconName: "check", size: size, strokeWidth: 2.5 }) }));
export const DotIndicator = ({ color, glowColor, isActive, }) => (_jsxs("div", { className: "relative flex items-center justify-center", children: [isActive && (_jsx("span", { className: "absolute rounded-full animate-ping", style: {
                width: "20px",
                height: "20px",
                background: glowColor || color || "currentColor",
                opacity: 0.3,
            } })), _jsx("div", { className: "w-2.5 h-2.5 relative z-[2] rounded-full", style: { background: color || "currentColor" } })] }));
