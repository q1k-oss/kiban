import React from 'react';

export interface IBlog {
  title: string;
  excerpt?: string;
  content: string;
  summary?: string;
  prompt?: string;
  tags?: string;
  authorName?: string;
  authorEmail?: string;
  updatedAt: string;
  flag?: {
    name: string;
  };
}

export interface ISingleBlogViewProp {
  loading: boolean;
  blog: IBlog;
  error: string | null;
}

export interface ISingleBlogControllerProp {
  children: React.ReactNode;
  blogSlug: string;
}

export interface ISingleBlogHeaderProp {
  blogFlagName: string | undefined;
  title: string;
  excerpt: string | undefined;
  updatedAt: string;
  className?: string;
}

export interface ISingleBlogAuthorProp {
  className?: string;
  blogAuthorName: string;
  blogAuthorEmail: string;
}

export interface ISingleBlogSummaryProp {
  blogSummary: string;
  className?: string;
}

export interface ISingleBlogPromptProp {
  blogPrompt: string;
  className?: string;
}
