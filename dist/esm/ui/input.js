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
import * as React from "react";
import { cn } from "../utils";
const Input = React.forwardRef((_a, ref) => {
    var { className, type, icon, iconPosition = "left", iconClassName, wrapperClassName } = _a, props = __rest(_a, ["className", "type", "icon", "iconPosition", "iconClassName", "wrapperClassName"]);
    return (_jsxs("div", { className: cn("flex gap-2 h-9 w-full items-center rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring", iconPosition === "right" && "flex-row-reverse", wrapperClassName), children: [icon && (_jsx("div", { className: cn("flex items-center", iconClassName), children: icon })), _jsx("input", Object.assign({ type: type, className: cn("flex-1 bg-transparent text-base outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className), ref: ref }, props))] }));
});
Input.displayName = "Input";
export { Input };
