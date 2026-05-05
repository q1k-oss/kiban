"use client";
import { Editor } from "@tiptap/core";
import { useRef, useState } from "react";

import { AppIcon } from "../../../app-icon";
import { Button } from "../../../button";
import { Input } from "../../../input";
import {
  activeButtonClass,
  baseButtonClass,
  hoverButtonClass,
  normalizeUrl,
} from "../utils";
import { useDropdownClose } from "../use-dropdown-close";

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
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);

  const close = () => {
    setUrl("");
    setError(false);
    if (isOpen) onToggle();
  };

  useDropdownClose(wrapperRef, isOpen, close);

  const handleAddLink = () => {
    const validUrl = url ? normalizeUrl(url.trim()) : null;
    if (validUrl) {
      editor.chain().focus().setLink({ href: validUrl }).run();
      close();
    } else {
      setError(true);
    }
  };

  const handleRemoveLink = () => {
    editor.chain().focus().unsetLink().run();
    if (isOpen) onToggle();
  };

  const isLinkActive = editor.isActive("link");

  return (
    <div className="relative" ref={wrapperRef}>
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
        <div className="absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg p-2 flex items-center gap-2 z-20">
          <Input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleAddLink()}
            className={`w-48 text-sm ${error ? "border-error-border-2" : ""}`}
            autoFocus
            aria-label="Link URL"
            aria-invalid={error}
          />
          <Button
            onClick={handleAddLink}
            className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm hover:bg-primary/90"
          >
            Add
          </Button>
          <Button
            onClick={close}
            className={`${baseButtonClass} ${hoverButtonClass}`}
            title="Close"
            aria-label="Close link popover"
          >
            <AppIcon iconName="x" size={14} />
          </Button>
        </div>
      )}
    </div>
  );
};
