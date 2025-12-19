import { type IconName } from "lucide-react/dynamic";
import React from "react";
import { type CustomIconName } from "../icons";
type AppIconName = CustomIconName | IconName;
type IconNameWithSuggestions = AppIconName | (string & {});
interface AppIconProps {
    iconName: IconNameWithSuggestions;
    size?: number;
    strokeWidth?: number;
    className?: string;
    fallbackIcon?: IconName;
}
export declare const AppIcon: React.FC<AppIconProps>;
export {};
