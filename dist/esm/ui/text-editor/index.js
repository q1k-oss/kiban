"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Color from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { useEditor, EditorContent, FloatingMenu, BubbleMenu, } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TopToolbar } from "./agent-editor-components/top-toolbar";
import { TextEditorConfigProvider } from "./context/editor-config-context";
import { HeadingWithAnchor } from "./extensions/heading-with-anchor";
import { BubbleFormatMenu } from "./notion-editor-components/bubble-format-menu";
import { editorStyles as defaultEditorStyles } from "./notion-editor-components/editor-styles";
import { FloatingCommandMenu } from "./notion-editor-components/floating-command-menu";
import { FontSize } from "./notion-editor-components/font-size";
const TextEditor = ({ value = "<h1>Untitled Document</h1>", onChange, className = "", editorClassName = "", headingLevels = [1, 2, 3], placeholder = "start typing...", linkClassName = "text-blue-500 underline hover:text-blue-600", highlightMulticolor = false, textAlignTypes = ["heading", "paragraph"], variant = "AGENT_EDITOR", topToolbar, bubbleMenu, floatingMenu, bubbleMenuOptions, floatingMenuOptions, fontSizes, colors, highlightColors, enableHeadingAnchors = false, anchorLinkClassName = "heading-anchor", editorStyles = "", }) => {
    const styles = defaultEditorStyles + (editorStyles !== null && editorStyles !== void 0 ? editorStyles : "");
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
            TextStyle,
            FontSize,
            Color,
            Image.configure({
                inline: true,
                allowBase64: true,
            }),
        ],
        content: value,
        editorProps: {
            attributes: {
                class: `prose prose-lg max-w-none focus:outline-none ${editorClassName}`,
            },
        },
        onUpdate({ editor }) {
            onChange === null || onChange === void 0 ? void 0 : onChange({
                html: editor.getHTML(),
                json: editor.getJSON(),
                text: editor.getText(),
            });
        },
        immediatelyRender: false,
    });
    if (!editor)
        return null;
    const editorConfig = {
        fontSizes,
        colors,
        highlightColors,
    };
    if (variant === "AGENT_EDITOR") {
        return (_jsx(TextEditorConfigProvider, { config: editorConfig, children: _jsxs("div", { className: `bg-transparent ${className}`, children: [_jsx("style", { children: styles }), topToolbar ? topToolbar(editor) : _jsx(TopToolbar, { editor: editor }), _jsx(EditorContent, { editor: editor })] }) }));
    }
    return (_jsx(TextEditorConfigProvider, { config: editorConfig, children: _jsxs("div", { className: `bg-transparent ${className}`, children: [_jsx("style", { children: styles }), _jsx(FloatingMenu, { editor: editor, tippyOptions: Object.assign({ duration: 100, placement: "bottom-start", offset: [0, 8] }, floatingMenuOptions), children: floatingMenu ? (floatingMenu(editor)) : (_jsx(FloatingCommandMenu, { editor: editor })) }), _jsx(BubbleMenu, { editor: editor, tippyOptions: Object.assign({ duration: 100, placement: "top" }, bubbleMenuOptions), children: bubbleMenu ? (bubbleMenu(editor)) : (_jsx(BubbleFormatMenu, { editor: editor })) }), _jsx(EditorContent, { editor: editor })] }) }));
};
export { TextEditor };
