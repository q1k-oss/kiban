"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { AppIcon } from "../../../app-icon";
import { Button } from "../../../button";
import { Input } from "../../../input";
import { activeButtonClass, baseButtonClass, hoverButtonClass, normalizeUrl, } from "../utils";
export const LinkDropdown = ({ editor, isOpen, onToggle, }) => {
    const [url, setUrl] = useState("");
    const handleAddLink = () => {
        const ValidURL = url ? normalizeUrl(url.trim()) : null;
        if (ValidURL) {
            editor.chain().focus().setLink({ href: url }).run();
            setUrl("");
            onToggle();
        }
    };
    const handleRemoveLink = () => {
        editor.chain().focus().unsetLink().run();
        onToggle();
    };
    const isLinkActive = editor.isActive("link");
    return (_jsxs("div", { className: "relative", children: [_jsx(Button, { onClick: isLinkActive ? handleRemoveLink : onToggle, className: `${baseButtonClass} ${isOpen ? activeButtonClass : hoverButtonClass}`, title: isLinkActive ? "Remove Link" : "Add Link", "aria-label": isLinkActive ? "Remove Link" : "Add Link", "aria-pressed": isLinkActive, children: _jsx(AppIcon, { iconName: "link", size: 16 }) }), isOpen && !isLinkActive && (_jsxs("div", { className: "absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg p-2 flex gap-2 z-20", children: [_jsx(Input, { type: "url", placeholder: "https://example.com", value: url, onChange: (e) => setUrl(e.target.value), onKeyDown: (e) => e.key === "Enter" && handleAddLink(), className: "w-48 text-sm", autoFocus: true, "aria-label": "Link URL" }), _jsx(Button, { onClick: handleAddLink, className: "bg-primary text-primary-foreground px-3 py-1 rounded text-sm hover:bg-primary/90", children: "Add" })] }))] }));
};
