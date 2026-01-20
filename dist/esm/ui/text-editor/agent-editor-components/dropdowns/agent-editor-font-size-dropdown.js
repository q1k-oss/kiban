"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppIcon } from "../../../app-icon";
import { Button } from "../../../button";
import { useTextEditorConfig } from "../../context/editor-config-context";
import { activeButtonClass, baseButtonClass, hoverButtonClass } from "../utils";
export const FontSizeDropdown = ({ editor, isOpen, onToggle, }) => {
    // Get custom font sizes from context
    const { fontSizes } = useTextEditorConfig();
    return (_jsxs("div", { className: "relative", children: [_jsx(Button, { onClick: onToggle, className: `${baseButtonClass}, ${isOpen ? activeButtonClass : hoverButtonClass}`, title: "Font Size", "aria-label": "Font Size", "aria-expanded": isOpen, children: _jsx(AppIcon, { iconName: "type", size: 16 }) }), isOpen && (_jsx("div", { className: "absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg  min-w-[120px] z-20", children: fontSizes.map(({ value, label }) => (_jsxs("div", { onClick: () => {
                        editor
                            .chain()
                            .focus()
                            .setMark("textStyle", { fontSize: value })
                            .run();
                        onToggle();
                    }, className: "w-40 px-3 py-2 text-left text-xs hover:bg-primary-foreground/10 transition-colors bg-transparent text-primary-text flex items-center justify-between", title: label, children: [_jsx("span", { children: label }), _jsx("span", { children: value })] }, value))) }))] }));
};
