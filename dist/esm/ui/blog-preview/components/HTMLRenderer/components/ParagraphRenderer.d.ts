import React from 'react';
import { HtmlRendererConfig } from '../type';
interface ParagraphRendererProps {
    innerHtml: string;
    config?: HtmlRendererConfig['paragraphs'];
    renderContent: (html: string) => React.ReactNode;
}
declare const ParagraphRenderer: React.FC<ParagraphRendererProps>;
export { ParagraphRenderer };
