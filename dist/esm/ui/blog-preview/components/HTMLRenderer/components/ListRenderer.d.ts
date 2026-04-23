import React from 'react';
import { HtmlRendererConfig } from '../type';
interface ListRendererProps {
    type: 'ul' | 'ol' | 'li';
    innerHtml: string;
    config?: HtmlRendererConfig['lists'];
    renderContent: (html: string) => React.ReactNode;
}
declare const ListRenderer: React.FC<ListRendererProps>;
export { ListRenderer };
