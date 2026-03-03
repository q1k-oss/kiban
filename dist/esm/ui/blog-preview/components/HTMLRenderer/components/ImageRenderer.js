import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Image from 'next/image';
import React from 'react';
import { cn } from '../../../../../utils/cn';
import { parseCssToReactStyle } from '../utils';
const ImageRenderer = ({ src, alt, attrs, config }) => {
    var _a, _b, _c, _d;
    const [error, setError] = React.useState(false);
    const handleError = () => {
        if (config === null || config === void 0 ? void 0 : config.onImageError) {
            setError(true);
        }
    };
    const imgSrc = error && (config === null || config === void 0 ? void 0 : config.onImageError) ? config.onImageError(src) : src;
    const isExternalUrl = (url) => {
        try {
            return url.startsWith('http://') || url.startsWith('https://');
        }
        catch (_a) {
            return false;
        }
    };
    const isExternal = isExternalUrl(imgSrc);
    const image = (config === null || config === void 0 ? void 0 : config.fill) ? (_jsx("div", { className: "relative w-full h-64", children: _jsx(Image, { src: imgSrc, alt: alt, fill: true, className: cn(config === null || config === void 0 ? void 0 : config.className), priority: config === null || config === void 0 ? void 0 : config.priority, quality: (_a = config === null || config === void 0 ? void 0 : config.quality) !== null && _a !== void 0 ? _a : 75, sizes: (config === null || config === void 0 ? void 0 : config.sizes) || '100vw', onError: handleError, unoptimized: isExternal }) })) : (_jsx(Image, { src: imgSrc, alt: alt, width: (_b = config === null || config === void 0 ? void 0 : config.width) !== null && _b !== void 0 ? _b : 800, height: (_c = config === null || config === void 0 ? void 0 : config.height) !== null && _c !== void 0 ? _c : 600, className: cn(config === null || config === void 0 ? void 0 : config.className), priority: config === null || config === void 0 ? void 0 : config.priority, quality: (_d = config === null || config === void 0 ? void 0 : config.quality) !== null && _d !== void 0 ? _d : 75, sizes: config === null || config === void 0 ? void 0 : config.sizes, onError: handleError, unoptimized: isExternal }));
    const inlineStyle = parseCssToReactStyle(attrs === null || attrs === void 0 ? void 0 : attrs.style);
    const textAlign = inlineStyle === null || inlineStyle === void 0 ? void 0 : inlineStyle.textAlign;
    const alignmentClass = textAlign === 'center' ? 'mx-auto w-fit' : textAlign === 'right' ? 'ml-auto w-fit' : '';
    if ((config === null || config === void 0 ? void 0 : config.wrapperClassName) || (config === null || config === void 0 ? void 0 : config.addCaption)) {
        return (_jsxs("figure", { className: cn('my-8', alignmentClass, config === null || config === void 0 ? void 0 : config.wrapperClassName), children: [image, (config === null || config === void 0 ? void 0 : config.addCaption) && alt && (_jsx("figcaption", { className: cn('text-center italic text-[#666] mt-2 text-sm'), children: alt }))] }));
    }
    return _jsx(_Fragment, { children: image });
};
export { ImageRenderer };
