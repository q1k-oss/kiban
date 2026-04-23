import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../../../../utils/cn';
const ListRenderer = ({ type, innerHtml, config, renderContent, }) => {
    if (type === 'ul') {
        return (_jsx("ul", { className: cn('text-inherit', config === null || config === void 0 ? void 0 : config.ulClassName), children: renderContent(innerHtml) }));
    }
    if (type === 'ol') {
        return (_jsx("ol", { className: cn('text-inherit', config === null || config === void 0 ? void 0 : config.olClassName), children: renderContent(innerHtml) }));
    }
    return (_jsx("li", { className: cn('text-inherit', config === null || config === void 0 ? void 0 : config.liClassName), children: renderContent(innerHtml) }));
};
export { ListRenderer };
