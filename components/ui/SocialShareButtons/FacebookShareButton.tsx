"use client"
import React from 'react';

import objectToGetParams from './utils';

export interface FacebookShareButtonProps {
  url: string;
  hashtag?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function openShareWindow(shareUrl: string, windowWidth = 550, windowHeight = 400) {
  const left = window.screen.width / 2 - windowWidth / 2;
  const top = window.screen.height / 2 - windowHeight / 2;

  window.open(
    shareUrl,
    'share-window',
    `width=${windowWidth},height=${windowHeight},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
  );
}

function getFacebookShareUrl(url: string, options: { hashtag?: string }) {
  if (!url) {
    throw new Error('Facebook share requires a URL');
  }

  return (
    'https://www.facebook.com/sharer/sharer.php' +
    objectToGetParams({
      u: url,
      hashtag: options.hashtag,
    })
  );
}

export default function FacebookShareButton({
  url,
  hashtag,
  children,
  className,
  disabled = false,
  onClick,
}: FacebookShareButtonProps) {
  const handleClick = () => {
    if (disabled) return;

    onClick?.();
    const shareUrl = getFacebookShareUrl(url, { hashtag });
    openShareWindow(shareUrl);
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={disabled}
      aria-label="Share on Facebook"
    >
      {children}
    </button>
  );
}
