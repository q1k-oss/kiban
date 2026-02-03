import * as React from "react";
type InputProps = React.ComponentProps<"input"> & {
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    iconClassName?: string;
};
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export { Input };
