import React from 'react';

import { HtmlRendererConfig } from '../type';
import { BLOCK_TAGS, parseCssToReactStyle } from '../utils';

interface ParagraphRendererProps {
  innerHtml: string;
  attrs: Record<string, string>;
  config?: HtmlRendererConfig['paragraphs'];
  renderContent: (html: string) => React.ReactNode;
}

const INLINE_TAGS = new Set([
  'code', 'span', 'a', 'strong', 'em', 'b', 'i', 'u',
  'br', 'sub', 'sup', 'mark', 'small', 'del', 's',
  'abbr', 'cite', 'q', 'kbd', 'var', 'samp', 'time',
]);

const ParagraphRenderer: React.FC<ParagraphRendererProps> = ({
  innerHtml,
  attrs,
  config,
  renderContent,
}) => {
  const hasBlockChild = Array.from(innerHtml.matchAll(/<\s*([\w-]+)/g)).some(
    (match) => {
      const tag = match[1].toLowerCase();
      return BLOCK_TAGS.has(tag) && !INLINE_TAGS.has(tag);
    },
  );

  const inlineStyle = parseCssToReactStyle(attrs.style);

  // Don't wrap in <p> if it contains block elements
  if (hasBlockChild) {
    return (
      <div className={config?.className || ''} style={inlineStyle}>{renderContent(innerHtml)}</div>
    );
  }

  return <p className={config?.className || ''} style={inlineStyle}>{renderContent(innerHtml)}</p>;
};

export { ParagraphRenderer };
