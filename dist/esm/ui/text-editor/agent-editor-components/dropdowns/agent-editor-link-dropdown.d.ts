import { Editor } from "@tiptap/core";
interface LinkDropdownProps {
    editor: Editor;
    isOpen: boolean;
    onToggle: () => void;
}
export declare const LinkDropdown: ({ editor, isOpen, onToggle }: LinkDropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
