"use client";
import { jsx as _jsx } from "react/jsx-runtime";
export const TimeBar = ({ progress, color, height = "h-0.5", }) => (_jsx("div", { className: `${height} w-full bg-transparent`, children: _jsx("div", { className: "h-full transition-all duration-100 ease-linear rounded-full", style: { width: `${progress * 100}%`, background: color } }) }));
