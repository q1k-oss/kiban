import Heading from "@tiptap/extension-heading";
import { Level } from "@tiptap/extension-heading";
import { Node as ProseMirrorNode } from "@tiptap/pm/model";

export interface HeadingWithAnchorOptions {
  levels: Level[];
  anchorLinkClassName?: string;
}

export const HeadingWithAnchor = Heading.extend<HeadingWithAnchorOptions>({
  name: "headingWithAnchor",

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
    const text = node.textContent;
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    return [
      `h${level}`,
      { ...HTMLAttributes, id },
      ["a", { href: `#${id}`, class: this.options.anchorLinkClassName }, 0],
    ];
  },
});