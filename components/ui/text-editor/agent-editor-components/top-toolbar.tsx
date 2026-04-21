"use client";
import { Editor } from "@tiptap/core";
import { Fragment, useState } from "react";

import { AGENT_TOOLBAR_CONFIG } from "../constants";
import { ITopToolbarItem } from "../types/type";

import { ColorPickerDropdown } from "./dropdowns/agent-editor-color-picker-dropdown";
import { FontSizeDropdown } from "./dropdowns/agent-editor-font-size-dropdown";
import { HighlightDropdown } from "./dropdowns/agent-editor-highlight-dropdown";
import { LinkDropdown } from "./dropdowns/agent-editor-link-dropdown";
import { TableDropdown } from "./dropdowns/agent-editor-table-dropdown";
import { ImageButton } from "./image-button";
import { ToolbarButton } from "./top-toolbar-button";
import { ToolbarDivider } from "./top-toolbar-divider";
import { isDropdown } from "./utils";

export const TopToolbar = ({ editor, className }: { editor: Editor; className?: string }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  if (!editor) return null;

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const renderItem = (item: ITopToolbarItem, idx: number) => {
    if (!isDropdown(item)) {
      return <ToolbarButton key={idx} item={item} editor={editor} />;
    }

    // Handle dropdown types
    switch (item.type) {
      case "color-picker":
        return (
          <ColorPickerDropdown
            key={idx}
            editor={editor}
            isOpen={activeDropdown === "color"}
            onToggle={() => toggleDropdown("color")}
          />
        );
      case "highlight":
        return (
          <HighlightDropdown
            key={idx}
            editor={editor}
            isOpen={activeDropdown === "highlight"}
            onToggle={() => toggleDropdown("highlight")}
          />
        );
      case "font-size":
        return (
          <FontSizeDropdown
            key={idx}
            editor={editor}
            isOpen={activeDropdown === "font-size"}
            onToggle={() => toggleDropdown("font-size")}
          />
        );
      case "link":
        return (
          <LinkDropdown
            key={idx}
            editor={editor}
            isOpen={activeDropdown === "link"}
            onToggle={() => toggleDropdown("link")}
          />
        );
      case "image":
        return (
          <ImageButton
            key={idx}
            editor={editor}
            isOpen={activeDropdown === "image"}
            onToggle={() => toggleDropdown("image")}
          />
        );
      case "table":
        return (
          <TableDropdown
            key={idx}
            editor={editor}
            isOpen={activeDropdown === "table"}
            onToggle={() => toggleDropdown("table")}
          />
        );
    }
  };

  return (
    <div className={`border border-border-3 rounded-md bg-agent-card-fill p-2 flex flex-wrap gap-1 gap-y-3 items-center z-10 ${className ?? ""}`}>
      {AGENT_TOOLBAR_CONFIG.map((group, groupIdx) => (
        <Fragment key={groupIdx}>
          <div className="flex gap-1 items-center">
            {group.map((item, itemIdx) => renderItem(item, itemIdx))}
          </div>
          {groupIdx < AGENT_TOOLBAR_CONFIG.length - 1 && <ToolbarDivider />}
        </Fragment>
      ))}
    </div>
  );
};
