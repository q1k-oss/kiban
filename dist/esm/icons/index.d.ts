declare const CustomIcons: {
    ArrowUpIcon: () => import("react/jsx-runtime").JSX.Element;
    CheckIcon: () => import("react/jsx-runtime").JSX.Element;
    CreateAgentIcon: ({ className, size, }: import("./CreateAgentIcon").CreateAgentIconProps) => import("react/jsx-runtime").JSX.Element;
    FilterIcon: ({ className, strokeWidth, size, }: import("./FilterIcon").FilterIconProps) => import("react/jsx-runtime").JSX.Element;
    FolderQ1kIcon: import("react").FC<import("./FolderQ1kIcon").FolderQ1kIconProps>;
    PaperClipIcon: () => import("react/jsx-runtime").JSX.Element;
    SquareIcon: () => import("react/jsx-runtime").JSX.Element;
    TokenIcon: import("react").FC<import("./TokenIcon").TokenIconProps>;
};
export type CustomIconName = keyof typeof CustomIcons;
export { CustomIcons };
