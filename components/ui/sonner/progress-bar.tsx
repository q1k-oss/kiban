"use client";

import * as React from "react";

export const ProgressBar = ({
  progress,
  color,
}: {
  progress: number;
  color: string;
}) => (
  <div className="h-1 w-full bg-transparent">
    <div
      className="h-full transition-all duration-100 ease-linear rounded-full"
      style={{ width: `${progress * 100}%`, background: color }}
    />
  </div>
);
