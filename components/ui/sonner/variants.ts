import type { ActionableToastVariant, VariantConfig } from "./types";

export const variantConfig: Record<ActionableToastVariant, VariantConfig> = {
  success: {
    iconName: "circle-check",
    iconSource: "lucide",
    borderColor: "#22c55e",
    borderGradient: "linear-gradient(to right, #0A2504, #041900)",
    progressColor: "#1a9a4a",
    iconColor: "#0B852D",
    bgColor: "linear-gradient(to right, #091801, #151515 30%)",
  },
  error: {
    iconName: "circle-alert",
    iconSource: "lucide",
    borderColor: "#ef4444",
    borderGradient: "linear-gradient(to right, #220303, #3A0505)",
    progressColor: "#e05a3a",
    iconColor: "#881F1F",
    bgColor: "linear-gradient(to right, #180202, #151515 30%)",
  },
  warning: {
    iconName: "circle-alert",
    iconSource: "lucide",
    borderColor: "#a3a634",
    borderGradient: "linear-gradient(to right, #201101, #371D02)",
    progressColor: "#8a8d2a",
    iconColor: "#B57B17",
    bgColor: "linear-gradient(to right, #120B00, #151515 30%)",
  },
  info: {
    iconName: "info",
    iconSource: "lucide",
    borderColor: "#3b82f6",
    borderGradient: "linear-gradient(to right, #151515, #012234)",
    progressColor: "#2563eb",
    iconColor: "#1289CD",
    bgColor: "linear-gradient(to right, #01171D, #151515 30%)",
  },
};
