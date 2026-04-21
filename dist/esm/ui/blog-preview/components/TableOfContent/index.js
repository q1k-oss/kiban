import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { AppIcon } from "../../../app-icon";
import { useActiveHeading } from './useActiveHeading';
function getAllHeadings(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')).map((el) => {
        var _a, _b;
        // Extract text: prefer non-anchor text, fall back to anchor text
        const clone = el.cloneNode(true);
        const anchors = clone.querySelectorAll('.heading-anchor');
        const anchorText = anchors.length > 0 ? ((_a = anchors[0].textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '' : '';
        anchors.forEach((a) => a.remove());
        const remainingText = ((_b = clone.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
        const text = remainingText || anchorText;
        // Use the heading's id, or extract from heading-anchor href
        let id = el.id;
        if (!id) {
            const anchor = el.querySelector('.heading-anchor');
            const href = anchor === null || anchor === void 0 ? void 0 : anchor.getAttribute('href');
            if (href === null || href === void 0 ? void 0 : href.startsWith('#')) {
                id = href.slice(1);
            }
        }
        return { level: Number(el.tagName.replace('H', '')), text, id };
    });
}
export default function TableOfContent({ blogContent, }) {
    const [expanded, setExpanded] = useState(false);
    const [result, setResult] = useState([]);
    useEffect(() => {
        setResult(getAllHeadings(blogContent));
    }, [blogContent]);
    const headingIds = useMemo(() => result.map((h) => h.id), [result]);
    const activeId = useActiveHeading(headingIds);
    const indentMap = {
        1: 'ml-0 mt-4',
        2: 'ml-6 mt-2',
        3: 'ml-10 mt-0',
        4: 'ml-14',
        5: 'ml-18',
        6: 'ml-22',
    };
    const activeIndex = headingIds.indexOf(activeId);
    const progress = activeIndex >= 0 ? ((activeIndex + 1) / headingIds.length) * 100 : 0;
    return (_jsxs("div", { className: "relative hidden md:flex", children: [_jsx("div", { className: "relative w-1 rounded-full overflow-hidden self-stretch", children: _jsx("div", { className: "absolute top-0 left-0 w-full transition-all duration-300 ease-out", style: {
                        height: `${progress}%`,
                        background: 'var(--ai-icon-3)',
                    } }) }), _jsxs("div", { className: "relative pl-4", children: [_jsx("div", { className: `transition-all duration-300 overflow-hidden ${expanded ? 'max-h-none' : 'max-h-80'}`, style: !expanded
                            ? {
                                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                            }
                            : undefined, children: _jsxs("nav", { className: `overflow-hidden ${expanded ? 'overflow-visible' : 'overflow-y-hidden'}`, children: [_jsx("h2", { className: "font-semibold text-lg mb-4", children: "Table of Contents" }), _jsx("ul", { className: "list-disc pl-4 marker:text-xs marker:text-secondary-text", children: result.map((head, idx) => (_jsx("li", { className: indentMap[head.level], children: _jsx("a", { href: `#${head.id}`, className: "block my-1 text-sm font-light hover:text-primary-text transition", onClick: (e) => {
                                                var _a;
                                                // Smooth scroll behavior
                                                e.preventDefault();
                                                (_a = document.getElementById(head.id)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start',
                                                });
                                                window.history.pushState(null, '', `#${head.id}`);
                                            }, children: head.text }) }, idx))) })] }) }), !expanded && (_jsx("div", { className: "group absolute bottom-0 left-0 right-0 h-12\r\n             flex items-end justify-center z-1000", children: _jsx("div", { onClick: () => setExpanded(true), className: "opacity-0 translate-y-2\r\n               group-hover:opacity-100 group-hover:translate-y-0\r\n               transition-all duration-300 cursor-pointer ml-2 mb-1 z-1000", children: _jsx(AppIcon, { iconName: "chevron-down", size: 26, className: "text-primary-text", strokeWidth: 2 }) }) }))] })] }));
}
