"use client";
import React from "react";

import { Button } from "../button";

import objectToGetParams, { openShareWindow } from "./utils";

export interface LinkedinShareButtonProps {
  url: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Builds a LinkedIn sharing URL for the provided page URL.
 *
 * @param url - The page URL to share; must be a non-empty string.
 * @returns A LinkedIn share URL that includes the provided `url` as a query parameter.
 * @throws Error if `url` is falsy.
 */
function getLinkedinShareUrl(url: string) {
  if (!url) {
    throw new Error("LinkedIn share requires a URL");
  }

  return (
    "https://www.linkedin.com/sharing/share-offsite/" +
    objectToGetParams({ url })
  );
}

/**
 * Renders a button that opens a LinkedIn share window for the provided URL when clicked.
 *
 * @returns The Button element configured to share `url` on LinkedIn.
 */
export default function LinkedinShareButton({
  url,
  children,
  className,
  disabled = false,
  onClick,
}: LinkedinShareButtonProps) {
  const handleClick = () => {
    if (disabled) return;

    onClick?.();
    const shareUrl = getLinkedinShareUrl(url);
    openShareWindow(shareUrl);
  };

  return (
    <Button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={disabled}
      aria-label="Share on LinkedIn"
    >
      {children}
    </Button>
  );
}