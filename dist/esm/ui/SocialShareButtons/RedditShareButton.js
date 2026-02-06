"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import objectToGetParams from './utils';
function openShareWindow(shareUrl, windowWidth = 660, windowHeight = 460) {
    const left = window.screen.width / 2 - windowWidth / 2;
    const top = window.screen.height / 2 - windowHeight / 2;
    window.open(shareUrl, 'share-window', `width=${windowWidth},height=${windowHeight},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`);
}
function getRedditShareUrl(url, options) {
    if (!url) {
        throw new Error('Reddit share requires a URL');
    }
    return ('https://www.reddit.com/submit' +
        objectToGetParams({ url, title: options.title }));
}
export default function RedditShareButton({ url, title, children, className, disabled = false, onClick, }) {
    const handleClick = () => {
        if (disabled)
            return;
        onClick === null || onClick === void 0 ? void 0 : onClick();
        const shareUrl = getRedditShareUrl(url, { title });
        openShareWindow(shareUrl);
    };
    return (_jsx("button", { type: "button", className: className, onClick: handleClick, disabled: disabled, "aria-label": "Share on Reddit", children: children }));
}
