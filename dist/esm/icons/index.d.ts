declare const CustomIcons: {
    ArrowUpIcon: () => import("react/jsx-runtime").JSX.Element;
    CheckIcon: () => import("react/jsx-runtime").JSX.Element;
    CreateAgentIcon: import("react").FC<import("./CreateAgentIcon").CreateAgentIconProps>;
    FilterIcon: import("react").FC<import("./FilterIcon").FilterIconProps>;
    FolderQ1kIcon: import("react").FC<import("./FolderQ1kIcon").FolderQ1kIconProps>;
    PaperClipIcon: () => import("react/jsx-runtime").JSX.Element;
    SquareIcon: () => import("react/jsx-runtime").JSX.Element;
    TokenIcon: import("react").FC<import("./TokenIcon").TokenIconProps>;
    GoogleDriveIcon: import("react").FC<import("./GoogleDriveIcon").GoogleDriveIconProps>;
    FileCSVIcon: import("react").FC<import("./FileCSVIcon").FileCSVIconProps>;
    FilePDFIcon: import("react").FC<import("./FilePDFIcon").FilePDFIconProp>;
    FileDOCIcon: import("react").FC<import("./FileDOCIcon").FileDOCIconProps>;
    FullPreviewPlay: import("react").FC<import("./FullPreviewPlay").FullPreviewPlayProps>;
};
export type CustomIconName = keyof typeof CustomIcons;
export { CustomIcons };
