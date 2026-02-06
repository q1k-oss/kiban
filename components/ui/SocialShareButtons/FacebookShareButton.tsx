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
