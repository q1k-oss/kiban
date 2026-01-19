"use client";
import Color from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { editorStyles } from "./editorStyles";
import { FontSize } from './FontSize'
import { InlineFormatMenu } from "./InlineFormatMenu";
import { SlashCommandMenu } from "./SlashCommandMenu";


const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "Heading";
          }
          return "Start With Heading";
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-500 underline hover:text-blue-600",
        },
      }),
      Highlight.configure({
        multicolor: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      TextStyle,
      FontSize,
      Color,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
    ],
    content: "<h1>Untitled Document</h1><p></p>",
    editorProps: {
      attributes: {
        class: "prose prose-lg max-w-none focus:outline-none",
      },
    },
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className="min-h-1/2 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <style>{editorStyles}</style>

        <FloatingMenu
          editor={editor}
          tippyOptions={{
            duration: 100,
            placement: "bottom-start",
            offset: [0, 8],
          }}
        >
          <SlashCommandMenu editor={editor} />
        </FloatingMenu>

        <BubbleMenu
          editor={editor}
          tippyOptions={{
            duration: 100,
            placement: "top",
          }}
        >
          <InlineFormatMenu editor={editor} />
        </BubbleMenu>

        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export {TextEditor}