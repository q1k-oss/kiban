"use client";
import { jsx as _jsx } from "react/jsx-runtime";
export const ProgressBar = ({ progress, color, }) => (_jsx("div", { className: "h-1 w-full bg-transparent", children: _jsx("div", { className: "h-full transition-all duration-100 ease-linear rounded-full", style: { width: `${progress * 100}%`, background: color } }) }));
