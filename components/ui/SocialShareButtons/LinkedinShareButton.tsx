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

function getLinkedinShareUrl(url: string) {
  if (!url) {
    throw new Error("LinkedIn share requires a URL");
  }

  return (
    "https://www.linkedin.com/sharing/share-offsite/" +
    objectToGetParams({ url })
  );
}

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
