import React from 'react';
export interface LinkedinShareButtonProps {
    url: string;
    title?: string;
    summary?: string;
    source?: string;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}
export default function LinkedinShareButton({ url, title, summary, source, children, className, disabled, onClick, }: LinkedinShareButtonProps): import("react/jsx-runtime").JSX.Element;
