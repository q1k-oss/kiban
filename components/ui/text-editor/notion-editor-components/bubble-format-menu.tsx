import { Editor } from "@tiptap/core";
import { useState } from "react";

import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { NOTION_BUBBLE_FORMAT_MENU_TOOLBAR_CONFIG } from "../constants";

import { TextEditorFontSizePicker } from "./text-editor-font-size-picker";

interface BubbleFormatMenuProps {
  editor: Editor;
}

export const BubbleFormatMenu = ({ editor }: BubbleFormatMenuProps) => {
  const [showFontSizePicker, setShowFontSizePicker] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center gap-1 bg-agent-card-fill rounded-lg p-1.5 shadow-2xl border border-border-3">
        {NOTION_BUBBLE_FORMAT_MENU_TOOLBAR_CONFIG.map((format, idx) => {
          const isActive = format.active?.(editor)
          return (
            <Button
              key={idx}
              onClick={() => format.action(editor)}
              title={format.label}
              className={`p-2 rounded transition-colors text-tertiary-text cursor-pointer bg-transparent ${
                isActive
                  ? "bg-primary-foreground/10 text-primary-text"
                  : "hover:text-primary-text hover:bg-primary-foreground/10"
              }`}
            >
              <AppIcon iconName={format.icon} size={16} />
            </Button>
          );
        })}

        <Button
          onClick={() => {
            setShowFontSizePicker(!showFontSizePicker);
          }}
          title="Font Size"
          className={`p-2 rounded transition-colors flex items-center gap-1 text-tertiary-text cursor-pointer bg-transparent ${
            showFontSizePicker
              ? "bg-primary-foreground/10 text-primary-text"
              : "hover:text-primary-text hover:bg-primary-foreground/10"
          }`}
        >
          <AppIcon iconName="type" size={16} />
          <AppIcon iconName="chevron-down" size={12} />
        </Button>
      </div>

      {showFontSizePicker && (
        <TextEditorFontSizePicker
          editor={editor}
          onClose={() => setShowFontSizePicker(false)}
        />
      )}
    </div>
  );
};
