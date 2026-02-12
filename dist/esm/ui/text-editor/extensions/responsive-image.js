import Image from "@tiptap/extension-image";
export const ResponsiveImage = Image.extend({
    addAttributes() {
        var _a;
        return Object.assign(Object.assign({}, (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this)), { srcset: {
                default: null,
                parseHTML: (element) => element.getAttribute("srcset"),
                renderHTML: (attributes) => {
                    if (!attributes.srcset)
                        return {};
                    return { srcset: attributes.srcset };
                },
            }, sizes: {
                default: null,
                parseHTML: (element) => element.getAttribute("sizes"),
                renderHTML: (attributes) => {
                    if (!attributes.sizes)
                        return {};
                    return { sizes: attributes.sizes };
                },
            } });
    },
});
