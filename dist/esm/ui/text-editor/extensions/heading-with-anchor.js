import Heading from "@tiptap/extension-heading";
const generateId = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
};
export const deduplicateHeadingIds = (html) => {
    const seen = new Map();
    return html.replace(/<h([1-6])\b([^>]*)\bid="([^"]*)"([^>]*)>([\s\S]*?)<\/h\1>/g, (match, level, before, id, after, content) => {
        var _a;
        const count = (_a = seen.get(id)) !== null && _a !== void 0 ? _a : 0;
        seen.set(id, count + 1);
        if (count === 0)
            return match;
        const uniqueId = `${id}-${count}`;
        const updatedContent = content.replace(/href="#[^"]*"/, `href="#${uniqueId}"`);
        return `<h${level}${before}id="${uniqueId}"${after}>${updatedContent}</h${level}>`;
    });
};
export const HeadingWithAnchor = Heading.extend({
    name: "heading",
    addOptions() {
        var _a;
        return Object.assign(Object.assign({}, (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this)), { levels: [1, 2, 3, 4, 5, 6], anchorLinkClassName: "heading-anchor" });
    },
    renderHTML({ node, HTMLAttributes, }) {
        const level = node.attrs.level;
        const id = generateId(node.textContent);
        return [
            `h${level}`,
            Object.assign(Object.assign({}, HTMLAttributes), { id }),
            ["a", { href: `#${id}`, class: this.options.anchorLinkClassName }, "#"],
            ["span", 0],
        ];
    },
    addNodeView() {
        return ({ node: initialNode }) => {
            let currentNode = initialNode;
            const level = currentNode.attrs.level;
            const dom = document.createElement(`h${level}`);
            const contentDOM = document.createElement("span");
            dom.appendChild(contentDOM);
            const syncAttrs = () => {
                const id = generateId(currentNode.textContent);
                dom.id = id;
                dom.style.textAlign = currentNode.attrs.textAlign || "";
            };
            syncAttrs();
            return {
                dom,
                contentDOM,
                update(updatedNode) {
                    if (updatedNode.type.name !== "heading")
                        return false;
                    if (updatedNode.attrs.level !== currentNode.attrs.level)
                        return false;
                    currentNode = updatedNode;
                    syncAttrs();
                    return true;
                },
            };
        };
    },
});
