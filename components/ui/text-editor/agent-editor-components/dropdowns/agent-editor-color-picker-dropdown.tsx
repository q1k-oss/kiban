"use client";
import { Editor } from "@tiptap/core";
import { useRef } from "react";

import { AppIcon } from "../../../app-icon";
import { Button } from "../../../button";
import { useTextEditorConfig } from "../../context/editor-config-context";
import { activeButtonClass, baseButtonClass, hoverButtonClass } from "../utils";
import { useDropdownClose } from "../use-dropdown-close";

interface ColorPickerDropdownProps {
  editor: Editor;
  isOpen: boolean;
  onToggle: () => void;
}

export const ColorPickerDropdown = ({
  editor,
  isOpen,
  onToggle,
}: ColorPickerDropdownProps) => {
  const { colors } = useTextEditorConfig();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useDropdownClose(wrapperRef, isOpen, onToggle);

  return (
    <div className="relative" ref={wrapperRef}>
      <Button
        onClick={onToggle}
        className={`${baseButtonClass} ${isOpen ? activeButtonClass : hoverButtonClass}`}
        title="Text Color"
        aria-label="Text Color"
        aria-expanded={isOpen}
      >
        <AppIcon iconName="palette" size={16} />
      </Button>
      {isOpen && (
        <div className="absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg p-2 flex flex-wrap gap-1 w-40 z-20">
          {colors.map((color) => (
            <Button
              key={color}
              onClick={() => {
                editor.chain().focus().setMark("textStyle", { color }).run();
                onToggle();
              }}
              className="w-6 h-6 rounded-full border border-border-3 hover:scale-110 transition-transform bg-transparent"
              style={{ backgroundColor: color }}
              title={color}
              aria-label={`Set color to ${color}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
