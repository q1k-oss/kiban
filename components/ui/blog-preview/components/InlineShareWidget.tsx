"use client";

import { useEffect, useRef, useState } from "react";

import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "../../SocialShareButtons";

interface InlineShareWidgetProps {
  url: string;
  title?: string;
  className?: string;
}

const triggerStyle =
  "flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 active:scale-95 transition-all cursor-pointer";

const iconButtonStyle =
  "flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 active:scale-95 transition-all cursor-pointer";

export default function InlineShareWidget({
  url,
  title,
  className,
}: InlineShareWidgetProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const handleCopyLink = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard may be unavailable (insecure context); silently noop.
    }
  };

  return (
    <div ref={wrapperRef} className={`relative ${className ?? ""}`}>
      <Button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={triggerStyle}
        aria-label={open ? "Close share menu" : "Share this post"}
        aria-expanded={open}
      >
        <AppIcon
          iconName={open ? "x" : "share-2"}
          size={15}
          className="text-zinc-200"
        />
      </Button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 z-50 flex flex-col items-center gap-2 p-2 rounded-2xl border border-white/10 bg-zinc-950/90 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.4)] animate-in fade-in slide-in-from-top-1 duration-150"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.4)" }}
          role="menu"
        >
          <Button
            type="button"
            onClick={handleCopyLink}
            className={iconButtonStyle}
            aria-label="Copy link"
          >
            <AppIcon
              iconName={copied ? "check" : "link"}
              size={15}
              className="text-zinc-200"
            />
          </Button>
          <TwitterShareButton className={iconButtonStyle} url={url} title={title}>
            <AppIcon
              iconName="custom-xtwitter"
              size={14}
              className="text-zinc-200"
              source="custom"
            />
          </TwitterShareButton>
          <FacebookShareButton className={iconButtonStyle} url={url}>
            <AppIcon
              iconName="custom-facebook-fill"
              size={15}
              className="text-zinc-200"
              source="custom"
            />
          </FacebookShareButton>
          <LinkedinShareButton className={iconButtonStyle} url={url}>
            <AppIcon
              iconName="custom-linkedin-fill"
              size={14}
              className="text-zinc-200"
              source="custom"
            />
          </LinkedinShareButton>
          <RedditShareButton className={iconButtonStyle} url={url} title={title}>
            <AppIcon
              iconName="custom-reddit-fill"
              size={15}
              className="text-zinc-200"
              source="custom"
            />
          </RedditShareButton>
        </div>
      )}

      {copied && (
        <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs rounded-md bg-zinc-900 border border-white/10 text-zinc-200 whitespace-nowrap animate-in fade-in slide-in-from-right-1 duration-200">
          Link copied
        </div>
      )}
    </div>
  );
}
