"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "../button";
import objectToGetParams, { openShareWindow } from "./utils";
function getTwitterShareUrl(url, options) {
    var _a, _b;
    if (!url) {
        throw new Error("Twitter share requires a URL");
    }
    return ("https://twitter.com/intent/tweet" +
        objectToGetParams({
            url,
            text: options.title,
            via: options.via,
            hashtags: (_a = options.hashtags) === null || _a === void 0 ? void 0 : _a.join(","),
            related: (_b = options.related) === null || _b === void 0 ? void 0 : _b.join(","),
        }));
}
export default function TwitterShareButton({ url, title, via, hashtags, related, children, className, disabled = false, onClick, }) {
    const handleClick = () => {
        if (disabled)
            return;
        onClick === null || onClick === void 0 ? void 0 : onClick();
        const shareUrl = getTwitterShareUrl(url, { title, via, hashtags, related });
        openShareWindow(shareUrl);
    };
    return (_jsx(Button, { type: "button", className: className, onClick: handleClick, disabled: disabled, "aria-label": "Share on Twitter", children: children }));
}
