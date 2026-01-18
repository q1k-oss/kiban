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
import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Minus,
  AlignLeft,
  Link as LinkIcon,
  Highlighter,
  Underline as UnderlineIcon,
  Type,
  ImageIcon,
  Smile,
  MoreHorizontal,
  Palette,
  ChevronDown,
} from "lucide-react";
import React, { useState } from "react";

// Custom FontSize extension
const FontSize = TextStyle.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      fontSize: {
        default: null,
        parseHTML: (element) => element.style.fontSize,
        renderHTML: (attributes) => {
          if (!attributes.fontSize) {
            return {};
          }
          return {
            style: `font-size: ${attributes.fontSize}`,
          };
        },
      },
    };
  },
  addCommands() {
    return {
      ...this.parent?.(),
      setFontSize:
        (fontSize) =>
        ({ commands }) => {
          return commands.setMark("textStyle", { fontSize });
        },
      unsetFontSize:
        () =>
        ({ commands }) => {
          return commands.setMark("textStyle", { fontSize: null });
        },
    };
  },
});

const COLORS = [
  { name: "Default", value: "#000000" },
  { name: "Gray", value: "#6B7280" },
  { name: "Red", value: "#EF4444" },
  { name: "Orange", value: "#F97316" },
  { name: "Yellow", value: "#EAB308" },
  { name: "Green", value: "#22C55E" },
  { name: "Blue", value: "#3B82F6" },
  { name: "Purple", value: "#A855F7" },
  { name: "Pink", value: "#EC4899" },
];

const FONT_SIZES = [
  { label: "Small", value: "12px" },
  { label: "Normal", value: "16px" },
  { label: "Medium", value: "18px" },
  { label: "Large", value: "24px" },
  { label: "Extra Large", value: "32px" },
  { label: "Huge", value: "48px" },
];

const SlashCommandMenu = ({ editor }) => {
  const commands = [
    {
      icon: <AlignLeft size={18} />,
      label: "Text",
      description: "Just start writing with plain text",
      action: () => editor.chain().focus().setParagraph().run(),
      keywords: ["text", "paragraph", "p"],
    },
    {
      icon: <Heading1 size={18} />,
      label: "Heading 1",
      description: "Big section heading",
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      keywords: ["h1", "heading", "title"],
    },
    {
      icon: <Heading2 size={18} />,
      label: "Heading 2",
      description: "Medium section heading",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      keywords: ["h2", "heading", "subtitle"],
    },
    {
      icon: <Heading3 size={18} />,
      label: "Heading 3",
      description: "Small section heading",
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      keywords: ["h3", "heading", "subheading"],
    },
    {
      icon: <List size={18} />,
      label: "Bullet List",
      description: "Create a simple bullet list",
      action: () => editor.chain().focus().toggleBulletList().run(),
      keywords: ["ul", "list", "bullet", "unordered"],
    },
    {
      icon: <ListOrdered size={18} />,
      label: "Numbered List",
      description: "Create a list with numbering",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      keywords: ["ol", "list", "number", "ordered"],
    },
    {
      icon: <Quote size={18} />,
      label: "Quote",
      description: "Capture a quote",
      action: () => editor.chain().focus().toggleBlockquote().run(),
      keywords: ["quote", "blockquote", "citation"],
    },
    {
      icon: <Code size={18} />,
      label: "Code Block",
      description: "Display code with syntax",
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      keywords: ["code", "codeblock", "programming"],
    },
    {
      icon: <Minus size={18} />,
      label: "Divider",
      description: "Visually divide blocks",
      action: () => editor.chain().focus().setHorizontalRule().run(),
      keywords: ["hr", "divider", "separator", "line"],
    },
    {
      icon: <ImageIcon size={18} />,
      label: "Image",
      description: "Upload or embed with a link",
      action: () => {
        const url = prompt("Enter image URL:");
        if (url) {
          editor.chain().focus().setImage({ src: url }).run();
        }
      },
      keywords: ["image", "img", "photo", "picture"],
    },
  ];

  return (
    <div className="bg-agent-card-fill border border-border-3 rounded-lg shadow-2xl w-80 max-h-96 overflow-y-auto">
      <div className="p-1">
        {commands.map((cmd, idx) => (
          <button
            key={idx}
            onClick={cmd.action}
            className="w-full flex items-start gap-3 px-3 py-2.5 text-sm text-left rounded transition-colors group cursor-pointer duration-100 hover:bg-primary-foreground/10"
          >
            <span className="mt-0.5 text-icon-disabled-fill group-hover:text-primary-text group duration-100">
              {cmd.icon}
            </span>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-secondary-text group-hover:text-primary-text duration-100">
                {cmd.label}
              </div>
              <div className="text-xs text-disabled-text group-hover:text-secondary-text truncate duration-100">
                {cmd.description}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const InlineFormatMenu = ({ editor }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const [showFontSizePicker, setShowFontSizePicker] = useState(false);

  const formats = [
    {
      icon: <Bold size={16} />,
      action: () => editor.chain().focus().toggleBold().run(),
      active: editor.isActive("bold"),
      label: "Bold",
    },
    {
      icon: <Italic size={16} />,
      action: () => editor.chain().focus().toggleItalic().run(),
      active: editor.isActive("italic"),
      label: "Italic",
    },
    {
      icon: <UnderlineIcon size={16} />,
      action: () => editor.chain().focus().toggleUnderline().run(),
      active: editor.isActive("underline"),
      label: "Underline",
    },
    {
      icon: <Strikethrough size={16} />,
      action: () => editor.chain().focus().toggleStrike().run(),
      active: editor.isActive("strike"),
      label: "Strikethrough",
    },
    {
      icon: <Code size={16} />,
      action: () => editor.chain().focus().toggleCode().run(),
      active: editor.isActive("code"),
      label: "Code",
    },
    {
      icon: <LinkIcon size={16} />,
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
      icon: <Highlighter size={16} />,
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
            setShowColorPicker(false);
          }}
          title="Font Size"
          className={`p-2 rounded transition-colors flex items-center gap-1 text-tertiary-text cursor-pointer ${
            showFontSizePicker
              ? "bg-primary-foreground/10 text-primary-text"
              : "hover:text-primary-text hover:bg-primary-foreground/10"
          }`}
        >
          <Type size={16} />
          <ChevronDown size={12} />
        </button>

        <button
          onClick={() => {
            setShowColorPicker(!showColorPicker);
            setShowFontSizePicker(false);
          }}
          title="Text Color"
          className={`p-2 rounded transition-colors text-tertiary-text cursor-pointer${
            showColorPicker
              ? "bg-primary-foreground/10 text-primary-text"
              : "hover:text-primary-text hover:bg-primary-foreground/10"
          }`}
        >
          <Palette size={16} />
        </button>
      </div>

      {showFontSizePicker && (
        <div className="absolute top-full w-full mt-2 bg-agent-card-fill border border-border-3  rounded-lg shadow-xl p-2 z-50 min-w-[160px]">
          <div className="text-sm font-medium text-primary-text mb-2 px-2">
            Font Size
          </div>
          <div className="space-y-1">
            {FONT_SIZES.map((size) => (
              <button
                key={size.value}
                onClick={() => {
                  editor.chain().focus().setFontSize(size.value).run();
                  setShowFontSizePicker(false);
                }}
                className="w-full px-3 py-2 text-left rounded  transition-colors text-xs text-tertiary-text hover:text-primary-text hover:bg-primary-foreground/10 font-light flex items-center justify-between cursor-pointer duration-100 "
              >
                <span className="font-medium">{size.label}</span>
                <span>({size.value})</span>
              </button>
            ))}
            <div className="border-t border-button-border2 my-1" />
            <button
              onClick={() => {
                editor.chain().focus().unsetFontSize().run();
                setShowFontSizePicker(false);
              }}
              className="w-full px-3 py-2 text-left rounded  transition-colors text-sm text-secondary-text hover:text-primary-text hover:bg-primary-foreground/10 cursor-pointer duration-100 "
            >
              Reset to default
            </button>
          </div>
        </div>
      )}

      {showColorPicker && (
        <div className="absolute top-full w-full mt-2 bg-agent-card-fill border border-border-3  rounded-lg shadow-xl p-3 z-50">
          <div className="text-sm font-medium text-primary-text mb-2">
            Text Color
          </div>
          <div className="grid grid-cols-3 gap-2">
            {COLORS.map((color) => (
              <button
                key={color.value}
                onClick={() => {
                  editor.chain().focus().setColor(color.value).run();
                  setShowColorPicker(false);
                }}
                className="group flex flex-col items-center gap-1 p-2 rounded hover:bg-primary-foreground/10 transition-colors duration-100 cursor-pointer"
              >
                <div
                  className="w-6 h-6 rounded-full border-2 border-button-border-disabled group-hover:border-button-border duration-100"
                  style={{ backgroundColor: color.value }}
                />
                <span className="text-xs text-tertiary-text group-hover:text-primary-text duration-100">
                  {color.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

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
          return "Your Heading";
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
        <style>{`
          .ProseMirror {
            min-height: 400px;
          }
          
          .ProseMirror > * + * {
            margin-top: 0.75em;
          }

          .ProseMirror h1 {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 0.5em;
            color: var(--color-primary-text);
          }

          .ProseMirror h2 {
            font-size: 1.875rem;
            font-weight: 600;
            line-height: 1.3;
            margin-top: 1.5em;
            color: var(--color-primary-text);
          }

          .ProseMirror h3 {
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 1.4;
            margin-top: 1.5em;
            color: var(--color-primary-text);
          }

          .ProseMirror p {
            font-size: 1rem;
            line-height: 1.75;
            color: var(--color-secondary-text);
          }

          .ProseMirror ul,
          .ProseMirror ol {
            padding-left: 1.5rem;
            color: var(--color-secondary-text);
          }

          .ProseMirror ul li {
            list-style-type: disc;
            padding-left: 0.25rem;
          }

          .ProseMirror ol li {
            list-style-type: decimal;
            padding-left: 0.25rem;
          }

          .ProseMirror li {
            margin-top: 0.5em;
            line-height: 1.75;
          }

          .ProseMirror blockquote {
            border-left: 2px solid var(--color-stroke);
            padding-left: 1rem;
            font-style: italic;
            color: var(--color-primary-text);
            margin: 1.5em 0;
          }

          .ProseMirror code {
            color: var(--color-secondary-text);
            color: #ef4444;
            padding: 0.2em 0.4em;
            border-radius: 0.25rem;
            font-size: 0.875em;
            font-family: 'Monaco', 'Courier New', monospace;
          }

          .ProseMirror pre {
            background-color: #1f2937;
            color: #f9fafb;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 0.875rem;
            line-height: 1.5;
            margin: 1.5em 0;
          }

          .ProseMirror pre code {
            background: none;
            color: inherit;
            padding: 0;
            font-size: inherit;
          }

          .ProseMirror hr {
            border: none;
            border-top: 2px solid var(--color-border);
            margin: 2rem 0;
          }

          .ProseMirror img {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            margin: 1em 0;
          }

          .ProseMirror mark {
            background-color: #fef3c7;
            padding: 0.125em 0.25em;
            border-radius: 0.125rem;
          }

          .ProseMirror p.is-editor-empty:first-child::before {
            color: #adb5bd;
            content: attr(data-placeholder);
            float: left;
            height: 0;
            pointer-events: none;
          }

          .ProseMirror h1.is-empty::before,
          .ProseMirror h2.is-empty::before,
          .ProseMirror h3.is-empty::before {
            color: #adb5bd;
            content: attr(data-placeholder);
            float: left;
            height: 0;
            pointer-events: none;
          }

          .ProseMirror:focus {
            outline: none;
          }

          .ProseMirror a {
            color: #3b82f6;
            text-decoration: underline;
            cursor: pointer;
          }

          .ProseMirror a:hover {
            color: #2563eb;
          }
        `}</style>

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

export { TextEditor };
