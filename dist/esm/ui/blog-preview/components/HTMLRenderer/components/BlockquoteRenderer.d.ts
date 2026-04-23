import React from 'react';
import { HtmlRendererConfig } from '../type';
interface BlockquoteRendererProps {
    innerHtml: string;
    config?: HtmlRendererConfig['blockquote'];
    renderContent: (html: string) => React.ReactNode;
}
declare const BlockquoteRenderer: React.FC<BlockquoteRendererProps>;
export { BlockquoteRenderer };
