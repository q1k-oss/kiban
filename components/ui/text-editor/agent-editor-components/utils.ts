

import { IDropdownButton, ITopToolbarItem } from "../types/type";

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
  const urlString = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,}(\/.*)?$/i.test(
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
