import { IconSource } from "../app-icon";

export type ActionableToastVariant = "success" | "error" | "warning" | "info";

export interface ActionableToastAction {
  label?: string;
  onClick?: () => void | Promise<void>;
  icon?: string;
  variant?: "default" | "outline" | "ghost";
}

export interface ActionableToastOptions {
  title: string;
  description?: string;
  variant?: ActionableToastVariant;
  duration?: number;
  showProgress?: boolean;
  colors?: ToastColors;
  className?: string;
  action?: ActionableToastAction;
  actions?: ActionableToastAction[];
}

export interface VariantConfig {
  iconName: string;
  iconSource: IconSource;
  borderColor: string;
  borderGradient: string;
  progressColor: string;
  iconColor: string;
  bgColor: string;
}

export interface ToastColors {
  borderColor?: string;
  borderGradient?: string;
  progressColor?: string;
  iconColor?: string;
  bgColor?: string;
}
