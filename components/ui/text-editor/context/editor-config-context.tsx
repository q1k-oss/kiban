import React, { createContext, useContext } from "react";

import { COLORS, FONT_SIZES, HIGHLIGHT_COLORS } from "../constants";
import { IFontSizeOption, ImageUploadHandler } from "../types/type";

interface EditorConfig {
  fontSizes?: IFontSizeOption[];
  colors?: string[];
  highlightColors?: { color: string; label: string }[];
  onImageUpload?: ImageUploadHandler;
}

interface TextEditorConfigContextValue {
  fontSizes: IFontSizeOption[];
  colors: string[];
  highlightColors: { color: string; label: string }[];
  onImageUpload?: ImageUploadHandler;
}

const TextEditorConfigContext = createContext<TextEditorConfigContextValue>({
  fontSizes: FONT_SIZES,
  colors: COLORS,
  highlightColors: HIGHLIGHT_COLORS,
});

export const useTextEditorConfig = () => {
  const context = useContext(TextEditorConfigContext);
  if (!context) {
    throw new Error("useEditorConfig must be used within EditorConfigProvider");
  }
  return context;
};

interface TextEditorConfigProviderProps {
  config: EditorConfig;
  children: React.ReactNode;
}

export const TextEditorConfigProvider = ({
  config,
  children,
}: TextEditorConfigProviderProps) => {
  const value: TextEditorConfigContextValue = {
    fontSizes: config.fontSizes || FONT_SIZES,
    colors: config.colors || COLORS,
    highlightColors: config.highlightColors || HIGHLIGHT_COLORS,
    onImageUpload: config.onImageUpload,
  };

  return (
    <TextEditorConfigContext.Provider value={value}>
      {children}
    </TextEditorConfigContext.Provider>
  );
};
