import React from 'react';

import {cn} from '../../../../../utils/cn'
import { HtmlRendererConfig } from '../type';

interface ListRendererProps {
  type: 'ul' | 'ol' | 'li';
  innerHtml: string;
  config?: HtmlRendererConfig['lists'];
  renderContent: (html: string) => React.ReactNode;
}

const ListRenderer: React.FC<ListRendererProps> = ({
  type,
  innerHtml,
  config,
  renderContent,
}) => {
  if (type === 'ul') {
    return (
      <ul className={cn('text-inherit', config?.ulClassName)}>{renderContent(innerHtml)}</ul>
    );
  }

  if (type === 'ol') {
    return (
      <ol className={cn('text-inherit', config?.olClassName)}>{renderContent(innerHtml)}</ol>
    );
  }

  return (
    <li className={cn('text-inherit', config?.liClassName)}>{renderContent(innerHtml)}</li>
  );
};

export { ListRenderer };
