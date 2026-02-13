import Image from "@tiptap/extension-image";

export const ResponsiveImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      srcset: {
        default: null,
        parseHTML: (element: HTMLElement) => element.getAttribute("srcset"),
        renderHTML: (attributes: Record<string, unknown>) => {
          if (!attributes.srcset) return {};
          return { srcset: attributes.srcset };
        },
      },
      sizes: {
        default: null,
        parseHTML: (element: HTMLElement) => element.getAttribute("sizes"),
        renderHTML: (attributes: Record<string, unknown>) => {
          if (!attributes.sizes) return {};
          return { sizes: attributes.sizes };
        },
      },
    };
  },
});
