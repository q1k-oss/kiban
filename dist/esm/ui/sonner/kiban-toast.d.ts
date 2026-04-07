import type { ActionableToastVariant } from "./types";
export type KibanToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
export interface KibanToastOptions {
    description?: string;
    duration?: number;
    position?: KibanToastPosition;
    showProgress?: boolean;
}
export declare const KibanToastContent: ({ id, title, description, variant, duration, showProgress, }: {
    id: string | number;
    title: string;
    description?: string;
    variant: ActionableToastVariant;
    duration?: number;
    showProgress?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
declare const createToast: (variant: ActionableToastVariant) => (title: string, options?: KibanToastOptions) => string | number;
export { createToast };
