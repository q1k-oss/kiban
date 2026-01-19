import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { AppIcon } from "../app-icon";
import { FontSizePicker } from "./FontSizePicker";
export const InlineFormatMenu = ({ editor }) => {
    const [showFontSizePicker, setShowFontSizePicker] = useState(false);
    const formats = [
        {
            icon: _jsx(AppIcon, { iconName: "bold", size: 16 }),
            action: () => editor.chain().focus().toggleBold().run(),
            active: editor.isActive("bold"),
            label: "Bold",
        },
        {
            icon: _jsx(AppIcon, { iconName: "italic", size: 16 }),
            action: () => editor.chain().focus().toggleItalic().run(),
            active: editor.isActive("italic"),
            label: "Italic",
        },
        {
            icon: _jsx(AppIcon, { iconName: "underline", size: 16 }),
            action: () => editor.chain().focus().toggleUnderline().run(),
            active: editor.isActive("underline"),
            label: "Underline",
        },
        {
            icon: _jsx(AppIcon, { iconName: "strikethrough", size: 16 }),
            action: () => editor.chain().focus().toggleStrike().run(),
            active: editor.isActive("strike"),
            label: "Strikethrough",
        },
        {
            icon: _jsx(AppIcon, { iconName: "code", size: 16 }),
            action: () => editor.chain().focus().toggleCode().run(),
            active: editor.isActive("code"),
            label: "Code",
        },
        {
            icon: _jsx(AppIcon, { iconName: "link", size: 16 }),
            action: () => {
                const url = prompt("Enter URL:");
                if (url) {
                    editor.chain().focus().setLink({ href: url }).run();
                }
            },
            active: editor.isActive("link"),
            label: "Link",
        },
        {
            icon: _jsx(AppIcon, { iconName: "highlighter", size: 16 }),
            action: () => editor.chain().focus().toggleHighlight().run(),
            active: editor.isActive("highlight"),
            label: "Highlight",
        },
    ];
    return (_jsxs("div", { className: "relative", children: [_jsxs("div", { className: "flex items-center gap-1 bg-agent-card-fill rounded-lg p-1.5 shadow-2xl border border-border-3", children: [formats.map((format, idx) => (_jsx("button", { onClick: format.action, title: format.label, className: `p-2 rounded transition-colors text-tertiary-text cursor-pointer ${format.active
                            ? "bg-primary-foreground/10 text-primary-text"
                            : "hover:text-primary-text hover:bg-primary-foreground/10"}`, children: format.icon }, idx))), _jsxs("button", { onClick: () => {
                            setShowFontSizePicker(!showFontSizePicker);
                        }, title: "Font Size", className: `p-2 rounded transition-colors flex items-center gap-1 text-tertiary-text cursor-pointer ${showFontSizePicker
                            ? "bg-primary-foreground/10 text-primary-text"
                            : "hover:text-primary-text hover:bg-primary-foreground/10"}`, children: [_jsx(AppIcon, { iconName: "type", size: 16 }), _jsx(AppIcon, { iconName: "chevron-down", size: 12 })] })] }), showFontSizePicker && (_jsx(FontSizePicker, { editor: editor, onClose: () => setShowFontSizePicker(false) }))] }));
};
