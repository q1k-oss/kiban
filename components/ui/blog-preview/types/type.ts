
import type { HtmlRendererConfig } from '../components/HTMLRenderer/type';

export type BlogStatus = 'draft' | 'published' | 'archived';

export interface Flag {
  id?: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export type BlogSchemaType =
  | 'Article'
  | 'BlogPosting'
  | 'NewsArticle'
  | 'FAQPage'
  | 'BreadcrumbList'
  | 'HowTo'
  | 'Review';

export interface BlogFaqItem {
  question: string;
  answer: string;
}

export interface Blog {
  id?: number;
  title?: string;
  slug?: string;
  content?: string;
  excerpt?: string;
  status?: BlogStatus;
  authorId?: string;
  authorName?: string;
  authorEmail?: string;
  authorRole?: string;
  authorBio?: string;
  authorAvatar?: string;
  coverImage?: string;
  coverImageAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  schemaTypes?: BlogSchemaType[];
  faqItems?: BlogFaqItem[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  flagId?: number;
  flag?: Flag;
  promoted?: boolean;
  promotedAt?: string;
  summary?: string;
  tags?: string;
  prompt?: string;
  readTime?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface IBlogPreviewProp {
  loading: boolean;
  blog?: Blog;
  htmlRendererConfig?: HtmlRendererConfig;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  sidebarClassName?: string;
  tagsClassName?: string;
  tagClassName?: string;
  onBuild?: () => void;
  shareUrl?: string;
}


export interface ISingleBlogHeaderProp {
  blogFlagName: string | undefined;
  title: string;
  excerpt: string | undefined;
  updatedAt: string;
  readTime?: string;
  className?: string;
}

export interface ISingleBlogAuthorProp {
  className?: string;
  blogAuthorName: string;
  blogAuthorEmail: string;
  blogAuthorRole?: string;
  blogAuthorBio?: string;
  blogAuthorAvatar?: string;
}

export interface ISingleBlogFaqProp {
  faqItems: BlogFaqItem[];
  className?: string;
}

export interface ISingleBlogSummaryProp {
  blogSummary: string;
  className?: string;
}

export interface ISingleBlogPromptProp {
  blogPrompt: string;
  className?: string;
  onBuild?: () => void;
}
