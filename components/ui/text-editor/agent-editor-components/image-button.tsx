"use client";
import { Editor } from "@tiptap/core";

import { AppIcon } from "../../app-icon";
import { Button } from "../../button";

import { baseButtonClass, hoverButtonClass } from "./utils";

interface ImageButtonProps {
  editor: Editor;
}

export const ImageButton = ({ editor }: ImageButtonProps) => {
  const handleAddImage = () => {
    const url = window.prompt("Enter image URL");
    if (url?.trim()) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <Button
      onClick={handleAddImage}
      className={`${baseButtonClass} ${hoverButtonClass}`}
      title="Insert Image"
      aria-label="Insert Image"
    >
      <AppIcon iconName="image" size={16} />
    </Button>
  );
};
