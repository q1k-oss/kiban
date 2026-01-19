import { Editor } from "@tiptap/react";
import { useState } from "react";

import { AppIcon } from "../app-icon";

import { FontSizePicker } from "./FontSizePicker";

interface InlineFormatMenuProps {
  editor: Editor;
}

export const InlineFormatMenu = ({ editor }: InlineFormatMenuProps) => {
  const [showFontSizePicker, setShowFontSizePicker] = useState(false);

  const formats = [
    {
      icon: <AppIcon iconName="bold" size={16} />,
      action: () => editor.chain().focus().toggleBold().run(),
      active: editor.isActive("bold"),
      label: "Bold",
    },
    {
      icon: <AppIcon iconName="italic" size={16} />,
      action: () => editor.chain().focus().toggleItalic().run(),
      active: editor.isActive("italic"),
      label: "Italic",
    },
    {
      icon: <AppIcon iconName="underline" size={16} />,
      action: () => editor.chain().focus().toggleUnderline().run(),
      active: editor.isActive("underline"),
      label: "Underline",
    },
    {
      icon: <AppIcon iconName="strikethrough" size={16} />,
      action: () => editor.chain().focus().toggleStrike().run(),
      active: editor.isActive("strike"),
      label: "Strikethrough",
    },
    {
      icon: <AppIcon iconName="code" size={16} />,
      action: () => editor.chain().focus().toggleCode().run(),
      active: editor.isActive("code"),
      label: "Code",
    },
    {
      icon: <AppIcon iconName="link" size={16} />,
      action: () => {
        const url = prompt("Enter URL:");
        if (url) {
          editor.chain().focus().setLink({ href: url }).run();
        }
      },
      active: editor.isActive("link"),
      label: "Link",
    },
    {
      icon: <AppIcon iconName="highlighter" size={16} />,
      action: () => editor.chain().focus().toggleHighlight().run(),
      active: editor.isActive("highlight"),
      label: "Highlight",
    },
  ];

  return (
    <div className="relative">
      <div className="flex items-center gap-1 bg-agent-card-fill rounded-lg p-1.5 shadow-2xl border border-border-3">
        {formats.map((format, idx) => (
          <button
            key={idx}
            onClick={format.action}
            title={format.label}
            className={`p-2 rounded transition-colors text-tertiary-text cursor-pointer ${
              format.active
                ? "bg-primary-foreground/10 text-primary-text"
                : "hover:text-primary-text hover:bg-primary-foreground/10"
            }`}
          >
            {format.icon}
          </button>
        ))}

        <button
          onClick={() => {
            setShowFontSizePicker(!showFontSizePicker);
          }}
          title="Font Size"
          className={`p-2 rounded transition-colors flex items-center gap-1 text-tertiary-text cursor-pointer ${
            showFontSizePicker
              ? "bg-primary-foreground/10 text-primary-text"
              : "hover:text-primary-text hover:bg-primary-foreground/10"
          }`}
        >
          <AppIcon iconName="type" size={16} />
          <AppIcon iconName="chevron-down" size={12} />
        </button>
      </div>

      {showFontSizePicker && (
        <FontSizePicker
          editor={editor}
          onClose={() => setShowFontSizePicker(false)}
        />
      )}
    </div>
  );
};
