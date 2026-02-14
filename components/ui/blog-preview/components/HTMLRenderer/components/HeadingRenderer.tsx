import React from 'react';

import {cn} from '../../../../../utils/cn'
import { HtmlRendererConfig } from '../type';
import { generateId, extractTextContent, parseCssToReactStyle } from '../utils';

interface HeadingRendererProps {
  level: string;
  innerHtml: string;
  attrs: Record<string, string>;
  config?: HtmlRendererConfig['headings'];
  renderContent: (html: string) => React.ReactNode;
}

// Match heading-anchor <a> tags, capturing inner content
const HEADING_ANCHOR_RE = /<a\b[^>]*class\s*=\s*["'][^"']*heading-anchor[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi;

function stripHeadingAnchors(html: string): string {
  // Replace anchor with its inner content, then check if remaining text is meaningful
  const stripped = html.replace(HEADING_ANCHOR_RE, '');
  const remainingText = stripped.replace(/<[^>]*>/g, '').trim();

  // If stripping leaves no text, preserve anchor inner content instead
  if (!remainingText) {
    return html.replace(HEADING_ANCHOR_RE, '$1');
  }
  return stripped;
}

// Extract href from the first heading-anchor in the HTML (if any)
const HEADING_ANCHOR_HREF_RE = /<a\b[^>]*class\s*=\s*["'][^"']*heading-anchor[^"']*["'][^>]*href\s*=\s*["']([^"']*)["'][^>]*>/i;
const HEADING_ANCHOR_HREF_RE2 = /<a\b[^>]*href\s*=\s*["']([^"']*)["'][^>]*class\s*=\s*["'][^"']*heading-anchor[^"']*["'][^>]*>/i;

function extractAnchorHref(html: string): string | null {
  const m = HEADING_ANCHOR_HREF_RE.exec(html) || HEADING_ANCHOR_HREF_RE2.exec(html);
  return m ? m[1] : null;
}

const HeadingRenderer: React.FC<HeadingRendererProps> = ({
  level,
  innerHtml,
  attrs,
  config,
  renderContent,
}) => {
  HEADING_ANCHOR_RE.lastIndex = 0;
  const hasExistingAnchor = HEADING_ANCHOR_RE.test(innerHtml);
  const cleanedHtml = hasExistingAnchor ? stripHeadingAnchors(innerHtml) : innerHtml;
  const existingHref = hasExistingAnchor ? extractAnchorHref(innerHtml) : null;

  const textContent = extractTextContent(cleanedHtml);
  const id = config?.addIds
    ? attrs.id || (existingHref ? existingHref.replace(/^#/, '') : null) || generateId(textContent)
    : undefined;

  const headingClassName =
    (config?.[`${level}ClassName` as keyof typeof config] as string) ||
    config?.className ||
    '';

  const HeadingTag = level as React.ElementType;
  const inlineStyle = parseCssToReactStyle(attrs.style);

  // Show hover anchor only when explicitly configured
  const showAnchor = config?.addAnchors && id;

  return (
    <HeadingTag id={id} className={cn('group', headingClassName)} style={inlineStyle}>
      {renderContent(cleanedHtml)}
      {showAnchor && (
        <a
          href={`#${id}`}
          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 no-underline text-blue-500"
        >
          {config?.anchorSymbol || '#'}
        </a>
      )}
    </HeadingTag>
  );
};

export { HeadingRenderer };
