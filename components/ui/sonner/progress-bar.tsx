"use client";

import * as React from "react";

export const TimeBar = ({
  progress,
  color,
  height = "h-0.5",
}: {
  progress: number;
  color: string;
  height?: string;
}) => (
  <div className={`${height} w-full bg-transparent`}>
    <div
      className="h-full transition-all duration-100 ease-linear rounded-full"
      style={{ width: `${progress * 100}%`, background: color }}
    />
  </div>
);
