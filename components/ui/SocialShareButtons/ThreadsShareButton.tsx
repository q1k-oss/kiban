"use client"
import React from 'react';

import { Button } from '../button';

import objectToGetParams, { openShareWindow } from './utils';

export interface ThreadsShareButtonProps {
  url: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
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
    <Button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={disabled}
      aria-label="Share on Threads"
    >
      {children}
    </Button>
  );
}
