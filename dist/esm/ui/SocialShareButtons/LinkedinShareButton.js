"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "../button";
import objectToGetParams, { openShareWindow } from "./utils";
function getLinkedinShareUrl(url) {
    if (!url) {
        throw new Error("LinkedIn share requires a URL");
    }
    return ("https://www.linkedin.com/sharing/share-offsite/" +
        objectToGetParams({ url }));
}
export default function LinkedinShareButton({ url, children, className, disabled = false, onClick, }) {
    const handleClick = () => {
        if (disabled)
            return;
        onClick === null || onClick === void 0 ? void 0 : onClick();
        const shareUrl = getLinkedinShareUrl(url);
        openShareWindow(shareUrl);
    };
    return (_jsx(Button, { type: "button", className: className, onClick: handleClick, disabled: disabled, "aria-label": "Share on LinkedIn", children: children }));
}
