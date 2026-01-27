import { Editor } from "@tiptap/core";
interface HighlightDropdownProps {
    editor: Editor;
    isOpen: boolean;
    onToggle: () => void;
}
export declare const HighlightDropdown: ({ editor, isOpen, onToggle, }: HighlightDropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
