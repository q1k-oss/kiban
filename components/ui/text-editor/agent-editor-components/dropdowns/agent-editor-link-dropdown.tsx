"use client";
import { Editor } from "@tiptap/core";
import React, { useState } from "react";

import { cn } from "@happect/ethereal-ui/utils";

import { AppIcon } from "../../../app-icon";
import { Button } from "../../../button";
import { baseButtonClass, activeButtonClass, hoverButtonClass } from "../utils";

interface LinkDropdownProps {
  editor: Editor;
  isOpen: boolean;
  onToggle: () => void;
}

export const LinkDropdown = ({ editor, isOpen, onToggle }: LinkDropdownProps) => {
  const [url, setUrl] = useState("");

  const handleAddLink = () => {
    if (url.trim()) {
      editor.chain().focus().setLink({ href: url }).run();
      setUrl("");
      onToggle();
    }
  };

  const handleRemoveLink = () => {
    editor.chain().focus().unsetLink().run();
    onToggle();
  };

  const isLinkActive = editor.isActive("link");

  return (
    <div className="relative">
      <Button
        onClick={isLinkActive ? handleRemoveLink : onToggle}
        className={cn(
          baseButtonClass,
          isOpen ? activeButtonClass : hoverButtonClass,
        )}
        title={isLinkActive ? "Remove Link" : "Add Link"}
        aria-label={isLinkActive ? "Remove Link" : "Add Link"}
        aria-pressed={isLinkActive}
      >
        <AppIcon iconName="link" size={16} />
      </Button>
      {isOpen && !isLinkActive && (
        <div className="absolute top-full mt-1 bg-white border border-gray-300 rounded shadow-lg p-2 flex gap-2 z-20">
          <input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddLink()}
            className="border border-gray-300 rounded px-2 py-1 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
            aria-label="Link URL"
          />
          <Button
            onClick={handleAddLink}
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
          >
            Add
          </Button>
        </div>
      )}
    </div>
  );
};