export const deepCopySteps = (steps) => steps.map((s) => {
    var _a;
    return (Object.assign(Object.assign({}, s), { subSteps: (_a = s.subSteps) === null || _a === void 0 ? void 0 : _a.map((ss) => (Object.assign({}, ss))) }));
});
export const getStepStyle = (status, stepSize, colors, styles, isSubStep) => ({
    width: stepSize,
    height: stepSize,
    backgroundColor: status === "completed"
        ? colors.completedBg
        : status === "on_going"
            ? colors.activeBg
            : colors.pendingBg,
    borderColor: status === "completed"
        ? colors.completedBorder
        : status === "on_going"
            ? colors.activeBorder
            : colors.pendingBorder,
    borderWidth: isSubStep ? styles.subBorderWidth : styles.borderWidth,
    borderStyle: "solid",
    borderRadius: isSubStep ? styles.subBorderRadius : styles.borderRadius,
    color: status === "completed"
        ? colors.completedText
        : status === "on_going"
            ? colors.activeText
            : colors.pendingText,
});
export const DEFAULT_COLORS = {
    completedBg: "var(--stepper-completed-bg, var(--success))",
    completedBorder: "var(--stepper-completed-border, var(--success))",
    completedText: "var(--stepper-completed-text, var(--primary-foreground))",
    activeBg: "var(--stepper-active-bg, transparent)",
    activeBorder: "var(--stepper-active-border, var(--status-text-inprogress))",
    activeText: "var(--stepper-active-text, var(--status-text-inprogress))",
    pendingBg: "var(--stepper-pending-bg, transparent)",
    pendingBorder: "var(--stepper-pending-border, var(--border))",
    pendingText: "var(--stepper-pending-text, var(--muted-foreground))",
    connectorFilled: "var(--stepper-connector-filled, var(--success))",
    connectorEmpty: "var(--stepper-connector-empty, var(--border))",
    glowColor: "var(--stepper-glow, var(--status-text-inprogress))",
    activeDotColor: "var(--stepper-active-dot, var(--status-text-inprogress))",
    pendingDotColor: "var(--stepper-pending-dot, var(--muted-foreground))",
    completedIconColor: "var(--stepper-check-icon, var(--primary-foreground))",
};
export const DEFAULT_STYLES = {
    borderRadius: "4px",
    subBorderRadius: "4px",
    borderWidth: 1,
    subBorderWidth: 1,
    connectorThickness: 3,
    subConnectorThickness: 2,
    connectorGap: 48,
    subConnectorGap: 24,
    labelFontSize: "1rem",
    subLabelFontSize: "0.75rem",
    descriptionFontSize: "0.75rem",
    indicatorFontSize: "0.875rem",
    subIndicatorFontSize: "0.75rem",
    labelDescriptionGap: "2px",
    subLabelDescriptionGap: "2px",
    subStepsPadding: 24,
    subStepsOffset: 24,
};
