"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { removeFailedUpload, retryUpload } from "./utils";
export const ImageErrorOverlay = ({ editor }) => {
    const [errorImages, setErrorImages] = useState([]);
    const overlayContainerRef = useRef(null);
    const rafRef = useRef(0);
    const scan = useCallback(() => {
        const overlayContainer = overlayContainerRef.current;
        if (!overlayContainer)
            return;
        const proseMirror = editor.view.dom;
        const pmRect = proseMirror.getBoundingClientRect();
        const imgs = proseMirror.querySelectorAll('img[title="__upload_error__"]');
        const found = [];
        imgs.forEach((img) => {
            const uploadId = img.getAttribute("alt");
            if (!(uploadId === null || uploadId === void 0 ? void 0 : uploadId.startsWith("__uploading_")))
                return;
            const imgRect = img.getBoundingClientRect();
            if (imgRect.width < 10 || imgRect.height < 10)
                return;
            found.push({
                uploadId,
                top: imgRect.top - pmRect.top,
                left: imgRect.left - pmRect.left,
                width: imgRect.width,
                height: imgRect.height,
            });
        });
        setErrorImages(found);
    }, [editor]);
    useEffect(() => {
        scan();
        const handler = () => {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(scan);
        };
        editor.on("update", handler);
        editor.on("transaction", handler);
        window.addEventListener("resize", handler);
        window.addEventListener("scroll", handler, true);
        return () => {
            editor.off("update", handler);
            editor.off("transaction", handler);
            window.removeEventListener("resize", handler);
            window.removeEventListener("scroll", handler, true);
            cancelAnimationFrame(rafRef.current);
        };
    }, [editor, scan]);
    const handleRetry = (uploadId) => {
        retryUpload(editor.view, uploadId);
        setTimeout(scan, 300);
    };
    const handleRemove = (uploadId) => {
        removeFailedUpload(editor.view, uploadId);
        setTimeout(scan, 100);
    };
    return (_jsx("div", { ref: overlayContainerRef, style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            overflow: "visible",
            pointerEvents: "none",
        }, children: errorImages.map(({ uploadId, top, left, width, height }) => (_jsx("div", { style: {
                position: "absolute",
                top,
                left,
                width,
                height,
                pointerEvents: "auto",
            }, className: "rounded overflow-hidden", children: _jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-3", style: { background: "rgba(30, 10, 10, 0.88)" }, children: [_jsx("span", { style: { color: "#d32f2f" }, children: _jsx(AppIcon, { iconName: "image-off", size: 28 }) }), _jsx("span", { className: "text-xs font-medium", style: { color: "#d32f2f" }, children: "Upload failed" }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { variant: "outline", size: "sm", onClick: () => handleRetry(uploadId), className: "text-xs gap-1.5 bg-transparent", style: { borderColor: "rgba(211, 47, 47, 0.4)", color: "#ef5350" }, children: [_jsx(AppIcon, { iconName: "refresh-cw", size: 12 }), "Retry"] }), _jsxs(Button, { variant: "outline", size: "sm", onClick: () => handleRemove(uploadId), className: "text-xs gap-1.5 bg-transparent", style: { borderColor: "rgba(211, 47, 47, 0.4)", color: "#ef5350" }, children: [_jsx(AppIcon, { iconName: "trash-2", size: 12 }), "Remove"] })] })] }) }, uploadId))) }));
};
