"use client";
import React from "react";

import { Button } from "../button";

import objectToGetParams, { openShareWindow } from "./utils";

export interface FacebookShareButtonProps {
  url: string;
  hashtag?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Build a Facebook share URL for the given page and optional hashtag.
 *
 * @param url - The URL to share on Facebook.
 * @param options - Additional optional parameters for the share URL.
 * @param options.hashtag - An optional hashtag (include leading `#` if desired) to attach to the share.
 * @returns The fully-formed Facebook sharer URL including query parameters.
 * @throws Error if `url` is empty or falsy.
 */
function getFacebookShareUrl(url: string, options: { hashtag?: string }) {
  if (!url) {
    throw new Error("Facebook share requires a URL");
  }

  return (
    "https://www.facebook.com/sharer/sharer.php" +
    objectToGetParams({
      u: url,
      hashtag: options.hashtag,
    })
  );
}

/**
 * Render a Facebook share button that opens a centered Facebook share popup.
 *
 * @param url - The URL to share (required).
 * @param hashtag - Optional hashtag to include in the shared post (include leading `#` if desired).
 * @param children - Content to render inside the button.
 * @param className - Optional CSS class name to apply to the button.
 * @param disabled - If `true`, the button is inert and will not open the share window.
 * @param onClick - Optional callback invoked before opening the share window.
 * @returns The Button element configured to share `url` on Facebook when clicked.
 */
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
    <Button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={disabled}
      aria-label="Share on Facebook"
    >
      {children}
    </Button>
  );
}