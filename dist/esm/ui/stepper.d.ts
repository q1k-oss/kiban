import React from "react";
export interface IStepItem {
    LABEL: string;
    STATUS: "pending" | "on_going" | "completed";
}
interface StepperProps {
    steps: IStepItem[];
    size?: number;
}
export declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<unknown>>;
export {};
