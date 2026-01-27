"use client";
import { Editor } from "@tiptap/core";

import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { IToolbarButton as ToolbarButtonType } from "../types/type";

import { activeButtonClass, baseButtonClass, hoverButtonClass } from "./utils";

interface ToolbarButtonProps {
  item: ToolbarButtonType;
  editor: Editor;
  onClick?: () => void;
}

export const ToolbarButton = ({ item, editor, onClick }: ToolbarButtonProps) => {
  const isActive = item.isActive?.(editor) ?? false;
  const isDisabled = item.disabled?.(editor) ?? false;

  return (
    <Button
      onClick={() => (onClick ? onClick() : item.action(editor))}
      disabled={isDisabled}
      className={`${baseButtonClass} ${isActive ? activeButtonClass : hoverButtonClass}`}
      title={item.title}
      aria-label={item.title}
      aria-pressed={isActive}
    >
      <AppIcon iconName={item.icon} size={16} />
    </Button>
  );
};