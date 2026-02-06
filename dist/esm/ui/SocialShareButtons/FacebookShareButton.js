"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "../button";
import objectToGetParams, { openShareWindow } from "./utils";
function getFacebookShareUrl(url, options) {
    if (!url) {
        throw new Error("Facebook share requires a URL");
    }
    return ("https://www.facebook.com/sharer/sharer.php" +
        objectToGetParams({
            u: url,
            hashtag: options.hashtag,
        }));
}
export default function FacebookShareButton({ url, hashtag, children, className, disabled = false, onClick, }) {
    const handleClick = () => {
        if (disabled)
            return;
        onClick === null || onClick === void 0 ? void 0 : onClick();
        const shareUrl = getFacebookShareUrl(url, { hashtag });
        openShareWindow(shareUrl);
    };
    return (_jsx(Button, { type: "button", className: className, onClick: handleClick, disabled: disabled, "aria-label": "Share on Facebook", children: children }));
}
