"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useRef, useState } from "react";
import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { Input } from "../../input";
import { useTextEditorConfig } from "../context/editor-config-context";
import { baseButtonClass, hoverButtonClass, activeButtonClass, uploadAndInsertImage, validateImageUrl, } from "./utils";
export const ImageButton = ({ editor, isOpen, onToggle }) => {
    const { onImageUpload } = useTextEditorConfig();
    const fileInputRef = useRef(null);
    const [url, setUrl] = useState("");
    const handleFileSelect = useCallback((file) => {
        if (!onImageUpload)
            return;
        editor.commands.focus();
        uploadAndInsertImage(editor.view, null, file, onImageUpload);
    }, [editor, onImageUpload]);
    const handleAddImageUrl = () => {
        const validUrl = url ? validateImageUrl(url.trim()) : null;
        if (validUrl) {
            editor.chain().focus().setImage({ src: validUrl }).run();
            setUrl("");
            onToggle();
        }
    };
    const handleClick = () => {
        var _a;
        if (onImageUpload) {
            (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
        }
        else {
            onToggle();
        }
    };
    return (_jsxs("div", { className: "relative", children: [_jsx(Button, { onClick: handleClick, className: `${baseButtonClass} ${isOpen ? activeButtonClass : hoverButtonClass}`, title: "Insert Image", "aria-label": "Insert Image", children: _jsx(AppIcon, { iconName: "image", size: 16 }) }), isOpen && !onImageUpload && (_jsxs("div", { className: "absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg p-2 flex gap-2 z-20", children: [_jsx(Input, { type: "url", placeholder: "https://example.com/image.png", value: url, onChange: (e) => setUrl(e.target.value), onKeyDown: (e) => e.key === "Enter" && handleAddImageUrl(), className: "w-56 text-sm", autoFocus: true, "aria-label": "Image URL" }), _jsx(Button, { onClick: handleAddImageUrl, className: "bg-primary text-primary-foreground px-3 py-1 rounded text-sm hover:bg-primary/90", children: "Add" })] })), onImageUpload && (_jsx("input", { ref: fileInputRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => {
                    var _a;
                    const file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
                    if (file)
                        handleFileSelect(file);
                    e.target.value = "";
                } }))] }));
};
