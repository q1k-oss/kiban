"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { DynamicIcon } from "lucide-react/dynamic";
import { CustomIcons } from "../icons";
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
const AppIcon = ({ iconName, size = 20, strokeWidth = 1.5, className, source = "lucide", }) => {
    // Fast path: Lucide icons (most common case)
    if (source === "lucide") {
        return (_jsx(DynamicIcon, { name: iconName, size: size, strokeWidth: strokeWidth, className: className }));
    }
    // Custom icons: lookup from CustomIcons registry
    const CustomIcon = CustomIcons[iconName];
    // Gracefully handle missing custom icons
    return CustomIcon ? (_jsx(CustomIcon, { size: size, strokeWidth: strokeWidth, className: className })) : null;
};
export { AppIcon };
