"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const BorderMovingWrapper = ({ children, colors = ["#399953", "#fbb300", "#d53e33", "#377af5"], animationDuration = 4, borderWidth = 4, borderRadius = 0, className = "", blendPercentage = 10, hoverOnly = false, hoverOnlyTransition = 0.3, animationDirection = 'CLOCKWISE' }) => {
    const [isHovered, setIsHovered] = useState(false);
    const shouldShow = hoverOnly ? isHovered : true;
    const generateConicGradient = (colors, blendPct) => {
        const numColors = colors.length;
        if (numColors === 0)
            return 'none';
        const step = 100 / numColors;
        const clampedBlend = Math.min(blendPct, step - 0.1);
        const colorStops = colors
            .map((color, index) => {
            const start = index * step;
            const end = (index + 1) * step;
            const nextColor = colors[(index + 1) % numColors];
            const solidEnd = end - clampedBlend;
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
            '--border-moving-wrapper-animation-direction': animationDirection === 'CLOCKWISE' ? 'normal' : 'reverse'
        }, onMouseEnter: () => hoverOnly && setIsHovered(true), onMouseLeave: () => hoverOnly && setIsHovered(false), children: [children, _jsx("style", { children: `




      ` })] }));
};
export { BorderMovingWrapper };
