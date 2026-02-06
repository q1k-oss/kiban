"use client";
import React from "react";

import { Button } from "../button";

import objectToGetParams from "./utils";


export interface LinkedinShareButtonProps {
  url: string;
  title?: string;
  summary?: string;
  source?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function openShareWindow(
  shareUrl: string,
  windowWidth = 750,
  windowHeight = 600,
) {
  const left = window.screen.width / 2 - windowWidth / 2;
  const top = window.screen.height / 2 - windowHeight / 2;

  window.open(
    shareUrl,
    "share-window",
    `width=${windowWidth},height=${windowHeight},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`,
  );
}

function getLinkedinShareUrl(
  url: string,
  options: { title?: string; summary?: string; source?: string },
) {
  if (!url) {
    throw new Error("LinkedIn share requires a URL");
  }

  return (
    "https://linkedin.com/shareArticle" +
    objectToGetParams({ url, mini: "true", ...options })
  );
}

export default function LinkedinShareButton({
  url,
  title,
  summary,
  source,
  children,
  className,
  disabled = false,
  onClick,
}: LinkedinShareButtonProps) {
  const handleClick = () => {
    if (disabled) return;

    onClick?.();
    const shareUrl = getLinkedinShareUrl(url, { title, summary, source });
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
