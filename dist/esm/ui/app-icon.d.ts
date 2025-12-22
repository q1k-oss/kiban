import { type IconName } from "lucide-react/dynamic";
import React from "react";
import { type CustomIconName } from "../icons";
type AppIconName = CustomIconName | IconName;
type IconNameWithSuggestions = AppIconName | (string & {});
export declare const iconSource: {
    readonly CUSTOM: "1";
    readonly LUCIDE: "2";
};
export type IconSourceKey = keyof typeof iconSource;
interface AppIconProps {
    iconName: IconNameWithSuggestions;
    size?: number;
    strokeWidth?: number;
    className?: string;
    source: IconSourceKey;
}
declare const AppIcon: React.FC<AppIconProps>;
export { AppIcon };
