"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "../button";
import objectToGetParams from "./utils";
function openShareWindow(shareUrl, windowWidth = 750, windowHeight = 600) {
    const left = window.screen.width / 2 - windowWidth / 2;
    const top = window.screen.height / 2 - windowHeight / 2;
    window.open(shareUrl, "share-window", `width=${windowWidth},height=${windowHeight},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`);
}
function getLinkedinShareUrl(url, options) {
    if (!url) {
        throw new Error("LinkedIn share requires a URL");
    }
    return ("https://linkedin.com/shareArticle" +
        objectToGetParams(Object.assign({ url, mini: "true" }, options)));
}
export default function LinkedinShareButton({ url, title, summary, source, children, className, disabled = false, onClick, }) {
    const handleClick = () => {
        if (disabled)
            return;
        onClick === null || onClick === void 0 ? void 0 : onClick();
        const shareUrl = getLinkedinShareUrl(url, { title, summary, source });
        openShareWindow(shareUrl);
    };
    return (_jsx(Button, { type: "button", className: className, onClick: handleClick, disabled: disabled, "aria-label": "Share on LinkedIn", children: children }));
}
