"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "@tiptap/extension-image";
import { NodeViewWrapper, ReactNodeViewRenderer } from "@tiptap/react";
import { useState } from "react";
import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { useTextEditorConfig } from "../context/editor-config-context";
import { removeFailedUpload, retryUpload } from "../agent-editor-components/utils";
const ImageNodeView = ({ node, editor, deleteNode }) => {
    const { src, alt, title, srcset, sizes } = node.attrs;
    const { onImageRemove } = useTextEditorConfig();
    const [hovered, setHovered] = useState(false);
    const isUploading = title === "__uploading__";
    const isError = title === "__upload_error__";
    const uploadId = (alt === null || alt === void 0 ? void 0 : alt.startsWith("__uploading_")) ? alt : null;
    const isNormalImage = !isUploading && !isError;
    const handleRemoveImage = () => __awaiter(void 0, void 0, void 0, function* () {
        if (onImageRemove && src) {
            yield onImageRemove(src);
        }
        deleteNode();
    });
    const handleRemoveFailed = () => {
        if (uploadId)
            removeFailedUpload(editor.view, uploadId);
    };
    const wrapperStyle = {
        display: "inline-block",
        lineHeight: 0,
        margin: 0,
        padding: 0,
    };
    return (_jsx(NodeViewWrapper, { as: "span", style: wrapperStyle, children: _jsxs("span", { className: "relative", style: wrapperStyle, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), children: [_jsx("img", { src: src, alt: isUploading || isError ? "" : alt, srcSet: srcset || undefined, sizes: sizes || undefined, className: isError ? "opacity-40" : "", style: { maxWidth: "100%", display: "block" } }), isUploading && (_jsx("span", { className: "absolute inset-0 flex items-center justify-center rounded bg-background/50 text-tertiary-text", children: _jsx(AppIcon, { iconName: "loader-circle", size: 28, className: "animate-spin" }) })), isError && uploadId && (_jsxs("span", { className: "absolute inset-0 flex flex-col items-center justify-center gap-2 rounded bg-error-fill/90 text-error-border-2", children: [_jsx(AppIcon, { iconName: "image-off", size: 24 }), _jsx("span", { className: "text-xs font-medium", children: "Upload failed" }), _jsxs("span", { className: "flex gap-2", children: [_jsxs(Button, { variant: "outline", size: "sm", onClick: () => retryUpload(editor.view, uploadId), className: "text-xs gap-1.5 bg-transparent border-error-border-2/40 text-error-border-2 hover:bg-error-border-2/10", children: [_jsx(AppIcon, { iconName: "refresh-cw", size: 12 }), "Retry"] }), _jsxs(Button, { variant: "outline", size: "sm", onClick: handleRemoveFailed, className: "text-xs gap-1.5 bg-transparent border-error-border-2/40 text-error-border-2 hover:bg-error-border-2/10", children: [_jsx(AppIcon, { iconName: "trash-2", size: 12 }), "Remove"] })] })] })), isNormalImage && hovered && (_jsx("span", { className: "absolute top-2 right-2 z-10", children: _jsxs(Button, { variant: "outline", size: "sm", onClick: handleRemoveImage, className: "text-xs gap-1.5 bg-background/60 backdrop-blur-sm border-border-3 text-primary-text hover:bg-background/80", children: [_jsx(AppIcon, { iconName: "trash-2", size: 12 }), "Remove"] }) }))] }) }));
};
export const ResponsiveImage = Image.extend({
    renderHTML({ HTMLAttributes }) {
        const { alt, title } = HTMLAttributes, rest = __rest(HTMLAttributes, ["alt", "title"]);
        const cleanedAlt = typeof alt === "string" && alt.startsWith("__uploading_") ? "" : alt;
        const isTransient = title === "__uploading__" || title === "__upload_error__";
        const cleanedAttrs = Object.assign(Object.assign(Object.assign({}, rest), (cleanedAlt ? { alt: cleanedAlt } : {})), (!isTransient && title ? { title } : {}));
        return ["img", cleanedAttrs];
    },
    addAttributes() {
        var _a;
        return Object.assign(Object.assign({}, (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this)), { srcset: {
                default: null,
                parseHTML: (element) => element.getAttribute("srcset"),
                renderHTML: (attributes) => {
                    if (!attributes.srcset)
                        return {};
                    return { srcset: attributes.srcset };
                },
            }, sizes: {
                default: null,
                parseHTML: (element) => element.getAttribute("sizes"),
                renderHTML: (attributes) => {
                    if (!attributes.sizes)
                        return {};
                    return { sizes: attributes.sizes };
                },
            } });
    },
    addNodeView() {
        return ReactNodeViewRenderer(ImageNodeView);
    },
});
