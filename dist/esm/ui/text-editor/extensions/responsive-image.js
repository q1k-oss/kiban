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
    return (_jsx(NodeViewWrapper, { as: "span", style: { display: "inline-block", lineHeight: 0, margin: 0, padding: 0 }, children: _jsxs("span", { className: "relative", style: { display: "inline-block", lineHeight: 0, margin: 0, padding: 0 }, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), children: [_jsx("img", { src: src, alt: isUploading || isError ? "" : alt, srcSet: srcset || undefined, sizes: sizes || undefined, className: isError ? "opacity-40" : "", style: { maxWidth: "100%", display: "block" } }), isUploading && (_jsx("span", { className: "absolute inset-0 flex items-center justify-center rounded", style: { background: "rgba(0, 0, 0, 0.5)" }, children: _jsx("span", { style: { color: "#888" }, children: _jsx(AppIcon, { iconName: "loader-circle", size: 28, className: "animate-spin" }) }) })), isError && uploadId && (_jsxs("span", { className: "absolute inset-0 flex flex-col items-center justify-center gap-2 rounded", style: { background: "rgba(30, 10, 10, 0.85)" }, children: [_jsx("span", { style: { color: "#d32f2f" }, children: _jsx(AppIcon, { iconName: "image-off", size: 24 }) }), _jsx("span", { className: "text-xs font-medium", style: { color: "#d32f2f" }, children: "Upload failed" }), _jsxs("span", { className: "flex gap-2", children: [_jsxs(Button, { variant: "outline", size: "sm", onClick: () => retryUpload(editor.view, uploadId), className: "text-xs gap-1.5 bg-transparent", style: { borderColor: "rgba(211, 47, 47, 0.4)", color: "#ef5350" }, children: [_jsx(AppIcon, { iconName: "refresh-cw", size: 12 }), "Retry"] }), _jsxs(Button, { variant: "outline", size: "sm", onClick: () => removeFailedUpload(editor.view, uploadId), className: "text-xs gap-1.5 bg-transparent", style: { borderColor: "rgba(211, 47, 47, 0.4)", color: "#ef5350" }, children: [_jsx(AppIcon, { iconName: "trash-2", size: 12 }), "Remove"] })] })] })), isNormalImage && hovered && (_jsx("span", { className: "absolute top-2 right-2 z-10", children: _jsxs(Button, { variant: "outline", size: "sm", onClick: handleRemoveImage, className: "text-xs gap-1.5 bg-black/60 backdrop-blur-sm border-white/20 text-white hover:bg-black/80 hover:text-white", children: [_jsx(AppIcon, { iconName: "trash-2", size: 12 }), "Remove"] }) }))] }) }));
};
export const ResponsiveImage = Image.extend({
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
