import React from 'react';

import {cn} from '../../../../../utils/cn'
import { HtmlRendererConfig } from '../type';
import { generateId, extractTextContent } from '../utils';

interface HeadingRendererProps {
  level: string;
  innerHtml: string;
  attrs: Record<string, string>;
  config?: HtmlRendererConfig['headings'];
  renderContent: (html: string) => React.ReactNode;
}

const HeadingRenderer: React.FC<HeadingRendererProps> = ({
  level,
  innerHtml,
  attrs,
  config,
  renderContent,
}) => {
  const textContent = extractTextContent(innerHtml);
  const id = config?.addIds ? attrs.id || generateId(textContent) : undefined;

  const headingClassName =
    (config?.[`${level}ClassName` as keyof typeof config] as string) ||
    config?.className ||
    '';

  const HeadingTag = level as React.ElementType;

  return (
    <HeadingTag id={id} className={cn(headingClassName)}>
      {config?.addAnchors && id && (
        <a
          href={`#${id}`}
          className={cn(
            'ml-2 opacity-0 transition-opacity duration-200 no-underline text-blue-500 group-hover:opacity-100',
          )}
        >
          {config.anchorSymbol || '#'}
        </a>
      )}
      {renderContent(innerHtml)}
    </HeadingTag>
  );
};

export { HeadingRenderer };
