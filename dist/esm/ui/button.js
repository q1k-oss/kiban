var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { cn } from "../utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            dashed: "border border-dashed border-border hover:bg-accent hover:text-accent-foreground",
        },
        size: {
            default: " px-4 py-2",
            sm: " rounded-md px-3 text-xs py-2",
            lg: " rounded-md px-8 py-2",
            icon: " px-4 py-2",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
export var ButtonIconPosition;
(function (ButtonIconPosition) {
    ButtonIconPosition["LEFT"] = "left";
    ButtonIconPosition["RIGHT"] = "right";
    ButtonIconPosition["NONE"] = "none";
})(ButtonIconPosition || (ButtonIconPosition = {}));
const Button = React.forwardRef((_a, ref) => {
    var { className, variant, size, asChild = false, icon, iconPos = ButtonIconPosition.LEFT, loading = false } = _a, props = __rest(_a, ["className", "variant", "size", "asChild", "icon", "iconPos", "loading"]);
    const Comp = asChild ? Slot : "button";
    const buttonCx = cn(buttonVariants({ variant, size }), "flex gap-2 items-center justify-center", className);
    const isIconLeft = iconPos === ButtonIconPosition.LEFT;
    const isIconRight = iconPos === ButtonIconPosition.RIGHT;
    const renderIcon = loading ? _jsx(Loader2, { className: "animate-spin h-6 w-6" }) : icon;
    return (_jsxs(Comp, Object.assign({ className: buttonCx, ref: ref, disabled: loading }, props, { children: [isIconLeft && icon && renderIcon, props.children, isIconRight && icon && renderIcon] })));
});
Button.displayName = "Button";
export { Button, buttonVariants };
