import * as React from "react";
import { type Props as RPNInputProps, type Value } from "react-phone-number-input";
type PhoneInputProps = Omit<React.ComponentProps<"input">, "onChange" | "value" | "ref"> & Omit<RPNInputProps<React.ComponentProps<"input">>, "onChange"> & {
    onChange?: (value: Value) => void;
    inputClassName?: string;
    icon?: React.ReactNode;
};
declare const PhoneInput: React.ForwardRefExoticComponent<Omit<PhoneInputProps, "ref"> & React.RefAttributes<React.Component<RPNInputProps<import("react-phone-number-input").DefaultInputComponentProps>, import("react-phone-number-input").State<RPNInputProps<import("react-phone-number-input").DefaultInputComponentProps>>, any>>>;
export { PhoneInput };
