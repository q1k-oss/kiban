import React from 'react';
export interface FacebookShareButtonProps {
    url: string;
    hashtag?: string;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}
export default function FacebookShareButton({ url, hashtag, children, className, disabled, onClick, }: FacebookShareButtonProps): import("react/jsx-runtime").JSX.Element;
