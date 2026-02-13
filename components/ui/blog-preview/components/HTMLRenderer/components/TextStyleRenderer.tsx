import React from 'react';
import { HtmlRendererConfig } from '../type';

interface TextStyleRendererProps {
  type: 'strong' | 'b' | 'em' | 'i' | 'code' | 'u' | 'del' | 's';
  innerHtml: string;
  config?: HtmlRendererConfig['textStyles'];
  renderContent: (html: string) => React.ReactNode;
}

const TextStyleRenderer: React.FC<TextStyleRendererProps> = ({
  type,
  innerHtml,
  config,
  renderContent,
}) => {
  switch (type) {
    case 'strong':
    case 'b':
      return (
        <strong className={config?.strongClassName || ''}>
          {renderContent(innerHtml)}
        </strong>
      );

    case 'em':
    case 'i':
      return (
        <em className={config?.emClassName || ''}>
          {renderContent(innerHtml)}
        </em>
      );

    case 'code':
      return (
        <code className={config?.codeClassName || ''}>
          {innerHtml
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')}
        </code>
      );

    case 'u':
      return (
        <u className={config?.underlineClassName || ''}>
          {renderContent(innerHtml)}
        </u>
      );

    case 'del':
    case 's':
      return (
        <del className={config?.delClassName || ''}>
          {renderContent(innerHtml)}
        </del>
      );

    default:
      return null;
  }
};

export { TextStyleRenderer };
