import React from "react";

import {
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  FacebookShareButton,
  ThreadsShareButton,
} from "@happect/ethereal-ui/ui/SocialShareButtons";

export default function Basic() {
  const shareUrl = "https://github.com";
  const shareTitle = "Check out this article";

  return (
    <div className="flex flex-wrap gap-2">
      <LinkedinShareButton
        url={shareUrl}
        title={shareTitle}
        summary="A great read about..."
        source="My Website"
      >
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
