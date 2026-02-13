import { jsx as _jsx } from "react/jsx-runtime";
const SAFE_PROTOCOLS = /^(https?|mailto|tel|#)/i;
function isSafeHref(href) {
    if (!href || href === '#')
        return true;
    if (href.startsWith('/') || href.startsWith('.'))
        return true;
    return SAFE_PROTOCOLS.test(href);
}
const LinkRenderer = ({ href, innerHtml, config, renderContent, }) => {
    const safe = isSafeHref(href);
    const safeHref = safe ? (href || '#') : '#';
    const linkProps = {
        href: safeHref,
        className: (config === null || config === void 0 ? void 0 : config.className) || '',
    };
    if ((config === null || config === void 0 ? void 0 : config.openInNewTab) && safe) {
        linkProps.target = '_blank';
        linkProps.rel = 'noopener noreferrer';
    }
    if (config === null || config === void 0 ? void 0 : config.noFollow) {
        linkProps.rel = linkProps.rel ? `${linkProps.rel} nofollow` : 'nofollow';
    }
    if ((config === null || config === void 0 ? void 0 : config.onLinkClick) && safe) {
        linkProps.onClick = (e) => {
            config.onLinkClick(href, e);
        };
    }
    return _jsx("a", Object.assign({}, linkProps, { children: renderContent(innerHtml) }));
};
export { LinkRenderer };
