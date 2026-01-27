"use client";
import { Editor } from "@tiptap/core";
import { useState } from "react";

import { AppIcon } from "../../../app-icon";
import { Button } from "../../../button";
import { Input } from "../../../input";
import {
  activeButtonClass,
  baseButtonClass,
  hoverButtonClass,
  normalizeUrl,
} from "../utils";

interface LinkDropdownProps {
  editor: Editor;
  isOpen: boolean;
  onToggle: () => void;
}

export const LinkDropdown = ({
  editor,
  isOpen,
  onToggle,
}: LinkDropdownProps) => {
  const [url, setUrl] = useState("");

  const handleAddLink = () => {
    const ValidURL = url ? normalizeUrl(url.trim()) : null;
    if (ValidURL) {
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
        className={`${baseButtonClass} ${isOpen ? activeButtonClass : hoverButtonClass}`}
        title={isLinkActive ? "Remove Link" : "Add Link"}
        aria-label={isLinkActive ? "Remove Link" : "Add Link"}
        aria-pressed={isLinkActive}
      >
        <AppIcon iconName="link" size={16} />
      </Button>
      {isOpen && !isLinkActive && (
        <div className="absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg p-2 flex gap-2 z-20">
          <Input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddLink()}
            className="w-48 text-sm"
            autoFocus
            aria-label="Link URL"
          />
          <Button
            onClick={handleAddLink}
            className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm hover:bg-primary/90"
          >
            Add
          </Button>
        </div>
      )}
    </div>
  );
};
