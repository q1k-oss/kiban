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

/**
 * Builds a Reddit submit URL for sharing the given page.
 *
 * @param url - The URL to share; must be a non-empty string.
 * @param options - Optional settings for the share URL.
 * @param options.title - Optional post title to include in the share URL.
 * @returns A Reddit submit URL containing query parameters for `url` and optional `title`.
 * @throws Error if `url` is falsy.
 */
function getRedditShareUrl(url: string, options: { title?: string }) {
  if (!url) {
    throw new Error('Reddit share requires a URL');
  }

  return (
    'https://www.reddit.com/submit' +
    objectToGetParams({ url, title: options.title })
  );
}

/**
 * Renders a button that opens a centered Reddit submit window for the provided URL.
 *
 * @param url - The destination URL to share on Reddit.
 * @param title - Optional title to include with the shared URL.
 * @param children - Content rendered inside the button.
 * @param className - Optional CSS class names applied to the button.
 * @param disabled - If `true`, the button is inert and will not open the share window.
 * @param onClick - Optional callback invoked when the button is clicked (called before the share window opens).
 */
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