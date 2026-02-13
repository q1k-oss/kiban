"use client";
import React from "react";

import { Button } from "../button";

import objectToGetParams, { openShareWindow } from "./utils";

export interface TwitterShareButtonProps {
  url: string;
  title?: string;
  via?: string;
  hashtags?: string[];
  related?: string[];
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Constructs a Twitter intent URL prefilled with the provided tweet data.
 *
 * @param url - The URL to include in the tweet.
 * @param options - Optional tweet parameters.
 * @param options.title - Text to prefill the tweet body.
 * @param options.via - Twitter username (without `@`) to attribute the tweet to.
 * @param options.hashtags - Array of hashtags to include (without `#`); they will be joined with commas.
 * @param options.related - Array of related Twitter usernames (without `@`); they will be joined with commas.
 * @returns The full Twitter intent URL containing the corresponding query parameters.
 * @throws Error if `url` is an empty string or falsy.
 */
function getTwitterShareUrl(
  url: string,
  options: {
    title?: string;
    via?: string;
    hashtags?: string[];
    related?: string[];
  },
) {
  if (!url) {
    throw new Error("Twitter share requires a URL");
  }

  return (
    "https://twitter.com/intent/tweet" +
    objectToGetParams({
      url,
      text: options.title,
      via: options.via,
      hashtags: options.hashtags?.join(","),
      related: options.related?.join(","),
    })
  );
}

/**
 * Renders a button that opens a centered Twitter share window prefilled with the provided tweet data.
 *
 * @param url - The URL to include in the tweet; required.
 * @param title - The text content of the tweet.
 * @param via - The Twitter username to attribute the tweet to (without `@`).
 * @param hashtags - Array of hashtags; they will be joined with commas.
 * @param related - Array of related Twitter accounts; they will be joined with commas.
 * @param children - Content rendered inside the button.
 * @param className - Optional CSS class names applied to the button.
 * @param disabled - When true, the button is non-interactive and will not open the share window.
 * @param onClick - Optional callback invoked immediately before opening the share window.
 * @returns A React element that renders a button which opens a Twitter share window populated with the provided data.
 */
export default function TwitterShareButton({
  url,
  title,
  via,
  hashtags,
  related,
  children,
  className,
  disabled = false,
  onClick,
}: TwitterShareButtonProps) {
  const handleClick = () => {
    if (disabled) return;

    onClick?.();
    const shareUrl = getTwitterShareUrl(url, { title, via, hashtags, related });
    openShareWindow(shareUrl);
  };

  return (
    <Button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={disabled}
      aria-label="Share on Twitter"
    >
      {children}
    </Button>
  );
}