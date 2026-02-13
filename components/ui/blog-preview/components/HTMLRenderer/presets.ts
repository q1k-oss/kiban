// components/HtmlRenderer/presets.ts

import { HtmlRendererConfig } from "./type";




export const blogPreset: HtmlRendererConfig = {
  codeBlock: {
    className: 'blog-code-block',
    wrapperClassName: 'blog-code-wrapper',
    showLanguage: true,
    copyButton: true,
    lineNumbers: true,
  },
  headings: {
    addIds: true,
    addAnchors: false,
  },
  links: {
    openInNewTab: false,
  },
  images: {
    
    addCaption: false,
  },
  wrapper: {
    tag: 'article',
  },
  sanitization: {
    stripScripts: true,
    stripEvents: true,
  },
};

export const minimalPreset: HtmlRendererConfig = {
  codeBlock: {
    className: 'minimal-code',
    lineNumbers: false,
    copyButton: false,
  },
  sanitization: {
    stripScripts: true,
    stripStyles: true,
    stripEvents: true,
  },
};