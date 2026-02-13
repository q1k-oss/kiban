import { jsx as _jsx } from "react/jsx-runtime";
import { BLOCK_TAGS } from '../utils';
const INLINE_TAGS = new Set([
    'code', 'span', 'a', 'strong', 'em', 'b', 'i', 'u',
    'img', 'br', 'sub', 'sup', 'mark', 'small', 'del', 's',
    'abbr', 'cite', 'q', 'kbd', 'var', 'samp', 'time',
]);
const ParagraphRenderer = ({ innerHtml, config, renderContent, }) => {
    const hasBlockChild = Array.from(innerHtml.matchAll(/<\s*([\w-]+)/g)).some((match) => {
        const tag = match[1].toLowerCase();
        return BLOCK_TAGS.has(tag) && !INLINE_TAGS.has(tag);
    });
    // Don't wrap in <p> if it contains block elements
    if (hasBlockChild) {
        return (_jsx("div", { className: (config === null || config === void 0 ? void 0 : config.className) || '', children: renderContent(innerHtml) }));
    }
    return _jsx("p", { className: (config === null || config === void 0 ? void 0 : config.className) || '', children: renderContent(innerHtml) });
};
export { ParagraphRenderer };
