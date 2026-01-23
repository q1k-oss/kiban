"use client";
import { Editor } from "@tiptap/core";

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
  const { fontSizes } = useTextEditorConfig();

  return (
    <div className="relative">
      <Button
        onClick={onToggle}
        className={`${baseButtonClass} ${isOpen ? activeButtonClass : hoverButtonClass}`}
        title="Font Size"
        aria-label="Font Size"
        aria-expanded={isOpen}
      >
        <AppIcon iconName="type" size={16} />
      </Button>
      {isOpen && (
        <div className="absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg min-w-32 z-20">
          {fontSizes.map(({ value, label }) => (
            <Button
              key={value}
              onClick={() => {
                editor
                  .chain()
                  .focus()
                  .setMark("textStyle", { fontSize: value })
                  .run();
                onToggle();
              }}
              className="w-full px-3 py-2 text-left text-xs hover:bg-primary-foreground/10 transition-colors bg-transparent text-primary-text flex items-center justify-between cursor-pointer"
              title={label}
              aria-label={`Set font size to ${label}`}
            >
              <span>{label}</span>
              <span className="text-tertiary-text">{value}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
