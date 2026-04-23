import React from 'react';
import { HtmlRendererConfig } from '../type';
interface LinkRendererProps {
    href: string;
    innerHtml: string;
    config?: HtmlRendererConfig['links'];
    renderContent: (html: string) => React.ReactNode;
}
declare const LinkRenderer: React.FC<LinkRendererProps>;
export { LinkRenderer };
