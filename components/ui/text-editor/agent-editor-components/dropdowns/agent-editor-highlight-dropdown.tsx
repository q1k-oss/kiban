"use client";
import { Editor } from "@tiptap/core";
import React from "react";



import { AppIcon } from "../../../app-icon";
import { Button } from "../../../button";
import { useTextEditorConfig } from "../../context/editor-config-context";
import { baseButtonClass, activeButtonClass, hoverButtonClass } from "../utils";

interface HighlightDropdownProps {
  editor: Editor;
  isOpen: boolean;
  onToggle: () => void;
}

export const HighlightDropdown = ({
  editor,
  isOpen,
  onToggle,
}: HighlightDropdownProps) => {
  // Get custom highlight colors from context
  const { highlightColors } = useTextEditorConfig();
  const isActive = editor.isActive("highlight");

  return (
    <div className="relative">
      <Button
        onClick={onToggle}
        className={`${baseButtonClass}, ${isOpen ? activeButtonClass : hoverButtonClass}`}
        title="Highlight"
        aria-label="Highlight"
        aria-expanded={isOpen}
        aria-pressed={isActive}
      >
        <AppIcon iconName="highlighter" size={16} />
      </Button>
      {isOpen && (
        <div className="absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg p-2 flex flex-wrap gap-1 w-40 z-20">
          {highlightColors.map(({ color, label }) => (
            <Button
              key={color}
              onClick={() => {
                if (color === "transparent") {
                  editor.chain().focus().unsetHighlight().run();
                } else {
                  editor.chain().focus().setHighlight({ color }).run();
                }
                onToggle();
              }}
              className="w-6 h-6 rounded border border-border-3 hover:scale-110 transition-transform bg-transparent"
              style={{ backgroundColor: color }}
              title={label}
              aria-label={`Highlight ${label}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
