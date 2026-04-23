import React from 'react';
import { HtmlRendererConfig } from '../type';
interface TextStyleRendererProps {
    type: 'strong' | 'b' | 'em' | 'i' | 'code' | 'u' | 'del' | 's';
    innerHtml: string;
    config?: HtmlRendererConfig['textStyles'];
    renderContent: (html: string) => React.ReactNode;
}
declare const TextStyleRenderer: React.FC<TextStyleRendererProps>;
export { TextStyleRenderer };
