declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        fontSize: {
            setFontSize: (fontSize: string) => ReturnType;
            unsetFontSize: () => ReturnType;
        };
    }
}
export declare const FontSize: import("@tiptap/core").Mark<import("@tiptap/extension-text-style").TextStyleOptions, any>;
