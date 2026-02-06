import React from 'react';
export interface TwitterShareButtonProps {
    url: string;
    title?: string;
    via?: string;
    hashtags?: string[];
    related?: string[];
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}
export default function TwitterShareButton({ url, title, via, hashtags, related, children, className, disabled, onClick, }: TwitterShareButtonProps): import("react/jsx-runtime").JSX.Element;
