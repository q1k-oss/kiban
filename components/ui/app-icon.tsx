"use client";

import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import React from "react";

import { CustomIcons, type CustomIconName } from "../icons";

type AppIconName = CustomIconName | IconName;
type IconNameWithSuggestions = AppIconName | (string & {});

export const iconSource = {
  CUSTOM: "1",
  LUCIDE: "2",
} as const;
export type IconSourceKey = keyof typeof iconSource;

interface AppIconProps {
  iconName: IconNameWithSuggestions;
  size?: number;
  strokeWidth?: number;
  className?: string;
  source: IconSourceKey;
}

const AppIcon: React.FC<AppIconProps> = ({
  iconName,
  size = 20,
  strokeWidth = 1.5,
  className,
  source,
}) => {
  const sourceValue = iconSource[source];

  switch (sourceValue) {
    case "1": {
      const CustomIcon = CustomIcons[iconName as CustomIconName];

      if (!CustomIcon) return null;

      return (
        <CustomIcon
          size={size}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    }
    case "2": {
      return (
        <DynamicIcon
          name={iconName as IconName}
          size={size}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    }
  }
};

export { AppIcon };
