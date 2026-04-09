import type { ActionableToastVariant, ToastColors, VariantConfig } from "./types";
export declare const variantConfig: Record<ActionableToastVariant, VariantConfig>;
export declare const resolveColors: (variant: ActionableToastVariant, overrides?: ToastColors) => VariantConfig;
