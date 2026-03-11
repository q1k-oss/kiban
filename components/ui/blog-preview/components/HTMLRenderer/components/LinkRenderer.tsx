import React from 'react';

import { HtmlRendererConfig } from '../type';

interface LinkRendererProps {
  href: string;
  innerHtml: string;
  config?: HtmlRendererConfig['links'];
  renderContent: (html: string) => React.ReactNode;
}

const SAFE_PROTOCOLS = /^(https?|mailto|tel|#)/i;

function isSafeHref(href: string): boolean {
  if (!href || href === '#') return true;
  if (href.startsWith('/') || href.startsWith('.')) return true;
  return SAFE_PROTOCOLS.test(href);
}

const LinkRenderer: React.FC<LinkRendererProps> = ({
  href,
  innerHtml,
  config,
  renderContent,
}) => {
  const safe = isSafeHref(href);
  const safeHref = safe ? (href || '#') : '#';

  const linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    href: safeHref,
    className: config?.className || '',
  };

  if (config?.openInNewTab && safe) {
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  }

  if (config?.noFollow) {
    linkProps.rel = linkProps.rel ? `${linkProps.rel} nofollow` : 'nofollow';
  }

  if (config?.onLinkClick && safe) {
    linkProps.onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      config.onLinkClick!(href, e);
    };
  }

  return <a {...linkProps}>{renderContent(innerHtml)}</a>;
};

export { LinkRenderer };
