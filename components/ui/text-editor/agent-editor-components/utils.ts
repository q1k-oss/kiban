
import type { EditorView } from "@tiptap/pm/view";

import { IDropdownButton, IImageUploadResult, ImageUploadHandler, ITopToolbarItem } from "../types/type";

export const isDropdown = (item: ITopToolbarItem): item is IDropdownButton => {
  return "type" in item;
};

export const baseButtonClass =
  "p-2 rounded transition-colors text-tertiary-text cursor-pointer bg-transparent shadow-none h-fit w-fit";
export const activeButtonClass = "bg-primary-foreground/10 text-primary-text";
export const hoverButtonClass =
  "hover:text-primary-text hover:bg-primary-foreground/10";

export const normalizeUrl = (raw: string): string | null => {
  const trimmed = raw.trim();
  const urlString = /^[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,}(\/.*)?$/i.test(
    trimmed,
  )
    ? `https://${trimmed}`
    : trimmed;
  try {
     const url = new URL(urlString);
    if (!["http:", "https:"].includes(url.protocol)) return null;
    return url.href;
  } catch {
    return null;
  }
};
export const buildResponsiveImageAttrs = (urls: IImageUploadResult) => ({
  src: urls.full,
  srcset: `${urls.thumbnail} 400w, ${urls.medium} 800w, ${urls.full} 1200w`,
  sizes: "(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px",
});

const LOADING_SVG = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150">',
  '<rect width="200" height="150" fill="#f1f5f9" rx="8"/>',
  '<circle cx="100" cy="65" r="16" fill="none" stroke="#94a3b8" stroke-width="3"',
  ' stroke-dasharray="80" stroke-linecap="round">',
  '<animateTransform attributeName="transform" type="rotate"',
  ' from="0 100 65" to="360 100 65" dur="1s" repeatCount="indefinite"/>',
  "</circle>",
  '<text x="100" y="105" text-anchor="middle" fill="#94a3b8"',
  ' font-family="sans-serif" font-size="12">Uploading...</text>',
  "</svg>",
].join("");

const UPLOAD_PLACEHOLDER_SRC = `data:image/svg+xml,${encodeURIComponent(LOADING_SVG)}`;

const findPlaceholderNode = (
  view: EditorView,
  uploadId: string,
): { pos: number; nodeSize: number } | null => {
  let result: { pos: number; nodeSize: number } | null = null;
  view.state.doc.descendants((node, pos) => {
    if (result) return false;
    if (node.type.name === "image" && node.attrs.alt === uploadId) {
      result = { pos, nodeSize: node.nodeSize };
      return false;
    }
  });
  return result;
};

const getLocalPreview = (file: File): string => {
  try {
    return URL.createObjectURL(file);
  } catch {
    return UPLOAD_PLACEHOLDER_SRC;
  }
};

const pendingUploads = new Map<string, {
  file: File;
  handler: ImageUploadHandler;
  view: EditorView;
}>();

const replaceNode = (
  view: EditorView,
  uploadId: string,
  newNode: ReturnType<typeof view.state.schema.nodes.image.create>,
) => {
  const found = findPlaceholderNode(view, uploadId);
  if (!found) return;
  view.dispatch(view.state.tr.replaceWith(found.pos, found.pos + found.nodeSize, newNode));
};

const showErrorState = (view: EditorView, uploadId: string, file: File) => {
  const previewSrc = getLocalPreview(file);
  const errorNode = view.state.schema.nodes.image.create({
    src: previewSrc,
    alt: uploadId,
    title: "__upload_error__",
  });
  replaceNode(view, uploadId, errorNode);
};

const attemptUpload = (uploadId: string) => {
  const entry = pendingUploads.get(uploadId);
  if (!entry) return;

  const { file, handler, view } = entry;

  const previewSrc = getLocalPreview(file);
  const found = findPlaceholderNode(view, uploadId);
  if (found) {
    const loadingNode = view.state.schema.nodes.image.create({
      src: previewSrc,
      alt: uploadId,
      title: "__uploading__",
    });
    replaceNode(view, uploadId, loadingNode);
  }

  handler(file)
    .then((urls) => {
      const attrs = buildResponsiveImageAttrs(urls);
      const newNode = view.state.schema.nodes.image.create({
        ...attrs,
        alt: "",
      });
      replaceNode(view, uploadId, newNode);
      pendingUploads.delete(uploadId);
    })
    .catch(() => {
      showErrorState(view, uploadId, file);
    });
};

export const retryUpload = (view: EditorView, uploadId: string) => {
  const entry = pendingUploads.get(uploadId);
  if (!entry) return;

  attemptUpload(uploadId);
};

export const removeFailedUpload = (view: EditorView, uploadId: string) => {
  const found = findPlaceholderNode(view, uploadId);
  if (found) {
    view.dispatch(view.state.tr.delete(found.pos, found.pos + found.nodeSize));
  }
  pendingUploads.delete(uploadId);
};

export const getUploadEntry = (uploadId: string) => pendingUploads.get(uploadId);

export const uploadAndInsertImage = (
  view: EditorView,
  pos: number | null,
  file: File,
  uploadHandler: ImageUploadHandler,
) => {
  const uploadId = `__uploading_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const previewSrc = getLocalPreview(file);

  const placeholderNode = view.state.schema.nodes.image.create({
    src: previewSrc,
    alt: uploadId,
    title: "__uploading__",
  });

  if (pos !== null) {
    view.dispatch(view.state.tr.insert(pos, placeholderNode));
  } else {
    view.dispatch(view.state.tr.replaceSelectionWith(placeholderNode));
  }

  pendingUploads.set(uploadId, {
    file,
    handler: uploadHandler,
    view,
  });

  attemptUpload(uploadId);
};

export const validateImageUrl = (raw: string): string | null => {
  const trimmed = raw.trim();

  if (trimmed.startsWith("data:")) {
    if (trimmed.startsWith("data:image/")) {
      return trimmed;
    }

    return null;
  }

  try {
    const url = new URL(trimmed);
    if (!["http:", "https:"].includes(url.protocol)) {
      return null;
    }
    return url.href;
  } catch {
    return null;
  }
};
