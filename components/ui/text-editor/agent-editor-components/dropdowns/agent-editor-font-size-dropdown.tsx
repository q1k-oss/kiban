"use client";
import { Editor } from "@tiptap/core";
import React from "react";



import { AppIcon } from "../../../app-icon";
import { Button } from "../../../button";
import { useTextEditorConfig } from "../../context/editor-config-context";
import { activeButtonClass, baseButtonClass, hoverButtonClass } from "../utils";

interface FontSizeDropdownProps {
  editor: Editor;
  isOpen: boolean;
  onToggle: () => void;
}

export const FontSizeDropdown = ({
  editor,
  isOpen,
  onToggle,
}: FontSizeDropdownProps) => {
  
  // Get custom font sizes from context
  const { fontSizes } = useTextEditorConfig();

  return (
    <div className="relative">
      <Button
        onClick={onToggle}
        className={`${baseButtonClass}, ${isOpen ? activeButtonClass : hoverButtonClass}`}
        title="Font Size"
        aria-label="Font Size"
        aria-expanded={isOpen}
      >
        <AppIcon iconName="type" size={16} />
      </Button>
      {isOpen && (
        <div className="absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg  min-w-[120px] z-20">
          {fontSizes.map(({ value, label }) => (
            <div
              key={value}
              onClick={() => {
                editor
                  .chain()
                  .focus()
                  .setMark("textStyle", { fontSize: value })
                  .run();
                onToggle();
              }}
              className="w-40 px-3 py-2 text-left text-xs hover:bg-primary-foreground/10 transition-colors bg-transparent text-primary-text flex items-center justify-between"
              title={label}
            >
              <span>{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
