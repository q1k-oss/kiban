// toolbar/utils.ts

import { IDropdownButton, ITopToolbarItem } from "../types/type";


export const isDropdown = (item: ITopToolbarItem): item is IDropdownButton => {
  return "type" in item;
};

export const baseButtonClass = "p-2 rounded transition-colors text-tertiary-text cursor-pointer bg-transparent";
export const activeButtonClass = "bg-primary-foreground/10 text-primary-text";
export const hoverButtonClass = "hover:text-primary-text hover:bg-primary-foreground/10";