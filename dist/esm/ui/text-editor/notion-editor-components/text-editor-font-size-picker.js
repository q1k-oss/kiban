"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../button";
import { useTextEditorConfig } from "../context/editor-config-context";
export const TextEditorFontSizePicker = ({ editor, onClose, }) => {
    const { fontSizes } = useTextEditorConfig();
    return (_jsxs("div", { className: "absolute top-full w-full mt-2 bg-agent-card-fill border border-border-3 rounded-lg shadow-xl p-2 z-50 min-w-40", children: [_jsx("div", { className: "text-sm font-medium text-primary-text mb-2 px-2", children: "Font Size" }), _jsxs("div", { className: "space-y-1", children: [fontSizes.map((size) => (_jsxs(Button, { onClick: () => {
                            editor
                                .chain()
                                .focus()
                                .setMark("textStyle", { fontSize: size.value })
                                .run();
                            onClose();
                        }, "aria-label": `Set font size to ${size.label}`, className: "w-full px-3 py-2 text-left rounded transition-colors text-xs text-tertiary-text hover:text-primary-text hover:bg-primary-foreground/10 font-light flex items-center justify-between cursor-pointer duration-100 bg-transparent", children: [_jsx("span", { className: "font-medium", children: size.label }), _jsxs("span", { className: "text-tertiary-text", children: ["(", size.value, ")"] })] }, size.value))), _jsx("div", { className: "border-t border-button-border2 my-1" }), _jsx(Button, { onClick: () => {
                            editor
                                .chain()
                                .focus()
                                .setMark("textStyle", { fontSize: null })
                                .run();
                            onClose();
                        }, className: "w-full px-3 py-2 text-left rounded transition-colors text-sm text-secondary-text hover:text-primary-text hover:bg-primary-foreground/10 cursor-pointer duration-100 bg-transparent", children: "Reset to default" })] })] }));
};
