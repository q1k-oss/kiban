import React from "react";

import {
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  FacebookShareButton,
  ThreadsShareButton,
} from "@happect/ethereal-ui/ui/SocialShareButtons";

/**
 * Demo component that renders a row of social share buttons using a fixed URL and title.
 *
 * Renders LinkedIn, Twitter (with hashtags), Facebook, Reddit, and Threads share buttons
 * configured with the component's `shareUrl` and `shareTitle`.
 *
 * @returns A JSX element containing the configured social share buttons wrapped in a flex container
 */
export default function Basic() {
  const shareUrl = "https://github.com";
  const shareTitle = "Check out this article";

  return (
    <div className="flex flex-wrap gap-2">
      <LinkedinShareButton url={shareUrl}>
        Share on LinkedIn
      </LinkedinShareButton>

      <TwitterShareButton
        url={shareUrl}
        title={shareTitle}
        hashtags={["webdev", "react"]}
      >
        Share on Twitter
      </TwitterShareButton>

      <FacebookShareButton url={shareUrl}>
        Share on Facebook
      </FacebookShareButton>

      <RedditShareButton url={shareUrl} title={shareTitle}>
        Share on Reddit
      </RedditShareButton>

      <ThreadsShareButton url={shareUrl} title={shareTitle}>
        Share on Threads
      </ThreadsShareButton>
    </div>
  );
}