import { Editor } from "@tiptap/core";
interface ColorPickerDropdownProps {
    editor: Editor;
    isOpen: boolean;
    onToggle: () => void;
}
export declare const ColorPickerDropdown: ({ editor, isOpen, onToggle, }: ColorPickerDropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
