"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { AGENT_TOOLBAR_CONFIG } from "../constants";
import { ColorPickerDropdown } from "./dropdowns/agent-editor-color-picker-dropdown";
import { FontSizeDropdown } from "./dropdowns/agent-editor-font-size-dropdown";
import { HighlightDropdown } from "./dropdowns/agent-editor-highlight-dropdown";
import { LinkDropdown } from "./dropdowns/agent-editor-link-dropdown";
import { ImageButton } from "./image-button";
import { ToolbarButton } from "./top-toolbar-button";
import { ToolbarDivider } from "./top-toolbar-divider";
import { isDropdown } from "./utils";
// Main Component
export const TopToolbar = ({ editor }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    if (!editor)
        return null;
    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };
    const renderItem = (item, idx) => {
        if (!isDropdown(item)) {
            return _jsx(ToolbarButton, { item: item, editor: editor }, idx);
        }
        // Handle dropdown types
        switch (item.type) {
            case "color-picker":
                return (_jsx(ColorPickerDropdown, { editor: editor, isOpen: activeDropdown === "color", onToggle: () => toggleDropdown("color") }, idx));
            case "highlight":
                return (_jsx(HighlightDropdown, { editor: editor, isOpen: activeDropdown === "highlight", onToggle: () => toggleDropdown("highlight") }, idx));
            case "font-size":
                return (_jsx(FontSizeDropdown, { editor: editor, isOpen: activeDropdown === "font-size", onToggle: () => toggleDropdown("font-size") }, idx));
            case "link":
                return (_jsx(LinkDropdown, { editor: editor, isOpen: activeDropdown === "link", onToggle: () => toggleDropdown("link") }, idx));
            case "image":
                return _jsx(ImageButton, { editor: editor }, idx);
        }
    };
    return (_jsx("div", { className: "border border-border-3 rounded-md bg-agent-card-fill p-2 flex flex-wrap gap-1 gap-y-3 items-center z-10", children: AGENT_TOOLBAR_CONFIG.map((group, groupIdx) => (_jsxs(React.Fragment, { children: [_jsx("div", { className: "flex gap-1 items-center", children: group.map((item, itemIdx) => renderItem(item, itemIdx)) }), groupIdx < AGENT_TOOLBAR_CONFIG.length - 1 && _jsx(ToolbarDivider, {})] }, groupIdx))) }));
};
