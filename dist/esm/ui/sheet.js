"use client";
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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";
import { cn } from "../utils";
const Sheet = (_a) => {
    var { behavior = "modal" } = _a, props = __rest(_a, ["behavior"]);
    return _jsx(SheetPrimitive.Root, Object.assign({ modal: behavior === "modal" }, props));
};
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SheetPrimitive.Overlay, Object.assign({ className: cn("absolute inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className) }, props, { ref: ref })));
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva("z-[51] gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out border border-stroke ", {
    variants: {
        side: {
            top: "inset-x-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
        positioning: {
            fixed: "fixed z-50",
            absolute: "absolute",
        },
    },
    compoundVariants: [
        {
            side: "right",
            positioning: "fixed",
            className: "right-0 top-0 bottom-0 h-full border-r-0 border-y-0 ",
        },
        {
            side: "left",
            positioning: "fixed",
            className: "left-0 top-0 bottom-0 h-full border-l-0 border-y-0 ",
        },
        {
            side: "right",
            positioning: "absolute",
            className: "right-4 top-4 bottom-4 rounded-md h-[calc(100%-2rem)]",
        },
        {
            side: "left",
            positioning: "absolute",
            className: "left-4 top-4 bottom-4 rounded-md h-[calc(100%-2rem)]",
        },
        {
            side: "top",
            positioning: "fixed",
            className: "top-0 border-t-0 border-x-0",
        },
        {
            side: "bottom",
            positioning: "fixed",
            className: "bottom-0 border-b-0 border-x-0",
        },
        {
            side: "top",
            positioning: "absolute",
            className: "top-4 left-1/2 -translate-x-1/2 rounded-md w-[calc(100%-2rem)]",
        },
        {
            side: "bottom",
            positioning: "absolute",
            className: "bottom-4 left-1/2 -translate-x-1/2 rounded-md w-[calc(100%-2rem)]",
        },
    ],
    defaultVariants: {
        side: "right",
        positioning: "fixed",
    },
});
const SheetContent = React.forwardRef((_a, ref) => {
    var { side = "right", positioning, showOverlay = true, preventOutsideClose = true, className, children } = _a, props = __rest(_a, ["side", "positioning", "showOverlay", "preventOutsideClose", "className", "children"]);
    const isAbsolute = positioning === "absolute";
    const content = (_jsxs(_Fragment, { children: [showOverlay && _jsx(SheetOverlay, {}), _jsx(SheetPrimitive.Content, Object.assign({ ref: ref, className: cn(sheetVariants({ side, positioning }), className), onInteractOutside: preventOutsideClose ? (e) => e.preventDefault() : undefined }, props, { children: children }))] }));
    if (isAbsolute) {
        return content;
    }
    return _jsx(SheetPortal, { children: content });
});
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs("div", Object.assign({ ref: ref, className: cn("flex items-center gap-2 text-sm border-b border-stroke p-4", className) }, props, { children: [children, _jsxs(SheetPrimitive.Close, { className: "ml-auto rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary cursor-pointer shrink-0", children: [_jsx(X, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Close" })] })] })));
});
SheetHeader.displayName = "SheetHeader";
const SheetFooter = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props)));
};
SheetFooter.displayName = "SheetFooter";
const SheetTitle = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SheetPrimitive.Title, Object.assign({ ref: ref, className: cn("flex-1 text-lg font-semibold text-foreground", className) }, props)));
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SheetPrimitive.Description, Object.assign({ ref: ref, className: cn("text-sm text-muted-foreground", className) }, props)));
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;
const SheetAdjacent = React.forwardRef((_a, ref) => {
    var { open = false, side = "left", width, gap = 0, onClose, title, className, children } = _a, props = __rest(_a, ["open", "side", "width", "gap", "onClose", "title", "className", "children"]);
    const gapStyle = side === "left"
        ? { marginRight: gap }
        : { marginLeft: gap };
    return (_jsxs("div", Object.assign({ ref: ref, className: cn("absolute top-0 bottom-0 bg-background border border-stroke shadow-lg transition-all duration-300 ease-in-out overflow-auto", width || "w-full", side === "left"
            ? "right-full rounded-md"
            : "left-full rounded-md", open
            ? "opacity-100 translate-x-0"
            : side === "left"
                ? "opacity-0 translate-x-4 pointer-events-none"
                : "opacity-0 -translate-x-4 pointer-events-none", className), style: gapStyle }, props, { children: [(title || onClose) && (_jsxs("div", { className: "flex items-center justify-between border-b border-stroke p-4", children: [title && _jsx("h3", { className: "text-sm font-semibold", children: title }), onClose && (_jsxs("button", { onClick: onClose, className: "ml-auto rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none cursor-pointer shrink-0", children: [_jsx(X, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Close" })] }))] })), children] })));
});
SheetAdjacent.displayName = "SheetAdjacent";
export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, SheetAdjacent, };
