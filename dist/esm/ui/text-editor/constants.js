// toolbar/constants.ts
import { normalizeUrl, validateImageUrl, } from "./agent-editor-components/utils";
export const COLORS = [
    "#000000",
    "#ef4444",
    "#22c55e",
    "#3b82f6",
    "#eab308",
    "#a855f7",
    "#06b6d4",
    "#ffffff",
];
export const HIGHLIGHT_COLORS = [
    { color: "#fef08a", label: "Yellow" },
    { color: "#fed7aa", label: "Orange" },
    { color: "#fecaca", label: "Red" },
    { color: "#bfdbfe", label: "Blue" },
    { color: "#bbf7d0", label: "Green" },
    { color: "#e9d5ff", label: "Purple" },
    { color: "#e0e7ff", label: "Indigo" },
    { color: "transparent", label: "None" },
];
export const FONT_SIZES = [
    { value: "12px", label: "Small" },
    { value: "16px", label: "Normal" },
    { value: "18px", label: "Medium" },
    { value: "24px", label: "Large" },
    { value: "32px", label: "X-Large" },
    { value: "48px", label: "XX-Large" },
];
export const AGENT_TOOLBAR_CONFIG = [
    // Undo/Redo
    [
        {
            icon: "undo",
            title: "Undo",
            action: (e) => e.chain().focus().undo().run(),
            disabled: (e) => !e.can().undo(),
        },
        {
            icon: "redo",
            title: "Redo",
            action: (e) => e.chain().focus().redo().run(),
            disabled: (e) => !e.can().redo(),
        },
    ],
    // Headings
    [
        { icon: "type", title: "Font Size", type: "font-size" },
        {
            icon: "heading-1",
            title: "Heading 1",
            action: (e) => e.chain().focus().toggleHeading({ level: 1 }).run(),
            isActive: (e) => e.isActive("heading", { level: 1 }),
        },
        {
            icon: "heading-2",
            title: "Heading 2",
            action: (e) => e.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: (e) => e.isActive("heading", { level: 2 }),
        },
        {
            icon: "heading-3",
            title: "Heading 3",
            action: (e) => e.chain().focus().toggleHeading({ level: 3 }).run(),
            isActive: (e) => e.isActive("heading", { level: 3 }),
        },
    ],
    // Text Formatting
    [
        {
            icon: "bold",
            title: "Bold",
            action: (e) => e.chain().focus().toggleBold().run(),
            isActive: (e) => e.isActive("bold"),
        },
        {
            icon: "italic",
            title: "Italic",
            action: (e) => e.chain().focus().toggleItalic().run(),
            isActive: (e) => e.isActive("italic"),
        },
        {
            icon: "underline",
            title: "Underline",
            action: (e) => e.chain().focus().toggleUnderline().run(),
            isActive: (e) => e.isActive("underline"),
        },
        {
            icon: "strikethrough",
            title: "Strikethrough",
            action: (e) => e.chain().focus().toggleStrike().run(),
            isActive: (e) => e.isActive("strike"),
        },
        {
            icon: "code",
            title: "Code",
            action: (e) => e.chain().focus().toggleCode().run(),
            isActive: (e) => e.isActive("code"),
        },
    ],
    // Color & Highlight
    [
        { icon: "palette", title: "Text Color", type: "color-picker" },
        {
            icon: "highlighter",
            title: "Highlight",
            type: "highlight",
            isActive: (e) => e.isActive("highlight"),
        },
    ],
    // Alignment
    [
        {
            icon: "align-left",
            title: "Align Left",
            action: (e) => e.chain().focus().setTextAlign("left").run(),
            isActive: (e) => e.isActive({ textAlign: "left" }),
        },
        {
            icon: "align-center",
            title: "Align Center",
            action: (e) => e.chain().focus().setTextAlign("center").run(),
            isActive: (e) => e.isActive({ textAlign: "center" }),
        },
        {
            icon: "align-right",
            title: "Align Right",
            action: (e) => e.chain().focus().setTextAlign("right").run(),
            isActive: (e) => e.isActive({ textAlign: "right" }),
        },
    ],
    // Lists
    [
        {
            icon: "list",
            title: "Bullet List",
            action: (e) => e.chain().focus().toggleBulletList().run(),
            isActive: (e) => e.isActive("bulletList"),
        },
        {
            icon: "list-ordered",
            title: "Numbered List",
            action: (e) => e.chain().focus().toggleOrderedList().run(),
            isActive: (e) => e.isActive("orderedList"),
        },
        {
            icon: "quote",
            title: "Quote",
            action: (e) => e.chain().focus().toggleBlockquote().run(),
            isActive: (e) => e.isActive("blockquote"),
        },
        {
            icon: "minus",
            title: "Divider",
            action: (e) => e.chain().focus().setHorizontalRule().run(),
            isActive: (e) => e.isActive("horizontalRule"),
        },
    ],
    // Media
    [
        {
            icon: "link",
            title: "Link",
            type: "link",
            isActive: (e) => e.isActive("link"),
        },
        { icon: "image", title: "Image", type: "image" },
    ],
    // Table
    [
        {
            icon: "table",
            title: "Table",
            type: "table",
            isActive: (e) => e.isActive("table"),
        },
    ],
];
export const NOTION_FLOAT_MENU_TOOLBAR_CONFIG = [
    {
        icon: "align-left",
        label: "Text",
        description: "Just start writing with plain text",
        action: (e) => e.chain().focus().setParagraph().run(),
        keywords: ["text", "paragraph", "p"],
    },
    {
        icon: "heading-1",
        label: "Heading 1",
        description: "Big section heading",
        action: (e) => e.chain().focus().toggleHeading({ level: 1 }).run(),
        keywords: ["h1", "heading", "title"],
    },
    {
        icon: "heading-2",
        label: "Heading 2",
        description: "Medium section heading",
        action: (e) => e.chain().focus().toggleHeading({ level: 2 }).run(),
        keywords: ["h2", "heading", "subtitle"],
    },
    {
        icon: "heading-3",
        label: "Heading 3",
        description: "Small section heading",
        action: (e) => e.chain().focus().toggleHeading({ level: 3 }).run(),
        keywords: ["h3", "heading", "subheading"],
    },
    {
        icon: "list",
        label: "Bullet List",
        description: "Create a simple bullet list",
        action: (e) => e.chain().focus().toggleBulletList().run(),
        keywords: ["ul", "list", "bullet", "unordered"],
    },
    {
        icon: "list-ordered",
        label: "Numbered List",
        description: "Create a list with numbering",
        action: (e) => e.chain().focus().toggleOrderedList().run(),
        keywords: ["ol", "list", "number", "ordered"],
    },
    {
        icon: "quote",
        label: "Quote",
        description: "Capture a quote",
        action: (e) => e.chain().focus().toggleBlockquote().run(),
        keywords: ["quote", "blockquote", "citation"],
    },
    {
        icon: "code",
        label: "Code Block",
        description: "Display code with syntax",
        action: (e) => e.chain().focus().toggleCodeBlock().run(),
        keywords: ["code", "codeblock", "programming"],
    },
    {
        icon: "minus",
        label: "Divider",
        description: "Visually divide blocks",
        action: (e) => e.chain().focus().setHorizontalRule().run(),
        keywords: ["hr", "divider", "separator", "line"],
    },
    {
        icon: "image",
        label: "Image",
        description: "Upload or embed with a link",
        action: (e) => {
            const url = prompt("Enter image URL:");
            const validUrl = url ? validateImageUrl(url) : null;
            if (validUrl) {
                e.chain().focus().setImage({ src: validUrl }).run();
            }
        },
        keywords: ["image", "img", "photo", "picture"],
    },
    {
        icon: "table",
        label: "Table",
        description: "Insert a table with rows and columns",
        action: (e) => e
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run(),
        keywords: ["table", "grid", "spreadsheet", "rows", "columns"],
    },
];
export const NOTION_BUBBLE_FORMAT_MENU_TOOLBAR_CONFIG = [
    {
        icon: "bold",
        action: (e) => e.chain().focus().toggleBold().run(),
        active: (e) => e.isActive("bold"),
        label: "Bold",
    },
    {
        icon: "italic",
        action: (e) => e.chain().focus().toggleItalic().run(),
        active: (e) => e.isActive("italic"),
        label: "Italic",
    },
    {
        icon: "underline",
        action: (e) => e.chain().focus().toggleUnderline().run(),
        active: (e) => e.isActive("underline"),
        label: "Underline",
    },
    {
        icon: "strikethrough",
        action: (e) => e.chain().focus().toggleStrike().run(),
        active: (e) => e.isActive("strike"),
        label: "Strikethrough",
    },
    {
        icon: "code",
        action: (e) => e.chain().focus().toggleCode().run(),
        active: (e) => e.isActive("code"),
        label: "Code",
    },
    {
        icon: "link",
        action: (e) => {
            const url = prompt("Enter URL:");
            const validUrl = url ? normalizeUrl(url.trim()) : null;
            if (validUrl) {
                e.chain().focus().setLink({ href: validUrl }).run();
            }
        },
        active: (e) => e.isActive("link"),
        label: "Link",
    },
    {
        icon: "highlighter",
        action: (e) => e.chain().focus().toggleHighlight().run(),
        active: (e) => e.isActive("highlight"),
        label: "Highlight",
    },
];
