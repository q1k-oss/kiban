"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const BorderMovingWrapper = ({ children, colors = ["#399953", "#fbb300", "#d53e33", "#377af5"], animationDuration = 4, borderWidth = 4, borderRadius = 0, className = "", blendPercentage = 10, hoverOnly = false, hoverOnlyTransition = 0.3, }) => {
    const [isHovered, setIsHovered] = useState(false);
    const shouldShow = hoverOnly ? isHovered : true;
    const generateConicGradient = (colors, blendPct) => {
        const numColors = colors.length;
        const step = 100 / numColors;
        const colorStops = colors
            .map((color, index) => {
            const start = index * step;
            const end = (index + 1) * step;
            const nextColor = colors[(index + 1) % numColors];
            const solidEnd = end - blendPct;
            // const blendStart = end - blendPct;
            const blendEnd = end;
            return `${color} ${start}%, ${color} ${solidEnd}%, ${nextColor} ${blendEnd}%`;
        })
            .join(", ");
        return `conic-gradient(from 0deg, ${colorStops})`;
    };
    return (_jsxs("div", { className: `border-moving-wrapper ${className}`, style: {
            padding: `${borderWidth}px`,
            borderRadius: `${borderRadius}px`,
            transition: `padding ${hoverOnlyTransition}s ease`,
            "--border-moving-wrapper-gradient": generateConicGradient(colors, blendPercentage),
            "--border-moving-wrapper-animation-duration": `${animationDuration}s`,
            "--border-moving-wrapper-opacity": shouldShow ? "1" : "0",
            "--border-moving-wrapper-transition-duration": `${hoverOnlyTransition}s`,
        }, onMouseEnter: () => hoverOnly && setIsHovered(true), onMouseLeave: () => hoverOnly && setIsHovered(false), children: [children, _jsx("style", { children: `




      ` })] }));
};
export { BorderMovingWrapper };
