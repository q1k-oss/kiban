import type { IStepItem, StepStatus } from "./types";
interface UseStepperOptions {
    initialSteps: IStepItem[];
    animationDelay: number;
    onStepChange?: (stepIndex: number, status: StepStatus) => void;
}
export declare function useStepper({ initialSteps, animationDelay, onStepChange, }: UseStepperOptions): {
    steps: IStepItem[];
    next: () => void;
    prev: () => void;
    goTo: (index: number) => void;
    reset: () => void;
};
export {};
