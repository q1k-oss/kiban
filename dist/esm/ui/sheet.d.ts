import * as SheetPrimitive from "@radix-ui/react-dialog";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";
type SheetBehavior = "modal" | "panel";
interface SheetProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Root> {
    behavior?: SheetBehavior;
}
declare const Sheet: ({ behavior, ...props }: SheetProps) => import("react/jsx-runtime").JSX.Element;
declare const SheetTrigger: React.ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React.ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React.FC<SheetPrimitive.DialogPortalProps>;
interface SheetOverlayProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> {
    positioning?: "fixed" | "absolute";
}
declare const SheetOverlay: React.ForwardRefExoticComponent<SheetOverlayProps & React.RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: {
    side?: "left" | "right" | "top" | "bottom";
    positioning?: "fixed" | "absolute";
} & import("class-variance-authority/dist/types").ClassProp) => string;
interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {
    showOverlay?: boolean;
    preventOutsideClose?: boolean;
}
declare const SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>;
interface SheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    showCloseButton?: boolean;
}
declare const SheetHeader: React.ForwardRefExoticComponent<SheetHeaderProps & React.RefAttributes<HTMLDivElement>>;
declare const SheetFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const SheetTitle: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
interface SheetAdjacentProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    side?: "left" | "right";
    width?: string;
    gap?: number;
    onClose?: () => void;
    title?: string;
}
declare const SheetAdjacent: React.ForwardRefExoticComponent<SheetAdjacentProps & React.RefAttributes<HTMLDivElement>>;
export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, SheetAdjacent, };
