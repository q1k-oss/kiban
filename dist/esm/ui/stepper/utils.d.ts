import type { IStepItem, StepStatus, ResolvedColors, ResolvedStyles, ResolvedSizes } from "./types";
import type React from "react";
export declare const deepCopySteps: (steps: IStepItem[]) => IStepItem[];
export declare const getStepStyle: (status: StepStatus, stepSize: number, colors: ResolvedColors, styles: ResolvedStyles, isSubStep?: boolean) => React.CSSProperties;
export declare const DEFAULT_COLORS: ResolvedColors;
export declare const DEFAULT_SIZES: ResolvedSizes;
export declare const DEFAULT_STYLES: ResolvedStyles;
