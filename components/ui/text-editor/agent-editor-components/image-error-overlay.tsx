"use client";

import type { Editor } from "@tiptap/core";
import { useCallback, useEffect, useRef, useState } from "react";

import { AppIcon } from "../../app-icon";
import { Button } from "../../button";

import { removeFailedUpload, retryUpload } from "./utils";

interface ErrorImage {
  uploadId: string;
  top: number;
  left: number;
  width: number;
  height: number;
}

interface ImageErrorOverlayProps {
  editor: Editor;
}

export const ImageErrorOverlay = ({ editor }: ImageErrorOverlayProps) => {
  const [errorImages, setErrorImages] = useState<ErrorImage[]>([]);
  const overlayContainerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  const scan = useCallback(() => {
    const overlayContainer = overlayContainerRef.current;
    if (!overlayContainer) return;

    const proseMirror = editor.view.dom as HTMLElement;
    const pmRect = proseMirror.getBoundingClientRect();

    const imgs = proseMirror.querySelectorAll<HTMLImageElement>(
      'img[title="__upload_error__"]',
    );
    const found: ErrorImage[] = [];

    imgs.forEach((img) => {
      const uploadId = img.getAttribute("alt");
      if (!uploadId?.startsWith("__uploading_")) return;

      const imgRect = img.getBoundingClientRect();
      if (imgRect.width < 10 || imgRect.height < 10) return;

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

  const handleRetry = (uploadId: string) => {
    retryUpload(editor.view, uploadId);
    setTimeout(scan, 300);
  };

  const handleRemove = (uploadId: string) => {
    removeFailedUpload(editor.view, uploadId);
    setTimeout(scan, 100);
  };

  return (
    <div
      ref={overlayContainerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        overflow: "visible",
        pointerEvents: "none",
      }}
    >
      {errorImages.map(({ uploadId, top, left, width, height }) => (
        <div
          key={uploadId}
          style={{
            position: "absolute",
            top,
            left,
            width,
            height,
            pointerEvents: "auto",
          }}
          className="rounded overflow-hidden"
        >
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: "rgba(30, 10, 10, 0.88)" }}
          >
            <span style={{ color: "#d32f2f" }}><AppIcon iconName="image-off" size={28} /></span>
            <span className="text-xs font-medium" style={{ color: "#d32f2f" }}>
              Upload failed
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleRetry(uploadId)}
                className="text-xs gap-1.5 bg-transparent"
                style={{ borderColor: "rgba(211, 47, 47, 0.4)", color: "#ef5350" }}
              >
                <AppIcon iconName="refresh-cw" size={12} />
                Retry
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleRemove(uploadId)}
                className="text-xs gap-1.5 bg-transparent"
                style={{ borderColor: "rgba(211, 47, 47, 0.4)", color: "#ef5350" }}
              >
                <AppIcon iconName="trash-2" size={12} />
                Remove
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
