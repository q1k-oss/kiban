"use client";

import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import React from "react";

import { CustomIcons, type CustomIconName } from "../icons";

// Types
/** Union of all available icon names (custom + Lucide) */
type AppIconName = CustomIconName | IconName;

/** Allows any string while providing autocomplete for known icons */
type IconNameWithSuggestions = AppIconName | (string & {});

/** Icon source options */
export type IconSource = "lucide" | "custom";

// Component
interface AppIconProps {
  /** Name of the icon to render */
  iconName: IconNameWithSuggestions;
  /** Icon size in pixels @default 20 */
  size?: number;
  /** Stroke width for the icon @default 1.5 */
  strokeWidth?: number;
  /** Additional CSS classes */
  className?: string;
  /** Source of the icon - use "custom" for CustomIcons @default "lucide" */
  source?: IconSource;
}

/**
 * Unified icon component that renders icons from either:
 * - Lucide React (default) - Dynamic icon loading
 * - Custom icons - Project-specific SVG icons
 *
 * @example
 * // Lucide icon (default)
 * <AppIcon iconName="check" />
 *
 * // Custom icon
 * <AppIcon iconName="logo" source="custom" />
 */
const AppIcon: React.FC<AppIconProps> = ({
  iconName,
  size = 20,
  strokeWidth = 1.5,
  className,
  source = "lucide",
}) => {
  // Fast path: Lucide icons (most common case)
  if (source === "lucide") {
    return (
      <DynamicIcon
        name={iconName as IconName}
        size={size}
        strokeWidth={strokeWidth}
        className={className}
      />
    );
  }

  // Custom icons: lookup from CustomIcons registry
  const CustomIcon = CustomIcons[iconName as CustomIconName];

  // Gracefully handle missing custom icons
  return CustomIcon ? (
    <CustomIcon size={size} strokeWidth={strokeWidth} className={className} />
  ) : null;
};

export { AppIcon };