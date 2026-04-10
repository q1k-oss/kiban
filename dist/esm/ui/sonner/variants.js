export const variantConfig = {
    success: {
        iconName: "circle-check",
        iconSource: "lucide",
        iconColor: "#0B852D",
        borderColor: "#22c55e",
        borderGradient: "linear-gradient(to right, #0A2504, #041900)",
        bgColor: "linear-gradient(to right, #091801, #151515 50%)",
        progressColor: "#22c55e",
    },
    error: {
        iconName: "circle-alert",
        iconSource: "lucide",
        iconColor: "#881F1F",
        borderColor: "#ef4444",
        borderGradient: "linear-gradient(to right, #220303, #3A0505)",
        bgColor: "linear-gradient(to right, #180202, #151515 50%)",
        progressColor: "#ef4444",
    },
    warning: {
        iconName: "circle-alert",
        iconSource: "lucide",
        iconColor: "#B57B17",
        borderColor: "#a3a634",
        borderGradient: "linear-gradient(to right, #201101, #371D02)",
        bgColor: "linear-gradient(to right, #120B00, #151515 50%)",
        progressColor: "#a3a634",
    },
    info: {
        iconName: "info",
        iconSource: "lucide",
        iconColor: "#1289CD",
        borderColor: "#3b82f6",
        borderGradient: "linear-gradient(to right, #151515, #012234)",
        bgColor: "linear-gradient(to right, #01171D, #151515 50%)",
        progressColor: "#3b82f6",
    },
};
export const resolveColors = (variant, overrides) => {
    const base = variantConfig[variant];
    if (!overrides)
        return base;
    return Object.assign({}, base, Object.fromEntries(Object.entries(overrides).filter(([, v]) => v !== undefined)));
};
