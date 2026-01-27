import { Level } from "@tiptap/extension-heading";
export interface HeadingWithAnchorOptions {
    levels: Level[];
    anchorLinkClassName?: string;
}
export declare const HeadingWithAnchor: import("@tiptap/core").Node<HeadingWithAnchorOptions, any>;
