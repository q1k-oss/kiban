"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { baseButtonClass, hoverButtonClass } from "./utils";
export const ImageButton = ({ editor }) => {
    const handleAddImage = () => {
        const url = window.prompt("Enter image URL");
        if (url === null || url === void 0 ? void 0 : url.trim()) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };
    return (_jsx(Button, { onClick: handleAddImage, className: `${baseButtonClass} ${hoverButtonClass}`, title: "Insert Image", "aria-label": "Insert Image", children: _jsx(AppIcon, { iconName: "image", size: 16 }) }));
};
