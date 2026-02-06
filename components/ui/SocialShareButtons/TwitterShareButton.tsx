"use client";
import React from "react";

import { Button } from "../button";

import objectToGetParams from "./utils";

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

function openShareWindow(
  shareUrl: string,
  windowWidth = 550,
  windowHeight = 400,
) {
  const left = window.screen.width / 2 - windowWidth / 2;
  const top = window.screen.height / 2 - windowHeight / 2;

  window.open(
    shareUrl,
    "share-window",
    `width=${windowWidth},height=${windowHeight},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`,
  );
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
