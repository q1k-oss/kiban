import React from 'react';
import { HtmlRendererConfig } from '../type';
import { BLOCK_TAGS } from '../utils';

interface ParagraphRendererProps {
  innerHtml: string;
  config?: HtmlRendererConfig['paragraphs'];
  renderContent: (html: string) => React.ReactNode;
}

const ParagraphRenderer: React.FC<ParagraphRendererProps> = ({
  innerHtml,
  config,
  renderContent,
}) => {
  const hasBlockChild = Array.from(innerHtml.matchAll(/<\s*([\w-]+)/g)).some(
    (match) => BLOCK_TAGS.has(match[1].toLowerCase()),
  );

  // Don't wrap in <p> if it contains block elements
  if (hasBlockChild) {
    return (
      <div className={config?.className || ''}>{renderContent(innerHtml)}</div>
    );
  }

  return <p className={config?.className || ''}>{renderContent(innerHtml)}</p>;
};

export { ParagraphRenderer };
