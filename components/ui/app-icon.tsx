import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import React from "react";

import { CustomIcons, type CustomIconName } from "../icons";

type AppIconName = CustomIconName | IconName;
type IconNameWithSuggestions = AppIconName | (string & {});

interface AppIconProps {
  iconName: IconNameWithSuggestions;
  size?: number;
  strokeWidth?: number;
  className?: string;
  
}

export const AppIcon: React.FC<AppIconProps> = ({
  iconName,
  size = 20,
  strokeWidth = 1.5,
  className,
}) => {
  if (iconName in CustomIcons) {
    const CustomIcon = CustomIcons[iconName as CustomIconName];
    return (
      <CustomIcon size={size} strokeWidth={strokeWidth} className={className} />
    );
  }

  return (
    <DynamicIcon
      name={iconName as IconName}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
};
