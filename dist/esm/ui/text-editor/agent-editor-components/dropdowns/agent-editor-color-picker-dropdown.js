"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppIcon } from "../../../app-icon";
import { Button } from "../../../button";
import { useTextEditorConfig } from "../../context/editor-config-context";
import { activeButtonClass, baseButtonClass, hoverButtonClass } from "../utils";
export const ColorPickerDropdown = ({ editor, isOpen, onToggle, }) => {
    const { colors } = useTextEditorConfig();
    return (_jsxs("div", { className: "relative", children: [_jsx(Button, { onClick: onToggle, className: `${baseButtonClass} ${isOpen ? activeButtonClass : hoverButtonClass}`, title: "Text Color", "aria-label": "Text Color", "aria-expanded": isOpen, children: _jsx(AppIcon, { iconName: "palette", size: 16 }) }), isOpen && (_jsx("div", { className: "absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg p-2 flex flex-wrap gap-1 w-40 z-20", children: colors.map((color) => (_jsx(Button, { onClick: () => {
                        editor.chain().focus().setMark("textStyle", { color }).run();
                        onToggle();
                    }, className: "w-6 h-6 rounded-full border border-border-3 hover:scale-110 transition-transform bg-transparent", style: { backgroundColor: color }, title: color, "aria-label": `Set color to ${color}` }, color))) }))] }));
};
