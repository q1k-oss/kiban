import { type VariantProps } from "class-variance-authority";
import * as React from "react";
declare const buttonVariants: (props?: {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "dashed";
    size?: "default" | "sm" | "lg" | "icon";
} & import("class-variance-authority/dist/types").ClassProp) => string;
export declare enum ButtonIconPosition {
    LEFT = "left",
    RIGHT = "right",
    NONE = "none"
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    icon?: React.ReactNode;
    iconPos?: ButtonIconPosition;
    loading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
