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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";
import * as React from "react";
import { cn } from "../utils";
const OTPVariantContext = React.createContext({ variant: "default" });
const InputOTP = React.forwardRef((_a, ref) => {
    var { className, containerClassName, variant = "default" } = _a, props = __rest(_a, ["className", "containerClassName", "variant"]);
    const variantClasses = {
        default: "",
        separate: "gap-2",
    };
    return (_jsx(OTPVariantContext.Provider, { value: { variant }, children: _jsx(OTPInput, Object.assign({ ref: ref, containerClassName: cn("flex items-center  has-[:disabled]:opacity-50", variantClasses[variant], containerClassName), onBeforeInput: (e) => {
                if (!/^[0-9]$/.test(e.data))
                    e.preventDefault();
            }, inputMode: "numeric", pattern: "[0-9]*", className: cn("disabled:cursor-not-allowed", className) }, props)) }));
});
InputOTP.displayName = "InputOTP";
const InputOTPGroup = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("flex items-center", className) }, props)));
});
InputOTPGroup.displayName = "InputOTPGroup";
const InputOTPSlot = React.forwardRef((_a, ref) => {
    var _b, _c;
    var { index, className } = _a, props = __rest(_a, ["index", "className"]);
    const inputOTPContext = React.useContext(OTPInputContext);
    const { variant } = React.useContext(OTPVariantContext);
    const { char, hasFakeCaret, isActive } = (_c = (_b = inputOTPContext === null || inputOTPContext === void 0 ? void 0 : inputOTPContext.slots) === null || _b === void 0 ? void 0 : _b[index]) !== null && _c !== void 0 ? _c : {};
    const slotClasses = cva("relative flex items-center justify-center shadow-sm transition-all", {
        variants: {
            variant: {
                default: "h-9 w-9 border-y border-r border-input text-sm first:rounded-l-md first:border-l last:rounded-r-md",
                separate: "h-10 w-10 border border-input rounded-lg mx-2",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    });
    return (_jsxs("div", Object.assign({ ref: ref, className: cn(slotClasses({ variant }), isActive && "z-10 ring-1 ring-ring", className) }, props, { children: [char, hasFakeCaret && (_jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: _jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) }))] })));
});
InputOTPSlot.displayName = "InputOTPSlot";
const InputOTPSeparator = React.forwardRef((_a, ref) => {
    var props = __rest(_a, []);
    return (_jsx("div", Object.assign({ ref: ref, role: "separator" }, props, { children: _jsx(Minus, {}) })));
});
InputOTPSeparator.displayName = "InputOTPSeparator";
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
