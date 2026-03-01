"use client";

import React, { useState } from "react";

import { AppIcon } from "../app-icon";
import { BorderMovingWrapper } from "../border-moving-wrapper";
import { Button } from "../button";
import { Skeleton } from "../skeleton";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "../SocialShareButtons";

import FloatingBuildAgentButton from "./components/FloatingBuildAgentButton";
import HtmlRenderer from "./components/HTMLRenderer";
import SingleBlogAuthor from "./components/SingleBlogAuthor";
import SingleBlogHeader from "./components/SingleBlogHeader";
import { SingleBlogPrompt } from "./components/SingleBlogPrompt";
import { SingleBlogSummary } from "./components/SingleBlogSummary";
import SingleBlogAuthorSkeleton from "./components/skeletons/SingleBlogAuthorSkeleton";
import { SingleBlogContentSkeleton } from "./components/skeletons/SingleBlogContentSkeleton";
import { SingleBlogHeaderSkeleton } from "./components/skeletons/SingleBlogHeaderSkeleton";
import SingleBlogPromptSkeleton from "./components/skeletons/SingleBlogPromptSkeleton";
import { SingleBlogSummarySkeleton } from "./components/skeletons/SingleBlogSummarySkeleton";
import { SingleBlogTOCSkeleton } from "./components/skeletons/SingleBlogTOCSkeleton";
import TableOfContent from "./components/TableOfContent";
import { IBlogPreviewProp } from "./types/type";

const defaultHtmlRendererConfig = {
  codeBlock: {
    wrapperClassName:
      "border border-stroke p-6 rounded-xl text-icon-color-default text-base",
    showLanguage: true,
    copyButton: true,
    lineNumbers: false,
    className: "mt-4 text-icon-color-default font-light text-sm leading-6 py-1",
    headerLanguageClassName: "text-icon-color-default text-md! capitalize pb-4",
  },
  headings: {
    addIds: true,
    h1ClassName: "text-2xl font-bold mt-8 mb-5",
    h2ClassName: "text-xl font-bold mt-6 mb-4",
    h3ClassName: "text-lg font-semibold mt-4 mb-3",
  },
  links: {
    openInNewTab: false,
  },
  images: {
    className: "rounded-sm shadow-md",
    addCaption: true,
  },
  paragraphs: {
    className: "text-secondary-text text-lg font-light ",
  },
  blockquote: {
    className:
      "border-l border-stroke bg-white/5 py-2 my-4 italic px-2 text-secondary-text",
  },
  wrapper: {
    tag: "article" as const,
    className: "prose prose-lg",
  },
  lists: {
    ulClassName: "list-disc ml-6 my-5",
    olClassName: "list-decimal ml-6 my-5 font-bold",
    liClassName: "my-1 font-semi-bold",
  },
  hr: {
    className: "my-8 border-t border-border-3 ",
  },
  sanitization: {
    stripScripts: true,
    stripEvents: true,
    stripStyles: false,
  },
};

const BlogPreview: React.FC<IBlogPreviewProp> = ({
  loading,
  blog,
  htmlRendererConfig,
  className = "md:pt-5",
  headerClassName,
  contentClassName = "w-full px-0 md:px-6",
  sidebarClassName = "hidden md:block w-full max-h-screen overflow-y-scroll max-w-xs sticky top-4 pb-20 no-scrollbar",
  tagsClassName = "flex items-start justify-start gap-4 mt-12",
  tagClassName = "py-2 px-4 text-sm bg-minimap border border-border-3 font-light rounded-sm text-secondary-text",
  onBuild,
  shareUrl,
}) => {
  const [copied, setCopied] = useState(false);
  const url =
    shareUrl ||
    (typeof window !== "undefined" && blog?.slug
      ? `${window.location.origin}/blogs/${blog.slug}`
      : "");

  const handleCopyLink = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback ignored
    }
  };

  const renderSocialMediaIcons = () => {
    const baseStyle =
      "border border-border-3 rounded-sm p-2.5 cursor-pointer h-fit bg-transparent hover:bg-transparent";
    if (loading) {
      return Array.from({ length: 5 }).map((_, idx) => (
        <Skeleton key={idx} className="w-10 h-10" />
      ));
    }

    return (
      <div className="flex items-center gap-2">
        <div className="relative">
          <Button className={baseStyle} onClick={handleCopyLink}>
            <AppIcon
              iconName={copied ? "check" : "link"}
              size={15}
              className="text-primary-text"
            />
          </Button>
          {copied && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded-4xl bg-secondary-text text-black! whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-200">
              Copied to clipboard!
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stroke" />
            </div>
          )}
        </div>
        <LinkedinShareButton className={baseStyle} url={url}>
          <AppIcon
            iconName="custom-linkedin-fill"
            size={15}
            className="text-primary-text"
            source="custom"
          />
        </LinkedinShareButton>
        <TwitterShareButton className={baseStyle} url={url} title={blog?.title}>
          <AppIcon
            iconName="custom-xtwitter"
            size={15}
            className="text-primary-text"
            source="custom"
          />
        </TwitterShareButton>
        <RedditShareButton className={baseStyle} url={url} title={blog?.title}>
          <AppIcon
            iconName="custom-reddit-fill"
            size={16}
            className="text-primary-text"
            source="custom"
          />
        </RedditShareButton>
        <FacebookShareButton className={baseStyle} url={url}>
          <AppIcon
            iconName="custom-facebook-fill"
            size={16}
            className="text-primary-text"
            source="custom"
          />
        </FacebookShareButton>
      </div>
    );
  };

  const renderBlogHeader = () => {
    if (loading) return <SingleBlogHeaderSkeleton />;
    return (
      <SingleBlogHeader
        title={blog?.title ?? ""}
        excerpt={blog?.excerpt}
        blogFlagName={blog?.flag?.name}
        updatedAt={blog?.updatedAt ?? ""}
        readTime={blog?.readTime}
        className="px-0 md:px-6 pt-4 md:pt-14 pb-6"
      />
    );
  };

  const renderBlogSummary = () => {
    if (loading) return <SingleBlogSummarySkeleton />;
    if (!blog?.summary) return null;
    return <SingleBlogSummary blogSummary={blog.summary} />;
  };

  const renderBlogContent = () => {
    if (loading) return <SingleBlogContentSkeleton />;
    if (!blog?.content) return null;
    const mergedConfig = htmlRendererConfig
      ? Object.keys({
          ...defaultHtmlRendererConfig,
          ...htmlRendererConfig,
        }).reduce(
          (acc, key) => {
            const k = key as keyof typeof defaultHtmlRendererConfig;
            const defaultVal = defaultHtmlRendererConfig[k];
            const userVal = htmlRendererConfig[k];
            if (
              defaultVal &&
              userVal &&
              typeof defaultVal === "object" &&
              typeof userVal === "object" &&
              !Array.isArray(defaultVal)
            ) {
              (acc as Record<string, unknown>)[key] = {
                ...defaultVal,
                ...userVal,
              };
            } else {
              (acc as Record<string, unknown>)[key] =
                userVal !== undefined ? userVal : defaultVal;
            }
            return acc;
          },
          {} as typeof defaultHtmlRendererConfig,
        )
      : defaultHtmlRendererConfig;
    return (
      <div className="w-full">
        <HtmlRenderer content={blog.content} config={mergedConfig} />
      </div>
    );
  };

  const renderBlogTag = () => {
    if (loading) {
      return Array.from({ length: 4 }).map((_, idx) => (
        <Skeleton key={idx} className="w-16 h-8" />
      ));
    }
    if (!blog?.tags) return null;
    const tagsArray = blog.tags.split(",");
    return tagsArray.map((tag, idx) => (
      <span key={idx} className={tagClassName}>
        {tag}
      </span>
    ));
  };

  const renderAuthorDetails = () => {
    if (loading) return <SingleBlogAuthorSkeleton />;
    if (!blog?.authorEmail || !blog?.authorName) return null;
    return (
      <SingleBlogAuthor
        blogAuthorEmail={blog.authorEmail}
        blogAuthorName={blog.authorName}
      />
    );
  };

  const renderBlogTOC = () => {
    if (loading) return <SingleBlogTOCSkeleton />;
    if (!blog?.content) return null;
    return <TableOfContent blogContent={blog.content} />;
  };

  const renderBlogPrompt = () => {
    if (loading) return <SingleBlogPromptSkeleton />;
    if (!blog?.prompt) return null;
    return <SingleBlogPrompt blogPrompt={blog.prompt} onBuild={onBuild} />;
  };

  return (
    <div className={className}>
      <div className={headerClassName}>{renderBlogHeader()}</div>
      <div className="flex items-start gap-10 relative mt-2 md:mt-6 ">
        <div className={contentClassName}>
          <div className="mb-6">
            <BorderMovingWrapper
              colors={[
                "#C3946F99",
                "#F49D5699",
                "#FFF2B7",
                "#FEEEB2FA",
                "#F4C656",
              ]}
              animationMode="loop"
              strokeWidth={1}
            >
              {renderBlogSummary()}
            </BorderMovingWrapper>
          </div>
          <div className="md:px-8">
            <div>{renderBlogContent()}</div>
            {(loading || blog?.tags) && (
              <div className={tagsClassName}>
                <span className="text-lg  text-icon-color-default mr-4">
                  Tags:
                </span>
                <div className="flex flex-wrap justify-start gap-4">
                  {renderBlogTag()}
                </div>
              </div>
            )}
            {(loading || (blog?.authorEmail && blog?.authorName)) && (
              <div className=" mt-12">{renderAuthorDetails()}</div>
            )}
          </div>
        </div>
        <div className={sidebarClassName}>
          {renderBlogTOC()}
          <div className="flex items-center justify-center gap-2 my-10">
            {renderSocialMediaIcons()}
          </div>
          {(loading || blog?.prompt) && (
            <div className="mt-10">
              <span className="text-primary-text font-semibold text-lg">
                Ready to turn ideas into action?
              </span>
              <div className="mt-4">
                <BorderMovingWrapper
                  colors={[
                    "#C3946F99",
                    "#F49D5699",
                    "#FFF2B7",
                    "#FEEEB2FA",
                    "#F4C656",
                  ]}
                  animationMode="loop"
                  strokeWidth={1}
                >
                  {renderBlogPrompt()}
                </BorderMovingWrapper>
              </div>
            </div>
          )}
        </div>
      </div>
      <FloatingBuildAgentButton />
    </div>
  );
};

export default BlogPreview;
export { BlogPreview };
export type { IBlogPreviewProp, Blog, BlogStatus, Flag } from "./types/type";
export type { HtmlRendererConfig } from "./components/HTMLRenderer/type";
