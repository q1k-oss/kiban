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
