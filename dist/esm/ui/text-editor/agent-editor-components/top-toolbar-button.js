"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { activeButtonClass, baseButtonClass, hoverButtonClass } from "./utils";
export const ToolbarButton = ({ item, editor, onClick }) => {
    var _a, _b, _c, _d;
    const isActive = (_b = (_a = item.isActive) === null || _a === void 0 ? void 0 : _a.call(item, editor)) !== null && _b !== void 0 ? _b : false;
    const isDisabled = (_d = (_c = item.disabled) === null || _c === void 0 ? void 0 : _c.call(item, editor)) !== null && _d !== void 0 ? _d : false;
    return (_jsx(Button, { onClick: () => (onClick ? onClick() : item.action(editor)), disabled: isDisabled, className: `${baseButtonClass} ${isActive ? activeButtonClass : hoverButtonClass}`, title: item.title, "aria-label": item.title, "aria-pressed": isActive, children: _jsx(AppIcon, { iconName: item.icon, size: 16 }) }));
};
