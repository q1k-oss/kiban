"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { DynamicIcon } from "lucide-react/dynamic";
import { CustomIcons } from "../icons";
export const iconSource = {
    CUSTOM: "1",
    LUCIDE: "2",
};
const AppIcon = ({ iconName, size = 20, strokeWidth = 1.5, className, source, }) => {
    const sourceValue = iconSource[source];
    switch (sourceValue) {
        case "1": {
            const CustomIcon = CustomIcons[iconName];
            if (!CustomIcon)
                return null;
            return (_jsx(CustomIcon, { size: size, strokeWidth: strokeWidth, className: className }));
        }
        case "2": {
            return (_jsx(DynamicIcon, { name: iconName, size: size, strokeWidth: strokeWidth, className: className }));
        }
    }
};
export { AppIcon };
