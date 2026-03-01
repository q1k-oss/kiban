import { Editor } from "@tiptap/core";
interface TableDropdownProps {
    editor: Editor;
    isOpen: boolean;
    onToggle: () => void;
}
export declare const TableDropdown: ({ editor, isOpen, onToggle, }: TableDropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
