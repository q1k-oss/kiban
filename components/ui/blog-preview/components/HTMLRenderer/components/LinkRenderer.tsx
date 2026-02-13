import React from 'react';
import { HtmlRendererConfig } from '../type';

interface LinkRendererProps {
  href: string;
  innerHtml: string;
  config?: HtmlRendererConfig['links'];
  renderContent: (html: string) => React.ReactNode;
}

const LinkRenderer: React.FC<LinkRendererProps> = ({
  href,
  innerHtml,
  config,
  renderContent,
}) => {
  const linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    href: href || '#',
    className: config?.className || '',
  };

  if (config?.openInNewTab) {
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  }

  if (config?.noFollow) {
    linkProps.rel = linkProps.rel ? `${linkProps.rel} nofollow` : 'nofollow';
  }

  if (config?.onLinkClick) {
    linkProps.onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      config.onLinkClick!(href, e);
    };
  }

  return <a {...linkProps}>{renderContent(innerHtml)}</a>;
};

export { LinkRenderer };
