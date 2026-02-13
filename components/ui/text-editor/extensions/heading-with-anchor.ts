import Heading from "@tiptap/extension-heading";
import { Level } from "@tiptap/extension-heading";
import { Node as ProseMirrorNode } from "@tiptap/pm/model";

export interface HeadingWithAnchorOptions {
  levels: Level[];
  anchorLinkClassName?: string;
}

const generateId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const deduplicateHeadingIds = (html: string): string => {
  const seen = new Map<string, number>();
  return html.replace(
    /<h([1-6])\b([^>]*)\bid="([^"]*)"([^>]*)>([\s\S]*?)<\/h\1>/g,
    (match, level, before, id, after, content) => {
      const count = seen.get(id) ?? 0;
      seen.set(id, count + 1);
      if (count === 0) return match;
      const uniqueId = `${id}-${count}`;
      const updatedContent = content.replace(
        /href="#[^"]*"/,
        `href="#${uniqueId}"`,
      );
      return `<h${level}${before}id="${uniqueId}"${after}>${updatedContent}</h${level}>`;
    },
  );
};

export const HeadingWithAnchor = Heading.extend<HeadingWithAnchorOptions>({
  name: "heading",

  addOptions() {
    return {
      ...this.parent?.(),
      levels: [1, 2, 3, 4, 5, 6] as Level[],
      anchorLinkClassName: "heading-anchor",
    };
  },

  renderHTML({
    node,
    HTMLAttributes,
  }: {
    node: ProseMirrorNode;
    HTMLAttributes: Record<string, unknown>;
  }) {
    const level = node.attrs.level as Level;
    const id = generateId(node.textContent);

    return [
      `h${level}`,
      { ...HTMLAttributes, id },
      ["a", { href: `#${id}`, class: this.options.anchorLinkClassName }, "#"],
      ["span", 0],
    ];
  },

  addNodeView() {
    return ({ node: initialNode }) => {
      let currentNode = initialNode;
      const level = currentNode.attrs.level as number;

      const dom = document.createElement(`h${level}`);
      const contentDOM = document.createElement("span");
      dom.appendChild(contentDOM);

      const syncAttrs = () => {
        const id = generateId(currentNode.textContent);
        dom.id = id;
        dom.style.textAlign = (currentNode.attrs.textAlign as string) || "";
      };

      syncAttrs();

      return {
        dom,
        contentDOM,
        update(updatedNode: ProseMirrorNode) {
          if (updatedNode.type.name !== "heading") return false;
          if (updatedNode.attrs.level !== currentNode.attrs.level) return false;
          currentNode = updatedNode;
          syncAttrs();
          return true;
        },
      };
    };
  },
});
