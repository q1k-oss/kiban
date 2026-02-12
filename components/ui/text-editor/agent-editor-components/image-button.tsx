"use client";
import { Editor } from "@tiptap/core";
import { useCallback, useRef } from "react";

import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { useTextEditorConfig } from "../context/editor-config-context";

import {
  baseButtonClass,
  hoverButtonClass,
  uploadAndInsertImage,
  validateImageUrl,
} from "./utils";

interface ImageButtonProps {
  editor: Editor;
}

export const ImageButton = ({ editor }: ImageButtonProps) => {
  const { onImageUpload } = useTextEditorConfig();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    (file: File) => {
      if (!onImageUpload) return;
      editor.commands.focus();
      uploadAndInsertImage(editor.view, null, file, onImageUpload);
    },
    [editor, onImageUpload],
  );

  const handleAddImage = () => {
    if (onImageUpload) {
      fileInputRef.current?.click();
    } else {
      const raw = prompt("Enter image URL:");
      const url = raw ? validateImageUrl(raw) : null;
      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      } else {
        alert("Invalid image URL. Please enter a valid URL.");
      }
    }
  };

  return (
    <>
      <Button
        onClick={handleAddImage}
        className={`${baseButtonClass} ${hoverButtonClass}`}
        title="Insert Image"
        aria-label="Insert Image"
      >
        <AppIcon iconName="image" size={16} />
      </Button>
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
    </>
  );
};
