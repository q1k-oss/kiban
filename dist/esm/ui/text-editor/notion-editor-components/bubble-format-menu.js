"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { NOTION_BUBBLE_FORMAT_MENU_TOOLBAR_CONFIG } from "../constants";
import { TextEditorFontSizePicker } from "./text-editor-font-size-picker";
export const BubbleFormatMenu = ({ editor }) => {
    const [showFontSizePicker, setShowFontSizePicker] = useState(false);
    return (_jsxs("div", { className: "relative", children: [_jsxs("div", { className: "flex items-center gap-1 bg-agent-card-fill rounded-lg p-1.5 shadow-2xl border border-border-3", children: [NOTION_BUBBLE_FORMAT_MENU_TOOLBAR_CONFIG.map((format, idx) => {
                        var _a;
                        const isActive = (_a = format.active) === null || _a === void 0 ? void 0 : _a.call(format, editor);
                        return (_jsx(Button, { onClick: () => format.action(editor), title: format.label, "aria-label": format.label, "aria-pressed": isActive, className: `p-2 rounded transition-colors text-tertiary-text cursor-pointer bg-transparent ${isActive
                                ? "bg-primary-foreground/10 text-primary-text"
                                : "hover:text-primary-text hover:bg-primary-foreground/10"}`, children: _jsx(AppIcon, { iconName: format.icon, size: 16 }) }, idx));
                    }), _jsxs(Button, { onClick: () => setShowFontSizePicker(!showFontSizePicker), title: "Font Size", "aria-label": "Font Size", "aria-expanded": showFontSizePicker, className: `p-2 rounded transition-colors flex items-center gap-1 text-tertiary-text cursor-pointer bg-transparent ${showFontSizePicker
                            ? "bg-primary-foreground/10 text-primary-text"
                            : "hover:text-primary-text hover:bg-primary-foreground/10"}`, children: [_jsx(AppIcon, { iconName: "type", size: 16 }), _jsx(AppIcon, { iconName: "chevron-down", size: 12 })] })] }), showFontSizePicker && (_jsx(TextEditorFontSizePicker, { editor: editor, onClose: () => setShowFontSizePicker(false) }))] }));
};
