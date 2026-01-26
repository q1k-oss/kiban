"use client";
import React, { useState } from "react";

interface IBorderMovingWrapperProps {
  children: React.ReactNode;
  colors?: string[];
  animationDuration?: number;
  borderWidth?: number;
  borderRadius?: number;
  className?: string;
  blendPercentage?: number;
  hoverOnly?: boolean;
  hoverOnlyTransition?: number;
  animationDirection?: 'CLOCKWISE' | 'ANTI-CLOCKWISE';
}

const BorderMovingWrapper = ({
  children,
  colors = ["#399953", "#fbb300", "#d53e33", "#377af5"],
  animationDuration = 4,
  borderWidth = 4,
  borderRadius = 0,
  className = "",
  blendPercentage = 10,
  hoverOnly = false,
  hoverOnlyTransition = 0.3,
  animationDirection = 'CLOCKWISE'
}: IBorderMovingWrapperProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const shouldShow = hoverOnly ? isHovered : true;

  const generateConicGradient = (colors: string[], blendPct: number) => {
    const numColors = colors.length;
    if (numColors === 0) return 'none';
    const step = 100 / numColors;
    const clampedBlend = Math.max(0, Math.min(blendPct, step - 0.1));

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
  return (
    <div
      className={`border-moving-wrapper ${className}`}
      style={
        {
          padding: `${borderWidth}px`,
          borderRadius: `${borderRadius}px`,
          transition: `padding ${hoverOnlyTransition}s ease`,
          "--border-moving-wrapper-gradient": generateConicGradient(colors, blendPercentage),
          "--border-moving-wrapper-animation-duration": `${animationDuration}s`,
          "--border-moving-wrapper-opacity": shouldShow ? "1" : "0",
          "--border-moving-wrapper-transition-duration": `${hoverOnlyTransition}s`,
          '--border-moving-wrapper-animation-direction': animationDirection === 'CLOCKWISE' ? 'normal' : 'reverse'
        } as React.CSSProperties
      }
      onMouseEnter={() => hoverOnly && setIsHovered(true)}
      onMouseLeave={() => hoverOnly && setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export { BorderMovingWrapper };
export type { IBorderMovingWrapperProps };
