"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useRef, useState } from "react";
import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { Input } from "../../input";
import { useTextEditorConfig } from "../context/editor-config-context";
import { baseButtonClass, hoverButtonClass, activeButtonClass, uploadAndInsertImage, validateImageUrl, } from "./utils";
export const ImageButton = ({ editor, isOpen: controlledOpen, onToggle }) => {
    const { onImageUpload } = useTextEditorConfig();
    const fileInputRef = useRef(null);
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const [url, setUrl] = useState("");
    const [error, setError] = useState(false);
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;
    const toggle = useCallback(() => {
        if (onToggle)
            onToggle();
        else
            setUncontrolledOpen((p) => !p);
    }, [onToggle]);
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
            setError(false);
            toggle();
        }
        else {
            setError(true);
        }
    };
    const handleClick = () => {
        var _a;
        if (onImageUpload) {
            (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
        }
        else {
            toggle();
        }
    };
    return (_jsxs("div", { className: "relative", children: [_jsx(Button, { onClick: handleClick, className: `${baseButtonClass} ${isOpen ? activeButtonClass : hoverButtonClass}`, title: "Insert Image", "aria-label": "Insert Image", children: _jsx(AppIcon, { iconName: "image", size: 16 }) }), isOpen && !onImageUpload && (_jsxs("div", { className: "absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg p-2 flex flex-col gap-1 z-20", onKeyDown: (e) => {
                    if (e.key === "Escape") {
                        setUrl("");
                        setError(false);
                        toggle();
                    }
                }, children: [_jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { type: "url", placeholder: "https://example.com/image.png", value: url, onChange: (e) => {
                                    setUrl(e.target.value);
                                    setError(false);
                                }, onKeyDown: (e) => e.key === "Enter" && handleAddImageUrl(), className: `w-56 text-sm ${error ? "border-error-border-2" : ""}`, autoFocus: true, "aria-label": "Image URL", "aria-invalid": error }), _jsx(Button, { onClick: handleAddImageUrl, className: "bg-primary text-primary-foreground px-3 py-1 rounded text-sm hover:bg-primary/90", children: "Add" })] }), error && (_jsx("span", { className: "text-xs text-error-border-2", children: "Invalid image URL" }))] })), onImageUpload && (_jsx("input", { ref: fileInputRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => {
                    var _a;
                    const file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
                    if (file)
                        handleFileSelect(file);
                    e.target.value = "";
                } }))] }));
};
