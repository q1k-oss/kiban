"use client";

import React, { useState } from "react";
import { AppIcon } from "@q1k-oss/kiban/ui/app-icon";

const icons = [
  { name: "home", source: "lucide" as const },
  { name: "settings", source: "lucide" as const },
  { name: "custom-file-pdf-icon", source: "custom" as const },
  { name: "custom-jira-icon", source: "custom" as const },
  { name: "custom-ai-stars", source: "custom" as const },
];

export default () => {
  const [opacity, setOpacity] = useState(1);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <label className="text-sm text-muted-foreground whitespace-nowrap">
          opacity: {opacity.toFixed(1)}
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={opacity}
          onChange={(e) => setOpacity(parseFloat(e.target.value))}
          className="w-48"
        />
      </div>
      <div className="flex gap-8">
        {icons.map((icon) => (
          <div key={icon.name} className="flex flex-col items-center gap-2">
            <AppIcon
              iconName={icon.name}
              size={32}
              source={icon.source}
              opacity={opacity}
              className="text-muted-foreground"
            />
            <span className="text-[10px] text-muted-foreground text-center leading-tight">
              {icon.name.replace("custom-", "").replace("-icon", "")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
