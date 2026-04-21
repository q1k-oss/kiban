export type StepStatus = "pending" | "on_going" | "completed";
export interface ISubStepItem {
    label: string;
    description?: string;
    status: StepStatus;
}
export interface IStepItem {
    label: string;
    description?: string;
    status: StepStatus;
    subSteps?: ISubStepItem[];
}
export interface StepperColors {
    /** Background color for completed steps */
    completedBg?: string;
    /** Border color for completed steps */
    completedBorder?: string;
    /** Text/icon color for completed steps */
    completedText?: string;
    /** Background color for the active step */
    activeBg?: string;
    /** Border color for the active step */
    activeBorder?: string;
    /** Text color for the active step */
    activeText?: string;
    /** Background color for pending steps */
    pendingBg?: string;
    /** Border color for pending steps */
    pendingBorder?: string;
    /** Text color for pending steps */
    pendingText?: string;
    /** Color of the connector line (completed) */
    connectorFilled?: string;
    /** Color of the connector line (unfilled) */
    connectorEmpty?: string;
    /** Glow color for the active indicator */
    glowColor?: string;
    /** Dot color when active (dot mode only) */
    activeDotColor?: string;
    /** Dot color when pending (dot mode only) */
    pendingDotColor?: string;
    /** Color of the check icon in completed steps */
    completedIconColor?: string;
    /** Label color for completed steps */
    completedLabelColor?: string;
    /** Description color for completed steps */
    completedDescriptionColor?: string;
    /** Label color for the active step */
    activeLabelColor?: string;
    /** Description color for the active step */
    activeDescriptionColor?: string;
    /** Label color for pending steps */
    pendingLabelColor?: string;
    /** Description color for pending steps */
    pendingDescriptionColor?: string;
}
export interface StepperSizes {
    /** Size of main step box in px @default 42 */
    boxSize?: number;
    /** Size of sub-step box in px @default 32 */
    subBoxSize?: number;
    /** Size of the dot indicator in px @default 10 */
    dotSize?: number;
    /** Size of the sub-step dot indicator in px @default 8 */
    subDotSize?: number;
    /** Size of the glow ping around active dot in px @default 20 */
    glowSize?: number;
    /** Size of the check icon in completed steps in px. Defaults to 45% of box size */
    completedIconSize?: number;
    /** Size of the check icon in completed sub-steps in px. Defaults to 45% of sub-box size */
    subCompletedIconSize?: number;
}
export interface StepperStyles {
    /** Border radius of main step boxes (e.g. "4px", "50%", "0") @default "4px" */
    borderRadius?: string;
    /** Border radius of sub-step boxes @default "4px" */
    subBorderRadius?: string;
    /** Border width of main step boxes in px @default 1 */
    borderWidth?: number;
    /** Border width of sub-step boxes in px @default 1 */
    subBorderWidth?: number;
    /** Thickness of main connector line in px @default 3 */
    connectorThickness?: number;
    /** Thickness of sub-step connector line in px @default 2 */
    subConnectorThickness?: number;
    /** Minimum gap between steps in px @default 48 */
    connectorGap?: number;
    /** Minimum gap between sub-steps in px @default 24 */
    subConnectorGap?: number;
    /** Font size for main step labels @default "1rem" */
    labelFontSize?: string;
    /** Font size for sub-step labels @default "0.75rem" */
    subLabelFontSize?: string;
    /** Font size for description text @default "0.75rem" */
    descriptionFontSize?: string;
    /** Font size for main step indicator number/icon @default "0.875rem" */
    indicatorFontSize?: string;
    /** Font size for sub-step indicator number/icon @default "0.75rem" */
    subIndicatorFontSize?: string;
    /** Gap between label and description for main steps @default "2px" */
    labelDescriptionGap?: string;
    /** Gap between label and description for sub-steps @default "2px" */
    subLabelDescriptionGap?: string;
    /** Padding above and below sub-steps area in px @default 24 */
    subStepsPadding?: number;
    /** Left offset of sub-steps from the main connector in px @default 24 */
    subStepsOffset?: number;
}
export interface StepperProps {
    steps?: IStepItem[];
    /** Display mode: "number" shows step numbers, "dot" shows dots */
    indicator?: "number" | "dot";
    /** Layout orientation */
    orientation?: "vertical" | "horizontal";
    /** Custom colors — all optional, falls back to currentColor/theme */
    colors?: StepperColors;
    /** Custom sizes for step boxes, dots, icons */
    sizes?: StepperSizes;
    /** Custom styles for connectors, fonts, spacing */
    styles?: StepperStyles;
    /** Animation delay in ms between steps */
    animationDelay?: number;
    /** Additional className for the root container */
    className?: string;
    /** Whether to show descriptions */
    showDescription?: boolean;
    /** Whether sub-steps start expanded or collapsed @default true */
    defaultExpanded?: boolean;
    /** Whether to show the expand/collapse toggle icon on steps with sub-steps. If false, sub-steps are always expanded @default true */
    showExpandIcon?: boolean;
    /** Called when a step changes status */
    onStepChange?: (stepIndex: number, status: StepStatus) => void;
}
/** Resolved size values passed to renderers */
export interface ResolvedSizes {
    boxSize: number;
    subBoxSize: number;
    dotSize: number;
    subDotSize: number;
    glowSize: number;
    completedIconSize?: number;
    subCompletedIconSize?: number;
}
/** Resolved style values passed to renderers */
export interface ResolvedStyles {
    borderRadius: string;
    subBorderRadius: string;
    borderWidth: number;
    subBorderWidth: number;
    connectorThickness: number;
    subConnectorThickness: number;
    connectorGap: number;
    subConnectorGap: number;
    labelFontSize: string;
    subLabelFontSize: string;
    descriptionFontSize: string;
    indicatorFontSize: string;
    subIndicatorFontSize: string;
    labelDescriptionGap: string;
    subLabelDescriptionGap: string;
    subStepsPadding: number;
    subStepsOffset: number;
}
export interface StepperRef {
    next: () => void;
    prev: () => void;
    goTo: (index: number) => void;
    reset: () => void;
}
/** Resolved color values passed to renderers */
export interface ResolvedColors {
    completedBg: string;
    completedBorder: string;
    completedText: string;
    activeBg: string;
    activeBorder: string;
    activeText: string;
    pendingBg: string;
    pendingBorder: string;
    pendingText: string;
    connectorFilled: string;
    connectorEmpty: string;
    glowColor: string;
    activeDotColor: string;
    pendingDotColor: string;
    completedIconColor: string;
    completedLabelColor: string;
    completedDescriptionColor: string;
    activeLabelColor: string;
    activeDescriptionColor: string;
    pendingLabelColor: string;
    pendingDescriptionColor: string;
}
