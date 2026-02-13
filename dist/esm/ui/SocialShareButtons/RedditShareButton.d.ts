import React from 'react';
export interface RedditShareButtonProps {
    url: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}
export default function RedditShareButton({ url, title, children, className, disabled, onClick, }: RedditShareButtonProps): import("react/jsx-runtime").JSX.Element;
