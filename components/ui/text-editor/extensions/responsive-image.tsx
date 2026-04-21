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

  const handleRemoveFailed = () => {
    if (uploadId) removeFailedUpload(editor.view, uploadId);
  };

  const wrapperStyle = {
    display: "inline-block" as const,
    lineHeight: 0,
    margin: 0,
    padding: 0,
  };

  return (
    <NodeViewWrapper as="span" style={wrapperStyle}>
      <span
        className="relative"
        style={wrapperStyle}
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
          <span className="absolute inset-0 flex items-center justify-center rounded bg-background/50 text-tertiary-text">
            <AppIcon iconName="loader-circle" size={28} className="animate-spin" />
          </span>
        )}

        {isError && uploadId && (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded bg-error-fill/90 text-error-border-2">
            <AppIcon iconName="image-off" size={24} />
            <span className="text-xs font-medium">Upload failed</span>
            <span className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => retryUpload(editor.view, uploadId)}
                className="text-xs gap-1.5 bg-transparent border-error-border-2/40 text-error-border-2 hover:bg-error-border-2/10"
              >
                <AppIcon iconName="refresh-cw" size={12} />
                Retry
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRemoveFailed}
                className="text-xs gap-1.5 bg-transparent border-error-border-2/40 text-error-border-2 hover:bg-error-border-2/10"
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
              className="text-xs gap-1.5 bg-background/60 backdrop-blur-sm border-border-3 text-primary-text hover:bg-background/80"
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
  renderHTML({ HTMLAttributes }) {
    const { alt, title, ...rest } = HTMLAttributes;
    const cleanedAlt = typeof alt === "string" && alt.startsWith("__uploading_") ? "" : alt;
    const isTransient = title === "__uploading__" || title === "__upload_error__";
    const cleanedAttrs = {
      ...rest,
      ...(cleanedAlt ? { alt: cleanedAlt } : {}),
      ...(!isTransient && title ? { title } : {}),
    };
    return ["img", cleanedAttrs];
  },

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
