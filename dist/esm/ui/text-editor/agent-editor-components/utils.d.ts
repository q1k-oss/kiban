import type { EditorView } from "@tiptap/pm/view";
import { IDropdownButton, IImageUploadResult, ImageUploadHandler, ITopToolbarItem } from "../types/type";
export declare const isDropdown: (item: ITopToolbarItem) => item is IDropdownButton;
export declare const baseButtonClass = "p-2 rounded transition-colors text-tertiary-text cursor-pointer bg-transparent shadow-none h-fit w-fit";
export declare const activeButtonClass = "bg-primary-foreground/10 text-primary-text";
export declare const hoverButtonClass = "hover:text-primary-text hover:bg-primary-foreground/10";
export declare const normalizeUrl: (raw: string) => string | null;
export declare const buildResponsiveImageAttrs: (urls: IImageUploadResult) => {
    src: string;
    srcset: string;
    sizes: string;
};
export declare const uploadAndInsertImage: (view: EditorView, pos: number | null, file: File, uploadHandler: ImageUploadHandler) => void;
export declare const validateImageUrl: (raw: string) => string | null;
