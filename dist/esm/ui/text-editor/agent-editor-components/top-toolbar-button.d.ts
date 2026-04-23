import { Editor } from "@tiptap/core";
import { IToolbarButton as ToolbarButtonType } from "../types/type";
interface ToolbarButtonProps {
    item: ToolbarButtonType;
    editor: Editor;
    onClick?: () => void;
}
export declare const ToolbarButton: ({ item, editor, onClick }: ToolbarButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
