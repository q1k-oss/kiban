"use client";
import React, { useState } from "react";

interface BorderMovingWrapperProps {
  children: React.ReactNode;
  colors?: string[];
  animationDuration?: number;
  borderWidth?: number;
  borderRadius?: number;
  className?: string;
  blendPercentage?: number;
  hoverOnly?: boolean;
  hoverOnlyTransition?: number;
}

const BorderMovingWrapper = ({
  children,
  colors=["#399953","#fbb300","#d53e33","#377af5"],
  animationDuration = 4,
  borderWidth = 4,
  borderRadius = 0,
  className = "",
  blendPercentage = 10,
  hoverOnly = false,
  hoverOnlyTransition = 0.3,
}: BorderMovingWrapperProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const shouldShow = hoverOnly ? isHovered : true;

  const generateConicGradient = (colors: string[], blendPct: number) => {
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
        } as React.CSSProperties
      }
      onMouseEnter={() => hoverOnly && setIsHovered(true)}
      onMouseLeave={() => hoverOnly && setIsHovered(false)}
    >
      {children}
      <style>{`




      `}</style>
    </div>
  );
};

export { BorderMovingWrapper };
