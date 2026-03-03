import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../../../../utils/cn';
const tableStyles = `
  .blog-table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    border: 1px solid var(--button-fill-3);
    border-radius: 0.75rem;
  }
  .blog-table tr:first-child th:first-child,
  .blog-table tr:first-child td:first-child {
    border-top-left-radius: 0.75rem;
  }
  .blog-table tr:first-child th:last-child,
  .blog-table tr:first-child td:last-child {
    border-top-right-radius: 0.75rem;
  }
  .blog-table tr:last-child td:first-child,
  .blog-table tr:last-child th:first-child {
    border-bottom-left-radius: 0.75rem;
  }
  .blog-table tr:last-child td:last-child,
  .blog-table tr:last-child th:last-child {
    border-bottom-right-radius: 0.75rem;
  }
`;
const TableRenderer = ({ type, innerHtml, config, renderContent, }) => {
    const content = renderContent(innerHtml);
    switch (type) {
        case 'table': {
            const tableElement = (_jsxs(_Fragment, { children: [_jsx("style", { children: tableStyles }), _jsx("table", { className: cn('blog-table', config === null || config === void 0 ? void 0 : config.className), children: content })] }));
            if (config === null || config === void 0 ? void 0 : config.responsive) {
                return (_jsx("div", { className: "overflow-x-auto my-6", children: tableElement }));
            }
            return _jsx("div", { className: "my-6", children: tableElement });
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
