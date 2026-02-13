"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '../button';
import objectToGetParams, { openShareWindow } from './utils';
function getThreadsShareUrl(url, options) {
    if (!url) {
        throw new Error('Threads share requires a URL');
    }
    const text = options.title ? `${options.title} ${url}` : url;
    return ('https://www.threads.net/intent/post' +
        objectToGetParams({ text }));
}
export default function ThreadsShareButton({ url, title, children, className, disabled = false, onClick, }) {
    const handleClick = () => {
        if (disabled)
            return;
        onClick === null || onClick === void 0 ? void 0 : onClick();
        const shareUrl = getThreadsShareUrl(url, { title });
        openShareWindow(shareUrl);
    };
    return (_jsx(Button, { type: "button", className: className, onClick: handleClick, disabled: disabled, "aria-label": "Share on Threads", children: children }));
}
