import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../../../../utils/cn';
const TableRenderer = ({ type, innerHtml, config, renderContent, }) => {
    const content = renderContent(innerHtml);
    switch (type) {
        case 'table': {
            const tableElement = (_jsx("table", { className: cn(config === null || config === void 0 ? void 0 : config.className), children: content }));
            if (config === null || config === void 0 ? void 0 : config.responsive) {
                return (_jsx("div", { className: cn('overflow-x-auto my-6'), children: tableElement }));
            }
            return tableElement;
        }
        case 'thead':
            return _jsx("thead", { className: cn(config === null || config === void 0 ? void 0 : config.theadClassName), children: content });
        case 'tbody':
            return _jsx("tbody", { className: cn(config === null || config === void 0 ? void 0 : config.tbodyClassName), children: content });
        case 'tr':
            return _jsx("tr", { className: cn(config === null || config === void 0 ? void 0 : config.trClassName), children: content });
        case 'th':
            return _jsx("th", { className: cn(config === null || config === void 0 ? void 0 : config.thClassName), children: content });
        case 'td':
            return _jsx("td", { className: cn(config === null || config === void 0 ? void 0 : config.tdClassName), children: content });
        default:
            return null;
    }
};
export { TableRenderer };
