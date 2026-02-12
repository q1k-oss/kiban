"use client";
import Color from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useRef } from "react";

import { TopToolbar } from "./agent-editor-components/top-toolbar";
import { uploadAndInsertImage } from "./agent-editor-components/utils";
import { TextEditorConfigProvider } from "./context/editor-config-context";
import { HeadingWithAnchor } from "./extensions/heading-with-anchor";
import { ResponsiveImage } from "./extensions/responsive-image";
import { BubbleFormatMenu } from "./notion-editor-components/bubble-format-menu";
import { editorStyles as defaultEditorStyles } from "./notion-editor-components/editor-styles";
import { FloatingCommandMenu } from "./notion-editor-components/floating-command-menu";
import { FontSize } from "./notion-editor-components/font-size";
import type {
  IBubbleMenu,
  IDropdownButton,
  IFloatMenu,
  IFontSizeOption,
  IImageUploadResult,
  ImageUploadHandler,
  ITextEditorProps,
  ITextEditorVariant,
  IToolbarButton,
  ITopToolbarItem,
} from "./types/type";

const TextEditor = ({
  value = "<h1>Untitled Document</h1>",
  onChange,
  wrapperClassName = "",
  editorClassName = "",
  headingLevels = [1, 2, 3],
  placeholder = "start typing...",
  linkClassName = "text-blue-500 underline hover:text-blue-600",
  highlightMulticolor = false,
  textAlignTypes = ["heading", "paragraph"],
  variant = "AGENT_EDITOR",
  topToolbar,
  bubbleMenu,
  floatingMenu,
  bubbleMenuOptions,
  floatingMenuOptions,
  fontSizes,
  colors,
  highlightColors,
  enableHeadingAnchors = false,
  anchorLinkClassName = "heading-anchor",
  editorStyles = "",
  onImageUpload,
  topToolbarClassName,
}: ITextEditorProps) => {
  const styles = defaultEditorStyles + (editorStyles ?? "");
  const onImageUploadRef = useRef(onImageUpload);
  onImageUploadRef.current = onImageUpload;

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      enableHeadingAnchors
        ? HeadingWithAnchor.configure({
            levels: headingLevels,
            anchorLinkClassName: anchorLinkClassName,
          })
        : Heading.configure({
            levels: headingLevels,
          }),
      Placeholder.configure({
        placeholder: placeholder,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: linkClassName,
        },
      }),
      Highlight.configure({
        multicolor: highlightMulticolor,
      }),
      TextAlign.configure({
        types: textAlignTypes,
      }),
      Underline,
      FontSize,
      Color,
      ResponsiveImage.configure({
        inline: true,
        allowBase64: true,
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: `prose prose-lg max-w-none focus:outline-none ${editorClassName}`,
      },
      handleDOMEvents: {
        dragover: (_view, event) => {
          if (
            onImageUploadRef.current &&
            (event as DragEvent).dataTransfer?.types?.includes("Files")
          ) {
            event.preventDefault();
            (event as DragEvent).dataTransfer!.dropEffect = "copy";
          }
          return false;
        },
      },
      handleDrop(view, event, _slice, moved) {
        if (moved) return false;

        const uploadHandler = onImageUploadRef.current;
        if (!uploadHandler) return false;

        const files = event.dataTransfer?.files;
        if (!files?.length) return false;

        const file = files[0];
        if (!file.type.startsWith("image/")) return false;

        event.preventDefault();

        const coords = view.posAtCoords({
          left: event.clientX,
          top: event.clientY,
        });

        if (!coords) return true;

        uploadAndInsertImage(view, coords.pos, file, uploadHandler);
        return true;
      },
      handlePaste(view, event) {
        const uploadHandler = onImageUploadRef.current;
        if (!uploadHandler) return false;

        const items = event.clipboardData?.items;
        if (!items) return false;

        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.type.startsWith("image/")) {
            const file = item.getAsFile();
            if (!file) continue;

            event.preventDefault();
            uploadAndInsertImage(view, null, file, uploadHandler);
            return true;
          }
        }

        return false;
      },
    },
    onUpdate({ editor }) {
      onChange?.({
        html: editor.getHTML(),
        json: editor.getJSON(),
        text: editor.getText(),
      });
    },

    immediatelyRender: false,
  });

  if (!editor) return null;

  const editorConfig = {
    fontSizes,
    colors,
    highlightColors,
    onImageUpload,
  };

  if (variant === "AGENT_EDITOR") {
    return (
      <TextEditorConfigProvider config={editorConfig}>
        <div className={`bg-transparent ${wrapperClassName}`}>
          <style>{styles}</style>
          {topToolbar ? topToolbar(editor) : <TopToolbar editor={editor} className={topToolbarClassName} />}

          <EditorContent editor={editor} />
        </div>
      </TextEditorConfigProvider>
    );
  }

  return (
    <TextEditorConfigProvider config={editorConfig}>
      <div className={`bg-transparent ${wrapperClassName}`}>
        <style>{styles}</style>

        <FloatingMenu
          editor={editor}
          tippyOptions={{
            duration: 100,
            placement: "bottom-start",
            offset: [0, 8],
            ...floatingMenuOptions,
          }}
        >
          {floatingMenu ? (
            floatingMenu(editor)
          ) : (
            <FloatingCommandMenu editor={editor} />
          )}
        </FloatingMenu>

        <BubbleMenu
          editor={editor}
          tippyOptions={{
            duration: 100,
            placement: "top",
            ...bubbleMenuOptions,
          }}
        >
          {bubbleMenu ? (
            bubbleMenu(editor)
          ) : (
            <BubbleFormatMenu editor={editor} />
          )}
        </BubbleMenu>

        <EditorContent editor={editor} />
      </div>
    </TextEditorConfigProvider>
  );
};

export { TextEditor };
export type {
  IBubbleMenu,
  IDropdownButton,
  IFloatMenu,
  IFontSizeOption,
  IImageUploadResult,
  ImageUploadHandler,
  ITextEditorProps,
  ITextEditorVariant,
  IToolbarButton,
  ITopToolbarItem,
};
