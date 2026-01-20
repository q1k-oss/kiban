"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { AppIcon } from "../../../app-icon";
import { Button } from "../../../button";
import { baseButtonClass, activeButtonClass, hoverButtonClass } from "../utils";
export const LinkDropdown = ({ editor, isOpen, onToggle }) => {
    const [url, setUrl] = useState("");
    const handleAddLink = () => {
        if (url.trim()) {
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
    return (_jsxs("div", { className: "relative", children: [_jsx(Button, { onClick: isLinkActive ? handleRemoveLink : onToggle, className: `${baseButtonClass}, ${isOpen ? activeButtonClass : hoverButtonClass}`, title: isLinkActive ? "Remove Link" : "Add Link", "aria-label": isLinkActive ? "Remove Link" : "Add Link", "aria-pressed": isLinkActive, children: _jsx(AppIcon, { iconName: "link", size: 16 }) }), isOpen && !isLinkActive && (_jsxs("div", { className: "absolute top-full mt-1 bg-white border border-gray-300 rounded shadow-lg p-2 flex gap-2 z-20", children: [_jsx("input", { type: "url", placeholder: "https://example.com", value: url, onChange: (e) => setUrl(e.target.value), onKeyPress: (e) => e.key === "Enter" && handleAddLink(), className: "border border-gray-300 rounded px-2 py-1 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500", autoFocus: true, "aria-label": "Link URL" }), _jsx(Button, { onClick: handleAddLink, className: "bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600", children: "Add" })] }))] }));
};
