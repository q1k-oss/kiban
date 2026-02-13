import React from 'react';
import { HtmlRendererConfig } from '../type';
import { cn } from '@happect/ethereal-ui';

interface BlockquoteRendererProps {
  innerHtml: string;
  config?: HtmlRendererConfig['blockquote'];
  renderContent: (html: string) => React.ReactNode;
}

const BlockquoteRenderer: React.FC<BlockquoteRendererProps> = ({
  innerHtml,
  config,
  renderContent,
}) => {
  return (
    <blockquote className={cn(config?.className)} style={config?.style}>
      {config?.showIcon && (
        <span className={cn('mr-2 text-[1.2em]')}>
          {config.iconSymbol || '💬'}
        </span>
      )}
      {renderContent(innerHtml)}
    </blockquote>
  );
};

export { BlockquoteRenderer };
