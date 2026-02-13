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

/**
 * Constructs a Threads "intent/post" URL that encodes post text from the provided title and URL.
 *
 * @param url - The resource URL to include in the shared text; required.
 * @param options.title - Optional title to prefix the shared text. When provided, the post text is "`title` `url`".
 * @returns A full Threads share URL including an encoded `text` query parameter.
 * @throws Error if `url` is empty or falsy.
 */
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

/**
 * Renders a button that opens a Threads share window for the provided URL and optional title.
 *
 * @param url - The URL to include in the Threads post; required.
 * @param title - Optional title/text to prepend to the URL in the share text.
 * @param children - Content rendered inside the button.
 * @param className - Optional CSS class names applied to the button.
 * @param disabled - When `true`, the button is inert and does not open the share window.
 * @param onClick - Optional callback invoked when the button is clicked (called before opening the share window).
 * @returns The rendered Button element that triggers a Threads share dialog when activated.
 */
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