import { jsx as _jsx } from "react/jsx-runtime";
import { BLOCK_TAGS } from '../utils';
const ParagraphRenderer = ({ innerHtml, config, renderContent, }) => {
    const hasBlockChild = Array.from(innerHtml.matchAll(/<\s*([\w-]+)/g)).some((match) => BLOCK_TAGS.has(match[1].toLowerCase()));
    // Don't wrap in <p> if it contains block elements
    if (hasBlockChild) {
        return (_jsx("div", { className: (config === null || config === void 0 ? void 0 : config.className) || '', children: renderContent(innerHtml) }));
    }
    return _jsx("p", { className: (config === null || config === void 0 ? void 0 : config.className) || '', children: renderContent(innerHtml) });
};
export { ParagraphRenderer };
