import React from "react";
import { IFontSizeOption, ImageUploadHandler } from "../types/type";
interface EditorConfig {
    fontSizes?: IFontSizeOption[];
    colors?: string[];
    highlightColors?: {
        color: string;
        label: string;
    }[];
    onImageUpload?: ImageUploadHandler;
}
interface TextEditorConfigContextValue {
    fontSizes: IFontSizeOption[];
    colors: string[];
    highlightColors: {
        color: string;
        label: string;
    }[];
    onImageUpload?: ImageUploadHandler;
}
export declare const useTextEditorConfig: () => TextEditorConfigContextValue;
interface TextEditorConfigProviderProps {
    config: EditorConfig;
    children: React.ReactNode;
}
export declare const TextEditorConfigProvider: ({ config, children, }: TextEditorConfigProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
