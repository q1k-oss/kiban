"use client";

import Image from "@tiptap/extension-image";
import { NodeViewWrapper, ReactNodeViewRenderer } from "@tiptap/react";
import type { NodeViewProps } from "@tiptap/react";
import { useState } from "react";

import { AppIcon } from "../../app-icon";
import { Button } from "../../button";

import { useTextEditorConfig } from "../context/editor-config-context";
import { removeFailedUpload, retryUpload } from "../agent-editor-components/utils";

const ImageNodeView = ({ node, editor, deleteNode }: NodeViewProps) => {
  const { src, alt, title, srcset, sizes } = node.attrs;
  const { onImageRemove } = useTextEditorConfig();
  const [hovered, setHovered] = useState(false);

  const isUploading = title === "__uploading__";
  const isError = title === "__upload_error__";
  const uploadId = alt?.startsWith("__uploading_") ? alt : null;
  const isNormalImage = !isUploading && !isError;

  const handleRemoveImage = async () => {
    if (onImageRemove && src) {
      await onImageRemove(src);
    }
    deleteNode();
  };

  return (
    <NodeViewWrapper as="span" style={{ display: "inline-block", lineHeight: 0, margin: 0, padding: 0 }}>
      <span
        className="relative"
        style={{ display: "inline-block", lineHeight: 0, margin: 0, padding: 0 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={src}
          alt={isUploading || isError ? "" : alt}
          srcSet={srcset || undefined}
          sizes={sizes || undefined}
          className={isError ? "opacity-40" : ""}
          style={{ maxWidth: "100%", display: "block" }}
        />

        {isUploading && (
          <span
            className="absolute inset-0 flex items-center justify-center rounded"
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
          >
            <span style={{ color: "#888" }}><AppIcon iconName="loader-circle" size={28} className="animate-spin" /></span>
          </span>
        )}

        {isError && uploadId && (
          <span
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded"
            style={{ background: "rgba(30, 10, 10, 0.85)" }}
          >
            <span style={{ color: "#d32f2f" }}><AppIcon iconName="image-off" size={24} /></span>
            <span className="text-xs font-medium" style={{ color: "#d32f2f" }}>
              Upload failed
            </span>
            <span className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => retryUpload(editor.view, uploadId)}
                className="text-xs gap-1.5 bg-transparent"
                style={{ borderColor: "rgba(211, 47, 47, 0.4)", color: "#ef5350" }}
              >
                <AppIcon iconName="refresh-cw" size={12} />
                Retry
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => removeFailedUpload(editor.view, uploadId)}
                className="text-xs gap-1.5 bg-transparent"
                style={{ borderColor: "rgba(211, 47, 47, 0.4)", color: "#ef5350" }}
              >
                <AppIcon iconName="trash-2" size={12} />
                Remove
              </Button>
            </span>
          </span>
        )}

        {isNormalImage && hovered && (
          <span className="absolute top-2 right-2 z-10">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRemoveImage}
              className="text-xs gap-1.5 bg-black/60 backdrop-blur-sm border-white/20 text-white hover:bg-black/80 hover:text-white"
            >
              <AppIcon iconName="trash-2" size={12} />
              Remove
            </Button>
          </span>
        )}
      </span>
    </NodeViewWrapper>
  );
};

export const ResponsiveImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      srcset: {
        default: null,
        parseHTML: (element: HTMLElement) => element.getAttribute("srcset"),
        renderHTML: (attributes: Record<string, unknown>) => {
          if (!attributes.srcset) return {};
          return { srcset: attributes.srcset };
        },
      },
      sizes: {
        default: null,
        parseHTML: (element: HTMLElement) => element.getAttribute("sizes"),
        renderHTML: (attributes: Record<string, unknown>) => {
          if (!attributes.sizes) return {};
          return { sizes: attributes.sizes };
        },
      },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageNodeView);
  },
});
