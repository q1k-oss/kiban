import { Editor } from "@tiptap/core";
interface ImageButtonProps {
    editor: Editor;
    isOpen?: boolean;
    onToggle?: () => void;
}
export declare const ImageButton: ({ editor, isOpen: controlledOpen, onToggle }: ImageButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
