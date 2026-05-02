"use client";

import Image from "@tiptap/extension-image";
import { NodeViewWrapper, ReactNodeViewRenderer } from "@tiptap/react";
import type { NodeViewProps } from "@tiptap/react";
import { useEffect, useRef, useState } from "react";

import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { Input } from "../../input";

import { useTextEditorConfig } from "../context/editor-config-context";
import { removeFailedUpload, retryUpload } from "../agent-editor-components/utils";

const ImageNodeView = ({ node, editor, deleteNode, getPos }: NodeViewProps) => {
  const { src, alt, title, srcset, sizes } = node.attrs;
  const { onImageRemove } = useTextEditorConfig();
  const [hovered, setHovered] = useState(false);
  const [editingAlt, setEditingAlt] = useState(false);
  const [draftAlt, setDraftAlt] = useState<string>(alt ?? "");
  const altInputRef = useRef<HTMLInputElement>(null);

  const isUploading = title === "__uploading__";
  const isError = title === "__upload_error__";
  const uploadId = alt?.startsWith("__uploading_") ? alt : null;
  const isNormalImage = !isUploading && !isError;
  const displayAlt = isUploading || isError ? "" : alt ?? "";
  const hasAlt = isNormalImage && typeof alt === "string" && alt.trim().length > 0;

  const handleRemoveImage = async () => {
    if (onImageRemove && src) {
      await onImageRemove(src);
    }
    deleteNode();
  };

  const handleRemoveFailed = () => {
    if (uploadId) removeFailedUpload(editor.view, uploadId);
  };

  const startEditingAlt = () => {
    setDraftAlt(typeof alt === "string" ? alt : "");
    setEditingAlt(true);
  };

  const saveAlt = () => {
    const next = draftAlt.trim();
    const pos = typeof getPos === "function" ? getPos() : undefined;
    if (typeof pos === "number") {
      editor.view.dispatch(
        editor.view.state.tr.setNodeAttribute(pos, "alt", next || null),
      );
    } else {
      // Fallback: update the currently-selected node attrs if positional
      // dispatch isn't available (older tiptap or detached node).
      editor.commands.updateAttributes("image", { alt: next || null });
    }
    setEditingAlt(false);
  };

  useEffect(() => {
    if (editingAlt) {
      altInputRef.current?.focus();
      altInputRef.current?.select();
    }
  }, [editingAlt]);

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
          alt={displayAlt}
          srcSet={srcset || undefined}
          sizes={sizes || undefined}
          className={isError ? "opacity-40" : ""}
          style={{ maxWidth: "100%", display: "block" }}
        />

        {isNormalImage && !hasAlt && !editingAlt && (
          <span
            className="absolute bottom-2 left-2 z-10 px-2 py-1 rounded bg-error-fill/80 text-xs font-medium text-error-border-2 border border-error-border-2/40"
            title="No alt text — required for accessibility and SEO"
          >
            <span className="inline-flex items-center gap-1">
              <AppIcon iconName="alert-triangle" size={12} />
              Missing alt text
            </span>
          </span>
        )}

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

        {isNormalImage && hovered && !editingAlt && (
          <span className="absolute top-2 right-2 z-10 flex gap-1.5">
            <Button
              variant="outline"
              size="sm"
              onClick={startEditingAlt}
              className="text-xs gap-1.5 bg-background/60 backdrop-blur-sm border-border-3 text-primary-text hover:bg-background/80"
              title="Edit alt text"
            >
              <AppIcon iconName="type" size={12} />
              {hasAlt ? "Edit alt" : "Add alt"}
            </Button>
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

        {editingAlt && (
          <span
            className="absolute left-2 right-2 bottom-2 z-20 flex items-center gap-2 p-2 rounded bg-background/95 border border-border-3 shadow-lg"
            style={{ lineHeight: "normal" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Input
              ref={altInputRef}
              value={draftAlt}
              placeholder="Describe the image for screen readers and SEO"
              onChange={(e) => setDraftAlt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  saveAlt();
                } else if (e.key === "Escape") {
                  e.preventDefault();
                  setEditingAlt(false);
                }
              }}
              className="text-sm flex-1"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={saveAlt}
              className="text-xs gap-1.5"
            >
              <AppIcon iconName="check" size={12} />
              Save
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setEditingAlt(false)}
              className="text-xs gap-1.5"
            >
              <AppIcon iconName="x" size={12} />
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
