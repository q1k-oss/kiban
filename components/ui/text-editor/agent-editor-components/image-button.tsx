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
  isOpen: boolean;
  onToggle: () => void;
}

export const ImageButton = ({ editor, isOpen, onToggle }: ImageButtonProps) => {
  const { onImageUpload } = useTextEditorConfig();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState("");

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
      onToggle();
    }
  };

  const handleClick = () => {
    if (onImageUpload) {
      fileInputRef.current?.click();
    } else {
      onToggle();
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
        <div className="absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg p-2 flex gap-2 z-20">
          <Input
            type="url"
            placeholder="https://example.com/image.png"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddImageUrl()}
            className="w-56 text-sm"
            autoFocus
            aria-label="Image URL"
          />
          <Button
            onClick={handleAddImageUrl}
            className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm hover:bg-primary/90"
          >
            Add
          </Button>
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
