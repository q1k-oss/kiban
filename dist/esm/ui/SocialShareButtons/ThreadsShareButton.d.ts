import React from 'react';
export interface ThreadsShareButtonProps {
    url: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}
export default function ThreadsShareButton({ url, title, children, className, disabled, onClick, }: ThreadsShareButtonProps): import("react/jsx-runtime").JSX.Element;
