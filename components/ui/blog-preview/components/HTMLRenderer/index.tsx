// components/HtmlRenderer/HtmlRenderer.tsx
'use client';
import React from 'react';

import {
  CodeBlockRenderer,
  ImageRenderer,
  HeadingRenderer,
  LinkRenderer,
  ParagraphRenderer,
  ListRenderer,
  BlockquoteRenderer,
  TableRenderer,
  TextStyleRenderer,
} from './components';
import { HtmlRendererConfig, HtmlRendererProps } from './type';
import { parseAttributes, sanitizeHtml } from './utils';

// ============= MAIN RENDERER FUNCTION =============

const renderHtmlContent = (
  html: string,
  config: HtmlRendererConfig,
): React.ReactNode => {
  const elements: React.ReactNode[] = [];
  let currentIndex = 0;
  let keyCounter = 0;

  const tagPattern = /<(\/?)([\w]+)([^>]*)>/g;
  let match: RegExpExecArray | null;

  const stack: Array<{
    tag: string;
    attributes: string;
    startIndex: number;
    children: React.ReactNode[];
  }> = [];

  while ((match = tagPattern.exec(html)) !== null) {
    const [fullMatch, slash, tagName, attributes] = match;
    const isClosing = slash === '/';
    const matchIndex = match.index;

    // Add text before this tag
    if (matchIndex > currentIndex) {
      const text = html.substring(currentIndex, matchIndex);
      if (text.length > 0) {
        if (stack.length > 0) {
          stack[stack.length - 1].children.push(text);
        } else {
          elements.push(
            <React.Fragment key={keyCounter++}>{text}</React.Fragment>,
          );
        }
      }
    }

    currentIndex = matchIndex + fullMatch.length;

    if (isClosing) {
      // Closing tag
      if (stack.length > 0 && stack[stack.length - 1].tag === tagName) {
        const element = stack.pop()!;
        const innerContent = html.substring(element.startIndex, matchIndex);
        const renderedElement = renderElement(
          element.tag,
          element.attributes,
          innerContent,
          element.children,
          config,
          keyCounter++,
        );

        if (stack.length > 0) {
          stack[stack.length - 1].children.push(renderedElement);
        } else {
          elements.push(renderedElement);
        }
      }
    } else {
      // Opening tag
      const selfClosing =
        attributes.trimEnd().endsWith('/') ||
        ['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName);

      if (selfClosing) {
        const renderedElement = renderElement(
          tagName,
          attributes,
          '',
          [],
          config,
          keyCounter++,
        );

        if (stack.length > 0) {
          stack[stack.length - 1].children.push(renderedElement);
        } else {
          elements.push(renderedElement);
        }
      } else {
        stack.push({
          tag: tagName,
          attributes,
          startIndex: currentIndex,
          children: [],
        });
      }
    }
  }

  // Add remaining text
  if (currentIndex < html.length) {
    const text = html.substring(currentIndex);
    if (text.length > 0) {
      elements.push(<React.Fragment key={keyCounter++}>{text}</React.Fragment>);
    }
  }

  return elements;
};

const renderElement = (
  tag: string,
  attributesStr: string,
  innerHtml: string,
  children: React.ReactNode[],
  config: HtmlRendererConfig,
  key: number,
): React.ReactNode => {
  const attrs = parseAttributes(attributesStr);
  const lowerTag = tag.toLowerCase();

  // Helper to render nested content
  const renderContent = (html: string) => renderHtmlContent(html, config);

  // ============= PRE/CODE BLOCKS =============
  if (lowerTag === 'pre') {
    const codeMatch = innerHtml.match(/<code([^>]*)>([\s\S]*?)<\/code>/);
    if (codeMatch) {
      const codeAttrs = parseAttributes(codeMatch[1]);
      const codeContent = codeMatch[2]
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"');

      const language = codeAttrs.class?.replace('language-', '') || '';

      return (
        <CodeBlockRenderer
          key={key}
          language={language}
          code={codeContent}
          config={config.codeBlock}
        />
      );
    }
  }

  // ============= HEADINGS =============
  if (/^h[1-6]$/.test(lowerTag)) {
    const headingConfig = { ...config, paragraphs: { className: '' } };
    const renderHeadingContent = (html: string) =>
      renderHtmlContent(html, headingConfig);
    return (
      <HeadingRenderer
        key={key}
        level={lowerTag}
        innerHtml={innerHtml}
        attrs={attrs}
        config={config.headings}
        renderContent={renderHeadingContent}
      />
    );
  }

  // ============= LINKS =============
  if (lowerTag === 'a') {
    return (
      <LinkRenderer
        key={key}
        href={attrs.href || '#'}
        innerHtml={innerHtml}
        config={config.links}
        renderContent={renderContent}
      />
    );
  }

  // ============= IMAGES =============
  if (lowerTag === 'img') {
    return (
      <ImageRenderer
        key={key}
        src={attrs.src || ''}
        alt={attrs.alt || ''}
        config={config.images}
      />
    );
  }

  // ============= PARAGRAPHS =============
  if (lowerTag === 'p') {
    return (
      <ParagraphRenderer
        key={key}
        innerHtml={innerHtml}
        config={config.paragraphs}
        renderContent={renderContent}
      />
    );
  }

  // ============= LISTS =============
  if (lowerTag === 'ul' || lowerTag === 'ol' || lowerTag === 'li') {
    const listConfig = { ...config, paragraphs: { className: '' } };
    const renderListContent = (html: string) =>
      renderHtmlContent(html, listConfig);
    return (
      <ListRenderer
        key={key}
        type={lowerTag as 'ul' | 'ol' | 'li'}
        innerHtml={innerHtml}
        config={config.lists}
        renderContent={renderListContent}
      />
    );
  }

  // ============= BLOCKQUOTE =============
  if (lowerTag === 'blockquote') {
    const blockquoteConfig = {
      ...config,
      paragraphs: { className: '' },
      lists: { ulClassName: '', olClassName: '', liClassName: '' },
    };
    const renderBlockquoteContent = (html: string) =>
      renderHtmlContent(html, blockquoteConfig);
    return (
      <BlockquoteRenderer
        key={key}
        innerHtml={innerHtml}
        config={config.blockquote}
        renderContent={renderBlockquoteContent}
      />
    );
  }

  // ============= TABLE ELEMENTS =============
  if (['table', 'thead', 'tbody', 'tr', 'th', 'td'].includes(lowerTag)) {
    return (
      <TableRenderer
        key={key}
        type={lowerTag as 'table' | 'thead' | 'tbody' | 'tr' | 'th' | 'td'}
        innerHtml={innerHtml}
        config={config.table}
        renderContent={renderContent}
      />
    );
  }

  // ============= TEXT STYLES =============
  if (['strong', 'b', 'em', 'i', 'code', 'u', 'del', 's'].includes(lowerTag)) {
    return (
      <TextStyleRenderer
        key={key}
        type={lowerTag as 'strong' | 'b' | 'em' | 'i' | 'code' | 'u' | 'del' | 's'}
        innerHtml={innerHtml}
        config={config.textStyles}
        renderContent={renderContent}
      />
    );
  }

  // ============= OTHER ELEMENTS =============
  if (lowerTag === 'br') {
    return <br key={key} />;
  }

  if (lowerTag === 'hr') {
    return <hr key={key} className={config.hr?.className} style={config.hr?.style} />;
  }

  // Default: render as the original tag
  return React.createElement(
    lowerTag,
    { key },
    renderHtmlContent(innerHtml, config),
  );
};

// ============= MAIN COMPONENT =============

export const HtmlRenderer: React.FC<HtmlRendererProps> = ({
  content,
  config = {},
  className = '',
  style = {},
}) => {
  // Pre-process HTML
  let processedContent = content;

  if (config.preprocessing?.customTransform) {
    processedContent = config.preprocessing.customTransform(processedContent);
  }

  if (config.preprocessing?.replacePatterns) {
    config.preprocessing.replacePatterns.forEach(({ find, replace }) => {
      processedContent = processedContent.replace(find, replace);
    });
  }

  if (config.preprocessing?.removeEmptyParagraphs) {
    processedContent = processedContent.replace(/<p>\s*<\/p>/g, '');
    processedContent = processedContent.replace(/<p><br\s*\/?><\/p>/g, '');
  }

  if (config.preprocessing?.trimWhitespace) {
    processedContent = processedContent.trim();
  }

  // Sanitize HTML
  processedContent = sanitizeHtml(processedContent, config.sanitization);

  // Render content
  const renderedContent = renderHtmlContent(processedContent, config);

  // Wrapper
  const wrapperTag = config.wrapper?.tag || 'div';

  const wrapperClassName =
    `${config.wrapper?.className || ''} ${className}`.trim();
  const wrapperStyle = { ...config.wrapper?.style, ...style };

  return React.createElement(
    wrapperTag,
    { className: wrapperClassName, style: wrapperStyle },
    renderedContent,
  );
};

export default HtmlRenderer;
