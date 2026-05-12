import React from 'react';

import {cn} from '../../../../../utils/cn'
import { HtmlRendererConfig } from '../type';

interface ListRendererProps {
  type: 'ul' | 'ol' | 'li';
  innerHtml: string;
  attrs?: Record<string, string>;
  config?: HtmlRendererConfig['lists'];
  renderContent: (html: string) => React.ReactNode;
}

const ListRenderer: React.FC<ListRendererProps> = ({
  type,
  innerHtml,
  attrs,
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

  // Preserve `id` so inline `<a href="#…">` markers (the wiki-style
  // citation flow) can scroll to the right reference row.
  return (
    <li id={attrs?.id} className={cn('text-inherit', config?.liClassName)}>{renderContent(innerHtml)}</li>
  );
};

export { ListRenderer };
