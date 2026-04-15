import React from "react";
import { IFontSizeOption, ImageRemoveHandler, ImageUploadHandler } from "../types/type";
interface EditorConfig {
    fontSizes?: IFontSizeOption[];
    colors?: string[];
    highlightColors?: {
        color: string;
        label: string;
    }[];
    onImageUpload?: ImageUploadHandler;
    onImageRemove?: ImageRemoveHandler;
}
interface TextEditorConfigContextValue {
    fontSizes: IFontSizeOption[];
    colors: string[];
    highlightColors: {
        color: string;
        label: string;
    }[];
    onImageUpload?: ImageUploadHandler;
    onImageRemove?: ImageRemoveHandler;
}
export declare const useTextEditorConfig: () => TextEditorConfigContextValue;
interface TextEditorConfigProviderProps {
    config: EditorConfig;
    children: React.ReactNode;
}
export declare const TextEditorConfigProvider: ({ config, children, }: TextEditorConfigProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
