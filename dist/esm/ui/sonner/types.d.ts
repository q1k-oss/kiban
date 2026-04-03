import { IconSource } from "../app-icon";
export type ActionableToastVariant = "success" | "error" | "warning" | "info";
export interface ActionableToastOptions {
    title: string;
    description?: string;
    variant?: ActionableToastVariant;
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
}
export interface VariantConfig {
    iconName: string;
    iconSource: IconSource;
    borderColor: string;
    progressColor: string;
    iconColor: string;
    bgColor: string;
}
