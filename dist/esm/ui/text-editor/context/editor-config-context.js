import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { COLORS, FONT_SIZES, HIGHLIGHT_COLORS } from "../constants";
const TextEditorConfigContext = createContext({
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
export const TextEditorConfigProvider = ({ config, children, }) => {
    const value = {
        fontSizes: config.fontSizes || FONT_SIZES,
        colors: config.colors || COLORS,
        highlightColors: config.highlightColors || HIGHLIGHT_COLORS,
        onImageUpload: config.onImageUpload,
        onImageRemove: config.onImageRemove,
    };
    return (_jsx(TextEditorConfigContext.Provider, { value: value, children: children }));
};
