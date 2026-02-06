"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '../button';
import objectToGetParams, { openShareWindow } from './utils';
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
    return (_jsx(Button, { type: "button", className: className, onClick: handleClick, disabled: disabled, "aria-label": "Share on Reddit", children: children }));
}
