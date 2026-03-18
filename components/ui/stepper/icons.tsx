"use client";

import React from "react";

import { AppIcon } from "../app-icon";

export const CheckIcon = ({ color, size = 16 }: { color?: string; size?: number }) => (
  <span className="animate-[fadeIn_0.3s]" style={{ color: color || "currentColor" }}>
    <AppIcon iconName="check" size={size} strokeWidth={2.5} />
  </span>
);

export const DotIndicator = ({
  color,
  glowColor,
  isActive,
  dotSize = 10,
  glowSize = 20,
}: {
  color?: string;
  glowColor?: string;
  isActive?: boolean;
  dotSize?: number;
  glowSize?: number;
}) => (
  <div className="relative flex items-center justify-center">
    {isActive && (
      <span
        className="absolute rounded-full animate-ping"
        style={{
          width: glowSize,
          height: glowSize,
          background: glowColor || color || "currentColor",
          opacity: 0.3,
        }}
      />
    )}
    <div
      className="relative z-[2] rounded-full"
      style={{
        width: dotSize,
        height: dotSize,
        background: color || "currentColor",
      }}
    />
  </div>
);
