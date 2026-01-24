// toolbar/utils.ts
export const isDropdown = (item) => {
    return "type" in item;
};
export const baseButtonClass = "p-2 rounded transition-colors text-tertiary-text cursor-pointer bg-transparent shadow-none h-fit w-fit";
export const activeButtonClass = "bg-primary-foreground/10 text-primary-text";
export const hoverButtonClass = "hover:text-primary-text hover:bg-primary-foreground/10";
