import { IDropdownButton, ITopToolbarItem } from "../types/type";
export declare const isDropdown: (item: ITopToolbarItem) => item is IDropdownButton;
export declare const baseButtonClass = "p-2 rounded transition-colors text-tertiary-text cursor-pointer bg-transparent";
export declare const activeButtonClass = "bg-primary-foreground/10 text-primary-text";
export declare const hoverButtonClass = "hover:text-primary-text hover:bg-primary-foreground/10";
