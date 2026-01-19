import { Editor } from "@tiptap/react";
import {
  AlignLeft,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Minus,
  ImageIcon,
} from "lucide-react";

interface SlashCommandMenuProps {
  editor: Editor;
}

export const SlashCommandMenu = ({ editor }: SlashCommandMenuProps) => {
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