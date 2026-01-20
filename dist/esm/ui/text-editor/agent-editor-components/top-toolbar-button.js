"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { baseButtonClass, activeButtonClass, hoverButtonClass } from "./utils";
export const ToolbarButton = ({ item, editor, onClick }) => {
    var _a, _b;
    const isActive = ((_a = item.isActive) === null || _a === void 0 ? void 0 : _a.call(item, editor)) || false;
    const isDisabled = ((_b = item.disabled) === null || _b === void 0 ? void 0 : _b.call(item, editor)) || false;
    return (_jsx(Button, { onClick: () => (onClick ? onClick() : item.action(editor)), disabled: isDisabled, className: `${baseButtonClass}, ${isActive ? activeButtonClass : hoverButtonClass}`, title: item.title, "aria-label": item.title, "aria-pressed": isActive, children: _jsx(AppIcon, { iconName: item.icon, size: 16 }) }));
};
