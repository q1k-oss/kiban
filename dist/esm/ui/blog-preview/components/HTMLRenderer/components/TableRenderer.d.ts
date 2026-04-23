import React from 'react';
import { HtmlRendererConfig } from '../type';
interface TableRendererProps {
    type: 'table' | 'thead' | 'tbody' | 'tr' | 'th' | 'td';
    innerHtml: string;
    config?: HtmlRendererConfig['table'];
    renderContent: (html: string) => React.ReactNode;
}
declare const TableRenderer: React.FC<TableRendererProps>;
export { TableRenderer };
