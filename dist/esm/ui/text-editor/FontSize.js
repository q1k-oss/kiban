import TextStyle from "@tiptap/extension-text-style";
export const FontSize = TextStyle.extend({
    addAttributes() {
        var _a;
        return Object.assign(Object.assign({}, (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this)), { fontSize: {
                default: null,
                parseHTML: (element) => element.style.fontSize,
                renderHTML: (attributes) => {
                    if (!attributes.fontSize) {
                        return {};
                    }
                    return {
                        style: `font-size: ${attributes.fontSize}`,
                    };
                },
            } });
    },
    addCommands() {
        var _a;
        return Object.assign(Object.assign({}, (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this)), { setFontSize: (fontSize) => ({ commands }) => {
                return commands.setMark("textStyle", { fontSize });
            }, unsetFontSize: () => ({ commands }) => {
                return commands.setMark("textStyle", { fontSize: null });
            } });
    },
});
