"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { DynamicIcon } from "lucide-react/dynamic";
import { CustomIcons } from "../icons";
export const AppIcon = ({ iconName, size = 20, strokeWidth = 1.5, className, }) => {
    if (iconName in CustomIcons) {
        const CustomIcon = CustomIcons[iconName];
        return (_jsx(CustomIcon, { size: size, strokeWidth: strokeWidth, className: className }));
    }
    return (_jsx(DynamicIcon, { name: iconName, size: size, strokeWidth: strokeWidth, className: className }));
};
