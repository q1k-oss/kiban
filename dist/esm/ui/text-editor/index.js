"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Color from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { Table, TableCell, TableHeader, TableRow } from "@tiptap/extension-table";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor, EditorContent, FloatingMenu, BubbleMenu, } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useRef } from "react";
import { TopToolbar } from "./agent-editor-components/top-toolbar";
import { uploadAndInsertImage } from "./agent-editor-components/utils";
import { TextEditorConfigProvider } from "./context/editor-config-context";
import { HeadingWithAnchor, deduplicateHeadingIds, } from "./extensions/heading-with-anchor";
import { ResponsiveImage } from "./extensions/responsive-image";
import { BubbleFormatMenu } from "./notion-editor-components/bubble-format-menu";
import { editorStyles as defaultEditorStyles } from "./notion-editor-components/editor-styles";
import { FloatingCommandMenu } from "./notion-editor-components/floating-command-menu";
import { FontSize } from "./notion-editor-components/font-size";
const TextEditor = ({ value = "", onChange, wrapperClassName = "", editorClassName = "", headingLevels = [1, 2, 3], placeholder = "start typing...", linkClassName = "text-blue-500 underline hover:text-blue-600", highlightMulticolor = true, textAlignTypes = ["heading", "paragraph", "image"], variant = "AGENT_EDITOR", topToolbar, bubbleMenu, floatingMenu, bubbleMenuOptions, floatingMenuOptions, fontSizes, colors, highlightColors, enableHeadingAnchors = false, anchorLinkClassName = "heading-anchor", editorStyles = "", onImageUpload, onImageRemove, topToolbarClassName, }) => {
    const styles = defaultEditorStyles + (editorStyles !== null && editorStyles !== void 0 ? editorStyles : "");
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
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableCell,
            TableHeader,
        ],
        content: value,
        editorProps: {
            attributes: {
                class: `prose prose-lg max-w-none focus:outline-none ${editorClassName}`,
            },
            handleDOMEvents: {
                dragover: (_view, event) => {
                    var _a, _b;
                    if ((_b = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.types) === null || _b === void 0 ? void 0 : _b.includes("Files")) {
                        event.preventDefault();
                        event.dataTransfer.dropEffect = "copy";
                    }
                    return false;
                },
            },
            handleDrop(view, event, _slice, moved) {
                var _a;
                if (moved)
                    return false;
                const uploadHandler = onImageUploadRef.current;
                if (!uploadHandler)
                    return false;
                const files = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.files;
                if (!(files === null || files === void 0 ? void 0 : files.length))
                    return false;
                const file = files[0];
                if (!file.type.startsWith("image/"))
                    return false;
                event.preventDefault();
                const coords = view.posAtCoords({
                    left: event.clientX,
                    top: event.clientY,
                });
                if (!coords)
                    return true;
                uploadAndInsertImage(view, coords.pos, file, uploadHandler);
                return true;
            },
            handlePaste(view, event) {
                var _a;
                const uploadHandler = onImageUploadRef.current;
                if (!uploadHandler)
                    return false;
                const items = (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.items;
                if (!items)
                    return false;
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    if (item.type.startsWith("image/")) {
                        const file = item.getAsFile();
                        if (!file)
                            continue;
                        event.preventDefault();
                        uploadAndInsertImage(view, null, file, uploadHandler);
                        return true;
                    }
                }
                return false;
            },
        },
        onUpdate({ editor }) {
            const rawHtml = editor.getHTML();
            onChange === null || onChange === void 0 ? void 0 : onChange({
                html: enableHeadingAnchors
                    ? deduplicateHeadingIds(rawHtml)
                    : rawHtml,
                json: editor.getJSON(),
                text: editor.getText(),
            });
        },
        immediatelyRender: false,
    });
    // Sync editor content when value prop changes externally
    useEffect(() => {
        if (!editor || editor.isDestroyed)
            return;
        const currentHtml = editor.getHTML();
        if (value !== currentHtml) {
            editor.commands.setContent(value, false);
        }
    }, [value, editor]);
    if (!editor)
        return null;
    const editorConfig = {
        fontSizes,
        colors,
        highlightColors,
        onImageUpload,
        onImageRemove,
    };
    if (variant === "AGENT_EDITOR") {
        return (_jsx(TextEditorConfigProvider, { config: editorConfig, children: _jsxs("div", { className: `bg-transparent ${wrapperClassName}`, children: [_jsx("style", { children: styles }), topToolbar ? topToolbar(editor) : _jsx(TopToolbar, { editor: editor, className: topToolbarClassName }), _jsx(EditorContent, { editor: editor })] }) }));
    }
    return (_jsx(TextEditorConfigProvider, { config: editorConfig, children: _jsxs("div", { className: `bg-transparent ${wrapperClassName}`, children: [_jsx("style", { children: styles }), _jsx(FloatingMenu, { editor: editor, tippyOptions: Object.assign({ duration: 100, placement: "bottom-start", offset: [0, 8] }, floatingMenuOptions), children: floatingMenu ? (floatingMenu(editor)) : (_jsx(FloatingCommandMenu, { editor: editor })) }), _jsx(BubbleMenu, { editor: editor, tippyOptions: Object.assign({ duration: 100, placement: "top" }, bubbleMenuOptions), children: bubbleMenu ? (bubbleMenu(editor)) : (_jsx(BubbleFormatMenu, { editor: editor })) }), _jsx(EditorContent, { editor: editor })] }) }));
};
export { TextEditor };
