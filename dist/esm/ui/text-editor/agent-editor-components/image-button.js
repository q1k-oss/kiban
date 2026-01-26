"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { baseButtonClass, hoverButtonClass, validateImageUrl } from "./utils";
export const ImageButton = ({ editor }) => {
    const handleAddImage = () => {
        const raw = prompt("Enter image URL:");
        const url = raw ? validateImageUrl(raw) : null;
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };
    return (_jsx(Button, { onClick: handleAddImage, className: `${baseButtonClass} ${hoverButtonClass}`, title: "Insert Image", "aria-label": "Insert Image", children: _jsx(AppIcon, { iconName: "image", size: 16 }) }));
};
