// extensions/heading-with-anchor.ts
import Heading from "@tiptap/extension-heading";
import { Node as ProseMirrorNode } from '@tiptap/pm/model';

export interface HeadingWithAnchorOptions {
  levels: number[];
  anchorLinkClassName?: string;
}

export const HeadingWithAnchor = Heading.extend<HeadingWithAnchorOptions>({
  name: 'headingWithAnchor',
  
  addOptions() {
    return {
      ...this.parent?.(),
      levels: [1, 2, 3, 4, 5, 6],
      anchorLinkClassName: 'heading-anchor1',
    };
  },

  renderHTML({ node, HTMLAttributes }: { 
    node: ProseMirrorNode; 
    HTMLAttributes: Record<string, any> 
  }) {
    const level = node.attrs.level;
    const text = node.textContent;
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    return [
      `h${level}`,
      { ...HTMLAttributes, id },
      [
        'a',
        {
          href: `#${id}`,
          class: this.options.anchorLinkClassName,
        },
        0
      ]
    ];
  },
});