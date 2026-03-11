import React from "react";

import {
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  FacebookShareButton,
  ThreadsShareButton,
} from "@q1k-oss/kiban/ui/SocialShareButtons";

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
