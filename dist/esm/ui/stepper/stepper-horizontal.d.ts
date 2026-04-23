import React from "react";
import type { IStepItem, StepStatus, ResolvedColors, ResolvedStyles } from "./types";
interface StepperHorizontalProps {
    steps: IStepItem[];
    size: number;
    subSize: number;
    showDescription: boolean;
    colors: ResolvedColors;
    styles: ResolvedStyles;
    className?: string;
    renderIndicator: (status: StepStatus, label: string, isSubStep?: boolean) => React.ReactNode;
    expandedMap: Record<number, boolean>;
    onToggleExpanded: (index: number) => void;
    showExpandIcon: boolean;
}
export declare const StepperHorizontal: ({ steps, size, subSize, showDescription, colors, styles, className, renderIndicator, expandedMap, onToggleExpanded, showExpandIcon, }: StepperHorizontalProps) => import("react/jsx-runtime").JSX.Element;
export {};
