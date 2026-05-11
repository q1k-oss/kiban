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

// Arbitrary hex bg instead of `bg-zinc-900` so the rule lands as
// `background-color: #18181b !important` style precedence without any
// chance of leaking through the Tailwind opacity variable.
const buttonStyle =
  "border border-border-3 rounded-sm p-2 cursor-pointer h-fit bg-[#18181b] hover:bg-white/10";

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
        className={buttonStyle}
        aria-label={open ? "Close share menu" : "Share this post"}
        aria-expanded={open}
      >
        <AppIcon
          iconName={open ? "x" : "share-2"}
          size={14}
          className="text-primary-text"
        />
      </Button>

      {open && (
        // Solid hex bg (not bg-zinc-900) so the page <hr> can never leak
        // through, regardless of stacking-context opacity quirks.
        <div
          className="absolute right-0 top-full mt-2 z-50 flex flex-col items-center gap-1.5 p-1.5 rounded-md bg-[#18181b] border border-white/15 shadow-xl"
          role="menu"
        >
          <Button
            type="button"
            onClick={handleCopyLink}
            className={buttonStyle}
            aria-label="Copy link"
          >
            <AppIcon
              iconName={copied ? "check" : "link"}
              size={14}
              className="text-primary-text"
            />
          </Button>
          <TwitterShareButton className={buttonStyle} url={url} title={title}>
            <AppIcon
              iconName="custom-xtwitter"
              size={14}
              className="text-primary-text"
              source="custom"
            />
          </TwitterShareButton>
          <FacebookShareButton className={buttonStyle} url={url}>
            <AppIcon
              iconName="custom-facebook-fill"
              size={14}
              className="text-primary-text"
              source="custom"
            />
          </FacebookShareButton>
          <LinkedinShareButton className={buttonStyle} url={url}>
            <AppIcon
              iconName="custom-linkedin-fill"
              size={14}
              className="text-primary-text"
              source="custom"
            />
          </LinkedinShareButton>
          <RedditShareButton className={buttonStyle} url={url} title={title}>
            <AppIcon
              iconName="custom-reddit-fill"
              size={14}
              className="text-primary-text"
              source="custom"
            />
          </RedditShareButton>
        </div>
      )}

      {copied && (
        <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-xs rounded bg-secondary-text text-black! whitespace-nowrap animate-in fade-in slide-in-from-right-1 duration-200">
          Link Copied!
        </div>
      )}
    </div>
  );
}
