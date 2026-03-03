import React from 'react';

import {cn} from '../../../../../utils/cn'
import { HtmlRendererConfig } from '../type';

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
