import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../../../../utils/cn';
import { AppIcon } from "../../../../app-icon";
const CodeBlockRenderer = ({ language, code, config }) => {
    const [copied, setCopied] = React.useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const lines = code.split('\n');
    return (_jsxs("div", { className: cn('relative my-6', config === null || config === void 0 ? void 0 : config.wrapperClassName), children: [(config === null || config === void 0 ? void 0 : config.showLanguage) && language && (_jsx("div", { className: cn('text-base rounded-t-lg border-b border-stroke', config.headerLanguageClassName), children: language })), (config === null || config === void 0 ? void 0 : config.copyButton) && (_jsx("button", { onClick: handleCopy, className: cn('absolute top-2 right-2 text-white border-none py-2 px-4 rounded cursor-pointer text-sm z-10', config.copyButtonClassName), children: copied ? '✓ Copied!' : _jsx(AppIcon, { iconName: "copy", size: 18 }) })), _jsx("pre", { className: cn('bg-transparent rounded-lg overflow-x-auto font-mono m-0 whitespace-pre-wrap break-words', config === null || config === void 0 ? void 0 : config.className), style: config === null || config === void 0 ? void 0 : config.style, children: _jsx("code", { className: "whitespace-pre-wrap break-words", children: (config === null || config === void 0 ? void 0 : config.lineNumbers) ? (_jsx("table", { className: "w-full border-collapse", children: _jsx("tbody", { children: lines.map((line, index) => (_jsxs("tr", { children: [_jsx("td", { className: "text-[#858585] pr-4 text-right select-none align-top min-w-[3ch]", children: index + 1 }), _jsx("td", { className: "pl-4 whitespace-pre-wrap break-words", children: line })] }, index))) }) })) : (code) }) })] }));
};
export { CodeBlockRenderer };
