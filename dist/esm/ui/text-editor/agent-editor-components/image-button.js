"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useRef } from "react";
import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { useTextEditorConfig } from "../context/editor-config-context";
import { baseButtonClass, hoverButtonClass, uploadAndInsertImage, validateImageUrl, } from "./utils";
export const ImageButton = ({ editor }) => {
    const { onImageUpload } = useTextEditorConfig();
    const fileInputRef = useRef(null);
    const handleFileSelect = useCallback((file) => {
        if (!onImageUpload)
            return;
        editor.commands.focus();
        uploadAndInsertImage(editor.view, null, file, onImageUpload);
    }, [editor, onImageUpload]);
    const handleAddImage = () => {
        var _a;
        if (onImageUpload) {
            (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
        }
        else {
            const raw = prompt("Enter image URL:");
            const url = raw ? validateImageUrl(raw) : null;
            if (url) {
                editor.chain().focus().setImage({ src: url }).run();
            }
            else {
                alert("Invalid image URL. Please enter a valid URL.");
            }
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: handleAddImage, className: `${baseButtonClass} ${hoverButtonClass}`, title: "Insert Image", "aria-label": "Insert Image", children: _jsx(AppIcon, { iconName: "image", size: 16 }) }), onImageUpload && (_jsx("input", { ref: fileInputRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => {
                    var _a;
                    const file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
                    if (file)
                        handleFileSelect(file);
                    e.target.value = "";
                } }))] }));
};
