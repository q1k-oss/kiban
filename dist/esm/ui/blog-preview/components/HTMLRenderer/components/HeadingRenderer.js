import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../../../../utils/cn';
import { generateId, extractTextContent } from '../utils';
const HeadingRenderer = ({ level, innerHtml, attrs, config, renderContent, }) => {
    const textContent = extractTextContent(innerHtml);
    const id = (config === null || config === void 0 ? void 0 : config.addIds) ? attrs.id || generateId(textContent) : undefined;
    const headingClassName = (config === null || config === void 0 ? void 0 : config[`${level}ClassName`]) ||
        (config === null || config === void 0 ? void 0 : config.className) ||
        '';
    const HeadingTag = level;
    return (_jsxs(HeadingTag, { id: id, className: cn('group', headingClassName), children: [renderContent(innerHtml), (config === null || config === void 0 ? void 0 : config.addAnchors) && id && (_jsx("a", { href: `#${id}`, className: "ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 no-underline text-blue-500", children: config.anchorSymbol || '#' }))] }));
};
export { HeadingRenderer };
