import Heading from "@tiptap/extension-heading";
export const HeadingWithAnchor = Heading.extend({
    name: "headingWithAnchor",
    addOptions() {
        var _a;
        return Object.assign(Object.assign({}, (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this)), { levels: [1, 2, 3, 4, 5, 6], anchorLinkClassName: "heading-anchor" });
    },
    renderHTML({ node, HTMLAttributes, }) {
        const level = node.attrs.level;
        const text = node.textContent;
        const id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
        return [
            `h${level}`,
            Object.assign(Object.assign({}, HTMLAttributes), { id }),
            ["a", { href: `#${id}`, class: this.options.anchorLinkClassName }, 0],
        ];
    },
});
