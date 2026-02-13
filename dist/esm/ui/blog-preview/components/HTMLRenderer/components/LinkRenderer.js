import { jsx as _jsx } from "react/jsx-runtime";
const LinkRenderer = ({ href, innerHtml, config, renderContent, }) => {
    const linkProps = {
        href: href || '#',
        className: (config === null || config === void 0 ? void 0 : config.className) || '',
    };
    if (config === null || config === void 0 ? void 0 : config.openInNewTab) {
        linkProps.target = '_blank';
        linkProps.rel = 'noopener noreferrer';
    }
    if (config === null || config === void 0 ? void 0 : config.noFollow) {
        linkProps.rel = linkProps.rel ? `${linkProps.rel} nofollow` : 'nofollow';
    }
    if (config === null || config === void 0 ? void 0 : config.onLinkClick) {
        linkProps.onClick = (e) => {
            config.onLinkClick(href, e);
        };
    }
    return _jsx("a", Object.assign({}, linkProps, { children: renderContent(innerHtml) }));
};
export { LinkRenderer };
