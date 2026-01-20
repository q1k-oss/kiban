import { Editor } from "@tiptap/core";
import { Level } from "@tiptap/extension-heading";
import React from "react";
import { ClassNameValue } from "tailwind-merge";
import type { Props as TippyProps } from "tippy.js";

export type ITextEditorVariant = "AGENT_EDITOR" | "NOTION_EDITOR";

export interface ITextEditorProps {
  value?: string;
  onChange?: (content: { html: string; json: unknown; text: string }) => void;
  className?: string;
  editorClassName?: ClassNameValue;
  headingLevels?: Level[];
  placeholder?: string;
  linkClassName?: string;
  highlightMulticolor?: boolean;
  textAlignTypes?: ("heading" | "paragraph" | string)[];
  variant?: ITextEditorVariant;
  topToolbar?: (editor: Editor) => React.ReactNode;
  bubbleMenu?: (editor: Editor) => React.ReactNode;
  floatingMenu?: (editor: Editor) => React.ReactNode;
  bubbleMenuOptions?: Partial<TippyProps>;
  floatingMenuOptions?: Partial<TippyProps>;
  fontSizes?: IFontSizeOption[];
  colors?: string[];
  highlightColors?: { color: string; label: string }[];
   enableHeadingAnchors?: boolean;
  anchorLinkClassName?: string;
}

export interface IToolbarButton {
  icon: string;
  title: string;
  action: (editor: Editor) => void;
  isActive?: (editor: Editor) => boolean;
  disabled?: (editor: Editor) => boolean;
}

export interface IDropdownButton {
  icon: string;
  title: string;
  type: "color-picker" | "link" | "image" | "highlight" | "font-size";
  isActive?: (editor: Editor) => boolean;
}

export type ITopToolbarItem = IToolbarButton | IDropdownButton;

export interface IFontSizeOption {
  value: string;
  label: string;
}

export interface IFloatMenu {
  icon: string;
  label: string;
  description: string;
  action: (editor: Editor) => void;
  keywords: string[];
}
export interface IBubbleMenu {
  icon: string;
  label: string;
  action: (editor: Editor) => void;
  active?: (editor: Editor) => boolean;
}
