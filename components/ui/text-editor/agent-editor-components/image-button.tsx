"use client";
import { Editor } from "@tiptap/core";
import { useCallback, useRef, useState } from "react";

import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { Input } from "../../input";
import { useTextEditorConfig } from "../context/editor-config-context";

import {
  baseButtonClass,
  hoverButtonClass,
  activeButtonClass,
  uploadAndInsertImage,
  validateImageUrl,
} from "./utils";

interface ImageButtonProps {
  editor: Editor;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const ImageButton = ({ editor, isOpen: controlledOpen, onToggle }: ImageButtonProps) => {
  const { onImageUpload } = useTextEditorConfig();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const toggle = useCallback(() => {
    if (onToggle) onToggle();
    else setUncontrolledOpen((p) => !p);
  }, [onToggle]);

  const handleFileSelect = useCallback(
    (file: File) => {
      if (!onImageUpload) return;
      editor.commands.focus();
      uploadAndInsertImage(editor.view, null, file, onImageUpload);
    },
    [editor, onImageUpload],
  );

  const handleAddImageUrl = () => {
    const validUrl = url ? validateImageUrl(url.trim()) : null;
    if (validUrl) {
      editor.chain().focus().setImage({ src: validUrl }).run();
      setUrl("");
      setError(false);
      toggle();
    } else {
      setError(true);
    }
  };

  const handleClick = () => {
    if (onImageUpload) {
      fileInputRef.current?.click();
    } else {
      toggle();
    }
  };

  return (
    <div className="relative">
      <Button
        onClick={handleClick}
        className={`${baseButtonClass} ${isOpen ? activeButtonClass : hoverButtonClass}`}
        title="Insert Image"
        aria-label="Insert Image"
      >
        <AppIcon iconName="image" size={16} />
      </Button>

      {isOpen && !onImageUpload && (
        <div
          className="absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg p-2 flex flex-col gap-1 z-20"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setUrl("");
              setError(false);
              toggle();
            }
          }}
        >
          <div className="flex gap-2">
            <Input
              type="url"
              placeholder="https://example.com/image.png"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError(false);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleAddImageUrl()}
              className={`w-56 text-sm ${error ? "border-error-border-2" : ""}`}
              autoFocus
              aria-label="Image URL"
              aria-invalid={error}
            />
            <Button
              onClick={handleAddImageUrl}
              className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm hover:bg-primary/90"
            >
              Add
            </Button>
          </div>
          {error && (
            <span className="text-xs text-error-border-2">Invalid image URL</span>
          )}
        </div>
      )}

      {onImageUpload && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFileSelect(file);
            e.target.value = "";
          }}
        />
      )}
    </div>
  );
};
