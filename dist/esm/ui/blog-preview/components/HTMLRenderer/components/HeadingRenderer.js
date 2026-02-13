import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../../../../utils/cn';
import { generateId, extractTextContent } from '../utils';
// Strip existing heading-anchor <a> tags from inner HTML
const HEADING_ANCHOR_RE = /<a\b[^>]*class\s*=\s*["'][^"']*heading-anchor[^"']*["'][^>]*>[\s\S]*?<\/a>/gi;
function stripHeadingAnchors(html) {
    return html.replace(HEADING_ANCHOR_RE, '');
}
// Extract href from the first heading-anchor in the HTML (if any)
const HEADING_ANCHOR_HREF_RE = /<a\b[^>]*class\s*=\s*["'][^"']*heading-anchor[^"']*["'][^>]*href\s*=\s*["']([^"']*)["'][^>]*>/i;
const HEADING_ANCHOR_HREF_RE2 = /<a\b[^>]*href\s*=\s*["']([^"']*)["'][^>]*class\s*=\s*["'][^"']*heading-anchor[^"']*["'][^>]*>/i;
function extractAnchorHref(html) {
    const m = HEADING_ANCHOR_HREF_RE.exec(html) || HEADING_ANCHOR_HREF_RE2.exec(html);
    return m ? m[1] : null;
}
const HeadingRenderer = ({ level, innerHtml, attrs, config, renderContent, }) => {
    const hasExistingAnchor = HEADING_ANCHOR_RE.test(innerHtml);
    const cleanedHtml = hasExistingAnchor ? stripHeadingAnchors(innerHtml) : innerHtml;
    const existingHref = hasExistingAnchor ? extractAnchorHref(innerHtml) : null;
    const textContent = extractTextContent(cleanedHtml);
    const id = (config === null || config === void 0 ? void 0 : config.addIds)
        ? attrs.id || (existingHref ? existingHref.replace(/^#/, '') : null) || generateId(textContent)
        : undefined;
    const headingClassName = (config === null || config === void 0 ? void 0 : config[`${level}ClassName`]) ||
        (config === null || config === void 0 ? void 0 : config.className) ||
        '';
    const HeadingTag = level;
    // Show hover anchor if: config says addAnchors, OR the original HTML had a heading-anchor
    const showAnchor = ((config === null || config === void 0 ? void 0 : config.addAnchors) || hasExistingAnchor) && id;
    return (_jsxs(HeadingTag, { id: id, className: cn('group', headingClassName), children: [renderContent(cleanedHtml), showAnchor && (_jsx("a", { href: `#${id}`, className: "ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 no-underline text-blue-500", children: (config === null || config === void 0 ? void 0 : config.anchorSymbol) || '#' }))] }));
};
export { HeadingRenderer };
