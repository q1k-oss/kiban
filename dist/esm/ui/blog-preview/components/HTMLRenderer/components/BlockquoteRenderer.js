import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../../../../utils/cn';
const BlockquoteRenderer = ({ innerHtml, config, renderContent, }) => {
    return (_jsxs("blockquote", { className: cn(config === null || config === void 0 ? void 0 : config.className), style: config === null || config === void 0 ? void 0 : config.style, children: [(config === null || config === void 0 ? void 0 : config.showIcon) && (_jsx("span", { className: cn('mr-2 text-[1.2em]'), children: config.iconSymbol || '💬' })), renderContent(innerHtml)] }));
};
export { BlockquoteRenderer };
