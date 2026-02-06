"use client"
import React from 'react';

import { Button } from '../button';

import objectToGetParams, { openShareWindow } from './utils';

export interface RedditShareButtonProps {
  url: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function getRedditShareUrl(url: string, options: { title?: string }) {
  if (!url) {
    throw new Error('Reddit share requires a URL');
  }

  return (
    'https://www.reddit.com/submit' +
    objectToGetParams({ url, title: options.title })
  );
}

export default function RedditShareButton({
  url,
  title,
  children,
  className,
  disabled = false,
  onClick,
}: RedditShareButtonProps) {
  const handleClick = () => {
    if (disabled) return;

    onClick?.();
    const shareUrl = getRedditShareUrl(url, { title });
    openShareWindow(shareUrl);
  };

  return (
    <Button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={disabled}
      aria-label="Share on Reddit"
    >
      {children}
    </Button>
  );
}
