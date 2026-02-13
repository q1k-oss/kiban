// components/HtmlRenderer/HtmlRenderer.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { CodeBlockRenderer, ImageRenderer, HeadingRenderer, LinkRenderer, ParagraphRenderer, ListRenderer, BlockquoteRenderer, TableRenderer, TextStyleRenderer, } from './components';
import { parseAttributes, parseCssToReactStyle, sanitizeHtml } from './utils';
// ============= MAIN RENDERER FUNCTION =============
const renderHtmlContent = (html, config) => {
    const elements = [];
    let currentIndex = 0;
    let keyCounter = 0;
    const tagPattern = /<(\/?)([\w]+)([^>]*)>/g;
    let match;
    const stack = [];
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
                }
                else {
                    elements.push(_jsx(React.Fragment, { children: text }, keyCounter++));
                }
            }
        }
        currentIndex = matchIndex + fullMatch.length;
        if (isClosing) {
            // Closing tag
            if (stack.length > 0 && stack[stack.length - 1].tag === tagName) {
                const element = stack.pop();
                const innerContent = html.substring(element.startIndex, matchIndex);
                const renderedElement = renderElement(element.tag, element.attributes, innerContent, element.children, config, keyCounter++);
                if (stack.length > 0) {
                    stack[stack.length - 1].children.push(renderedElement);
                }
                else {
                    elements.push(renderedElement);
                }
            }
        }
        else {
            // Opening tag
            const selfClosing = attributes.trimEnd().endsWith('/') ||
                ['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName);
            if (selfClosing) {
                const renderedElement = renderElement(tagName, attributes, '', [], config, keyCounter++);
                if (stack.length > 0) {
                    stack[stack.length - 1].children.push(renderedElement);
                }
                else {
                    elements.push(renderedElement);
                }
            }
            else {
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
            elements.push(_jsx(React.Fragment, { children: text }, keyCounter++));
        }
    }
    return elements;
};
const renderElement = (tag, attributesStr, innerHtml, children, config, key) => {
    var _a, _b, _c;
    const attrs = parseAttributes(attributesStr);
    const lowerTag = tag.toLowerCase();
    // Helper to render nested content
    const renderContent = (html) => renderHtmlContent(html, config);
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
            const language = ((_a = codeAttrs.class) === null || _a === void 0 ? void 0 : _a.replace('language-', '')) || '';
            return (_jsx(CodeBlockRenderer, { language: language, code: codeContent, config: config.codeBlock }, key));
        }
    }
    // ============= HEADINGS =============
    if (/^h[1-6]$/.test(lowerTag)) {
        const headingConfig = Object.assign(Object.assign({}, config), { paragraphs: { className: '' } });
        const renderHeadingContent = (html) => renderHtmlContent(html, headingConfig);
        return (_jsx(HeadingRenderer, { level: lowerTag, innerHtml: innerHtml, attrs: attrs, config: config.headings, renderContent: renderHeadingContent }, key));
    }
    // ============= LINKS =============
    if (lowerTag === 'a') {
        return (_jsx(LinkRenderer, { href: attrs.href || '#', innerHtml: innerHtml, config: config.links, renderContent: renderContent }, key));
    }
    // ============= IMAGES =============
    if (lowerTag === 'img') {
        return (_jsx(ImageRenderer, { src: attrs.src || '', alt: attrs.alt || '', attrs: attrs, config: config.images }, key));
    }
    // ============= PARAGRAPHS =============
    if (lowerTag === 'p') {
        return (_jsx(ParagraphRenderer, { innerHtml: innerHtml, attrs: attrs, config: config.paragraphs, renderContent: renderContent }, key));
    }
    // ============= LISTS =============
    if (lowerTag === 'ul' || lowerTag === 'ol' || lowerTag === 'li') {
        const listConfig = Object.assign(Object.assign({}, config), { paragraphs: { className: '' } });
        const renderListContent = (html) => renderHtmlContent(html, listConfig);
        return (_jsx(ListRenderer, { type: lowerTag, innerHtml: innerHtml, config: config.lists, renderContent: renderListContent }, key));
    }
    // ============= BLOCKQUOTE =============
    if (lowerTag === 'blockquote') {
        const blockquoteConfig = Object.assign(Object.assign({}, config), { paragraphs: { className: '' }, lists: { ulClassName: '', olClassName: '', liClassName: '' } });
        const renderBlockquoteContent = (html) => renderHtmlContent(html, blockquoteConfig);
        return (_jsx(BlockquoteRenderer, { innerHtml: innerHtml, config: config.blockquote, renderContent: renderBlockquoteContent }, key));
    }
    // ============= TABLE ELEMENTS =============
    if (['table', 'thead', 'tbody', 'tr', 'th', 'td'].includes(lowerTag)) {
        return (_jsx(TableRenderer, { type: lowerTag, innerHtml: innerHtml, config: config.table, renderContent: renderContent }, key));
    }
    // ============= TEXT STYLES =============
    if (['strong', 'b', 'em', 'i', 'code', 'u', 'del', 's'].includes(lowerTag)) {
        return (_jsx(TextStyleRenderer, { type: lowerTag, innerHtml: innerHtml, config: config.textStyles, renderContent: renderContent }, key));
    }
    // ============= OTHER ELEMENTS =============
    if (lowerTag === 'br') {
        return _jsx("br", {}, key);
    }
    if (lowerTag === 'hr') {
        return _jsx("hr", { className: (_b = config.hr) === null || _b === void 0 ? void 0 : _b.className, style: (_c = config.hr) === null || _c === void 0 ? void 0 : _c.style }, key);
    }
    // Default: render as the original tag, preserving style and class
    const defaultProps = { key };
    if (attrs.style)
        defaultProps.style = parseCssToReactStyle(attrs.style);
    if (attrs.class)
        defaultProps.className = attrs.class;
    return React.createElement(lowerTag, defaultProps, renderHtmlContent(innerHtml, config));
};
// ============= MAIN COMPONENT =============
export const HtmlRenderer = ({ content, config = {}, className = '', style = {}, }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    // Pre-process HTML
    let processedContent = content;
    if ((_a = config.preprocessing) === null || _a === void 0 ? void 0 : _a.customTransform) {
        processedContent = config.preprocessing.customTransform(processedContent);
    }
    if ((_b = config.preprocessing) === null || _b === void 0 ? void 0 : _b.replacePatterns) {
        config.preprocessing.replacePatterns.forEach(({ find, replace }) => {
            processedContent = processedContent.replace(find, replace);
        });
    }
    if ((_c = config.preprocessing) === null || _c === void 0 ? void 0 : _c.removeEmptyParagraphs) {
        processedContent = processedContent.replace(/<p>\s*<\/p>/g, '');
        processedContent = processedContent.replace(/<p><br\s*\/?><\/p>/g, '');
    }
    if ((_d = config.preprocessing) === null || _d === void 0 ? void 0 : _d.trimWhitespace) {
        processedContent = processedContent.trim();
    }
    // Sanitize HTML
    processedContent = sanitizeHtml(processedContent, config.sanitization);
    // Render content
    const renderedContent = renderHtmlContent(processedContent, config);
    // Wrapper
    const wrapperTag = ((_e = config.wrapper) === null || _e === void 0 ? void 0 : _e.tag) || 'div';
    const wrapperClassName = `${((_f = config.wrapper) === null || _f === void 0 ? void 0 : _f.className) || ''} ${className}`.trim();
    const wrapperStyle = Object.assign(Object.assign({}, (_g = config.wrapper) === null || _g === void 0 ? void 0 : _g.style), style);
    return React.createElement(wrapperTag, { className: wrapperClassName, style: wrapperStyle }, renderedContent);
};
export default HtmlRenderer;
