import React from "react";
interface BorderMovingWrapperProps {
    children: React.ReactNode;
    colors?: string[];
    animationDuration?: number;
    borderWidth?: number;
    borderRadius?: number;
    className?: string;
    blendPercentage?: number;
    hoverOnly?: boolean;
    hoverOnlyTransition?: number;
    animationDirection?: 'CLOCKWISE' | 'ANTI-CLOCKWISE';
}
declare const BorderMovingWrapper: ({ children, colors, animationDuration, borderWidth, borderRadius, className, blendPercentage, hoverOnly, hoverOnlyTransition, animationDirection }: BorderMovingWrapperProps) => import("react/jsx-runtime").JSX.Element;
export { BorderMovingWrapper };
