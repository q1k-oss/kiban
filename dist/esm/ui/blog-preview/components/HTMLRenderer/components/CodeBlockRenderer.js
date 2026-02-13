var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../../../../utils/cn';
import { AppIcon } from "../../../../app-icon";
const CodeBlockRenderer = ({ language, code, config }) => {
    const [copied, setCopied] = React.useState(false);
    const handleCopy = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!navigator.clipboard)
            return;
        try {
            yield navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
        catch (_a) {
            // clipboard write failed silently
        }
    });
    const lines = code.split('\n');
    return (_jsxs("div", { className: cn('relative my-6', config === null || config === void 0 ? void 0 : config.wrapperClassName), children: [(config === null || config === void 0 ? void 0 : config.showLanguage) && language && (_jsx("div", { className: cn('text-base rounded-t-lg border-b border-stroke', config.headerLanguageClassName), children: language })), (config === null || config === void 0 ? void 0 : config.copyButton) && (_jsxs("div", { className: "absolute top-2 right-2 z-10", children: [copied && (_jsxs("span", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded bg-secondary-text text-black whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-200", children: ["Copied!", _jsx("span", { className: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-secondary-text" })] })), _jsx("button", { onClick: handleCopy, className: cn('text-white border-none py-2 px-4 rounded cursor-pointer text-sm', config.copyButtonClassName), children: copied ? _jsx(AppIcon, { iconName: "check", size: 18 }) : _jsx(AppIcon, { iconName: "copy", size: 18 }) })] })), _jsx("pre", { className: cn('bg-transparent rounded-lg overflow-x-auto font-mono m-0 whitespace-pre-wrap break-words', config === null || config === void 0 ? void 0 : config.className), style: config === null || config === void 0 ? void 0 : config.style, children: _jsx("code", { className: "whitespace-pre-wrap break-words", children: (config === null || config === void 0 ? void 0 : config.lineNumbers) ? (_jsx("table", { className: "w-full border-collapse", children: _jsx("tbody", { children: lines.map((line, index) => (_jsxs("tr", { children: [_jsx("td", { className: "text-[#858585] pr-4 text-right select-none align-top min-w-[3ch]", children: index + 1 }), _jsx("td", { className: "pl-4 whitespace-pre-wrap break-words", children: line })] }, index))) }) })) : (code) }) })] }));
};
export { CodeBlockRenderer };
