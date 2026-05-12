import ListItem from "@tiptap/extension-list-item";
import { Node as ProseMirrorNode } from "@tiptap/pm/model";

// Auto-derive a slug id from a list item's text content. Mirrors the
// `generateId` used by HeadingWithAnchor so an anchor copied from a list
// item will resolve in HTMLRenderer the same way a heading anchor does.
const generateId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/**
 * Drop-in replacement for the default `listItem` node that:
 *   - persists an `id` attribute derived from the item's text
 *   - keeps the id in sync as the user types (via a node view)
 *
 * Used by the wiki-style citation flow: authors keep a `References`
 * ordered list at the bottom of the post, copy a row's anchor with the
 * toolbar's `Copy anchor` action, and paste it into the link dialog
 * around a superscript marker like `[1]`.
 */
export const ListItemWithAnchor = ListItem.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      id: {
        default: null,
        // We never want the id back into the prosemirror state because
        // it's derived from text — parseHTML just preserves it for
        // round-tripping when loading saved content.
        parseHTML: (element: HTMLElement) => element.getAttribute("id"),
        renderHTML: (attrs: Record<string, unknown>) => {
          const id = attrs.id as string | null;
          return id ? { id } : {};
        },
      },
    };
  },

  renderHTML({ node, HTMLAttributes }: {
    node: ProseMirrorNode;
    HTMLAttributes: Record<string, unknown>;
  }) {
    const id = generateId(node.textContent);
    return ["li", { ...HTMLAttributes, ...(id ? { id } : {}) }, 0];
  },

  addNodeView() {
    return ({ node: initialNode }) => {
      let currentNode = initialNode;
      const dom = document.createElement("li");
      const contentDOM = document.createElement("div");
      // `display: contents` keeps the wrapper invisible to layout so the
      // <li>'s default ::marker / spacing rules continue to work.
      contentDOM.style.display = "contents";
      dom.appendChild(contentDOM);

      const syncId = () => {
        const id = generateId(currentNode.textContent);
        if (id) dom.id = id;
        else dom.removeAttribute("id");
      };
      syncId();

      return {
        dom,
        contentDOM,
        update(updatedNode: ProseMirrorNode) {
          if (updatedNode.type.name !== "listItem") return false;
          currentNode = updatedNode;
          syncId();
          return true;
        },
      };
    };
  },
});
