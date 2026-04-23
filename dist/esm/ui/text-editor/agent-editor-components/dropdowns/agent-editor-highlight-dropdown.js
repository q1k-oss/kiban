"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppIcon } from "../../../app-icon";
import { Button } from "../../../button";
import { useTextEditorConfig } from "../../context/editor-config-context";
import { activeButtonClass, baseButtonClass, hoverButtonClass } from "../utils";
export const HighlightDropdown = ({ editor, isOpen, onToggle, }) => {
    const { highlightColors } = useTextEditorConfig();
    const isActive = editor.isActive("highlight");
    return (_jsxs("div", { className: "relative", children: [_jsx(Button, { onClick: onToggle, className: `${baseButtonClass} ${isOpen ? activeButtonClass : hoverButtonClass}`, title: "Highlight", "aria-label": "Highlight", "aria-expanded": isOpen, "aria-pressed": isActive, children: _jsx(AppIcon, { iconName: "highlighter", size: 16 }) }), isOpen && (_jsx("div", { className: "absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg p-2 flex flex-wrap gap-1 w-40 z-20", children: highlightColors.map(({ color, label }) => (_jsx(Button, { onClick: () => {
                        if (color === "transparent") {
                            editor.chain().focus().unsetHighlight().run();
                        }
                        else {
                            editor.chain().focus().setHighlight({ color }).run();
                        }
                        onToggle();
                    }, className: "w-6 h-6 rounded border border-border-3 hover:scale-110 transition-transform bg-transparent", style: { backgroundColor: color }, title: label, "aria-label": `Highlight ${label}` }, color))) }))] }));
};
