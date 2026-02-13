// ============= TYPES =============

import { CSSProperties } from "react";

export interface HtmlRendererConfig {
  // Code block configuration
  codeBlock?: {
    className?: string;
    wrapperClassName?: string;
    showLanguage?: boolean;
    copyButton?: boolean;
    lineNumbers?: boolean;
    style?: CSSProperties;
    headerLanguageClassName?:string;
    copyButtonClassName?: string;
  };

  // Heading configuration
  headings?: {
    addIds?: boolean;
    addAnchors?: boolean;
    anchorSymbol?: string;
    h1ClassName?: string;
    h2ClassName?: string;
    h3ClassName?: string;
    h4ClassName?: string;
    h5ClassName?: string;
    h6ClassName?: string;
    className?: string;
  };

  // Link configuration
  links?: {
    openInNewTab?: boolean;
    noFollow?: boolean;
    className?: string;
    onLinkClick?: (href: string, event: React.MouseEvent) => void;
  };

  // Image configuration
  images?: {
    className?: string;
    wrapperClassName?: string;
    addCaption?: boolean;
    onImageError?: (src: string) => string; // Returns fallback image
    placeholder?: string;
    priority?: boolean; // Next.js Image priority
    quality?: number; // Next.js Image quality (1-100)
    fill?: boolean; // Next.js Image fill
    sizes?: string; // Next.js Image sizes
    width?: number; // Default width if not using fill
    height?: number; // Default height if not using fill
  };

  // Paragraph configuration
  paragraphs?: {
    className?: string;
  };

  // List configuration
  lists?: {
    ulClassName?: string;
    olClassName?: string;
    liClassName?: string;
  };

  // Blockquote configuration
  blockquote?: {
    className?: string;
    style?: CSSProperties;
    showIcon?: boolean;
    iconSymbol?: string;
  };

  // Table configuration
  table?: {
    className?: string;
    theadClassName?: string;
    tbodyClassName?: string;
    trClassName?: string;
    thClassName?: string;
    tdClassName?: string;
    responsive?: boolean;
    striped?: boolean;
  };

  // Inline text styles
  textStyles?: {
    strongClassName?: string;
    emClassName?: string;
    codeClassName?: string;
    underlineClassName?: string;
    delClassName?: string;
  };

  // Horizontal rule configuration
  hr?: {
    className?: string;
    style?: CSSProperties;
  };

  // Wrapper configuration
  wrapper?: {
    className?: string;
    style?: CSSProperties;
    tag?: React.ElementType;
  };

  // Pre-processing
  preprocessing?: {
    removeEmptyParagraphs?: boolean;
    trimWhitespace?: boolean;
    replacePatterns?: Array<{ find: string | RegExp; replace: string }>;
    customTransform?: (html: string) => string;
  };

  // Sanitization (basic)
  sanitization?: {
    allowedTags?: string[];
    stripScripts?: boolean;
    stripStyles?: boolean;
    stripEvents?: boolean;
  };
}

export interface HtmlRendererProps {
  content: string;
  config?: HtmlRendererConfig;
  className?: string;
  style?: CSSProperties;
}