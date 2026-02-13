import React from "react";
export interface LinkedinShareButtonProps {
    url: string;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}
export default function LinkedinShareButton({ url, children, className, disabled, onClick, }: LinkedinShareButtonProps): import("react/jsx-runtime").JSX.Element;
