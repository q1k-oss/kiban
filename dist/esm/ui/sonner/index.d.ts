import * as React from "react";
import { Toaster as Sonner } from "sonner";
import type { KibanToastOptions, KibanToastPosition } from "./kiban-toast";
import type { ActionableToastOptions } from "./types";
type ToasterProps = React.ComponentProps<typeof Sonner>;
declare const kibanActionableToast: (options: ActionableToastOptions) => string | number;
declare const Toaster: ({ ...props }: ToasterProps) => import("react/jsx-runtime").JSX.Element;
declare const kibanToast: {
    success: (title: string, options?: KibanToastOptions) => string | number;
    error: (title: string, options?: KibanToastOptions) => string | number;
    warning: (title: string, options?: KibanToastOptions) => string | number;
    info: (title: string, options?: KibanToastOptions) => string | number;
    dismiss: (id: string | number) => string | number;
    loading: (title: string, options?: KibanToastOptions) => string | number;
    promise: <T>(promise: Promise<T>, options: import("./promise-toast").KibanPromiseOptions<T>) => string | number;
    custom: (render: (id: string | number) => React.ReactElement, options?: {
        duration?: number;
        position?: KibanToastPosition;
    }) => string | number;
};
export { Toaster, kibanActionableToast, kibanToast };
export type { ActionableToastOptions, ActionableToastVariant } from "./types";
export type { KibanToastOptions, KibanToastPosition } from "./kiban-toast";
export type { KibanPromiseOptions } from "./promise-toast";
