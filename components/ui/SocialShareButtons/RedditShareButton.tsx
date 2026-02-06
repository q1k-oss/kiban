"use client"
import React from 'react';

import objectToGetParams from './utils';

export interface RedditShareButtonProps {
  url: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function openShareWindow(shareUrl: string, windowWidth = 660, windowHeight = 460) {
  const left = window.screen.width / 2 - windowWidth / 2;
  const top = window.screen.height / 2 - windowHeight / 2;

  window.open(
    shareUrl,
    'share-window',
    `width=${windowWidth},height=${windowHeight},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
  );
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
    <button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={disabled}
      aria-label="Share on Reddit"
    >
      {children}
    </button>
  );
}
