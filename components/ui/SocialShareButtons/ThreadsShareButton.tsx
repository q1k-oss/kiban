"use client"
import React from 'react';

import objectToGetParams from './utils';

export interface ThreadsShareButtonProps {
  url: string;
  title?: string;
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

function getThreadsShareUrl(url: string, options: { title?: string }) {
  if (!url) {
    throw new Error('Threads share requires a URL');
  }

  const text = options.title ? `${options.title} ${url}` : url;

  return (
    'https://www.threads.net/intent/post' +
    objectToGetParams({ text })
  );
}

export default function ThreadsShareButton({
  url,
  title,
  children,
  className,
  disabled = false,
  onClick,
}: ThreadsShareButtonProps) {
  const handleClick = () => {
    if (disabled) return;

    onClick?.();
    const shareUrl = getThreadsShareUrl(url, { title });
    openShareWindow(shareUrl);
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={disabled}
      aria-label="Share on Threads"
    >
      {children}
    </button>
  );
}
