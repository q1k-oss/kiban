import React from 'react';
import { HtmlRendererConfig } from '../type';
interface HeadingRendererProps {
    level: string;
    innerHtml: string;
    attrs: Record<string, string>;
    config?: HtmlRendererConfig['headings'];
    renderContent: (html: string) => React.ReactNode;
}
declare const HeadingRenderer: React.FC<HeadingRendererProps>;
export { HeadingRenderer };
