import { jsx as _jsx } from "react/jsx-runtime";
const TextStyleRenderer = ({ type, innerHtml, config, renderContent, }) => {
    switch (type) {
        case 'strong':
        case 'b':
            return (_jsx("strong", { className: (config === null || config === void 0 ? void 0 : config.strongClassName) || '', children: renderContent(innerHtml) }));
        case 'em':
        case 'i':
            return (_jsx("em", { className: (config === null || config === void 0 ? void 0 : config.emClassName) || '', children: renderContent(innerHtml) }));
        case 'code':
            return (_jsx("code", { className: (config === null || config === void 0 ? void 0 : config.codeClassName) || '', children: innerHtml
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
                    .replace(/&quot;/g, '"')
                    .replace(/&#39;/g, "'")
                    .replace(/&#x27;/g, "'")
                    .replace(/&apos;/g, "'")
                    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(Number(num)))
                    .replace(/&amp;/g, '&') }));
        case 'u':
            return (_jsx("u", { className: (config === null || config === void 0 ? void 0 : config.underlineClassName) || '', children: renderContent(innerHtml) }));
        case 'del':
        case 's':
            return (_jsx("del", { className: (config === null || config === void 0 ? void 0 : config.delClassName) || '', children: renderContent(innerHtml) }));
        default:
            return null;
    }
};
export { TextStyleRenderer };
