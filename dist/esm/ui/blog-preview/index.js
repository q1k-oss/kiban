"use client";
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
import { useState } from "react";
import { AppIcon } from "../app-icon";
import { Button } from "../button";
import { Skeleton } from "../skeleton";
import { FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton, } from "../SocialShareButtons";
import FloatingBuildAgentButton from "./components/FloatingBuildAgentButton";
import HtmlRenderer from "./components/HTMLRenderer";
import SingleBlogAuthor from "./components/SingleBlogAuthor";
import SingleBlogHeader from "./components/SingleBlogHeader";
import { SingleBlogPrompt } from "./components/SingleBlogPrompt";
import { SingleBlogSummary } from "./components/SingleBlogSummary";
import SingleBlogAuthorSkeleton from "./components/skeletons/SingleBlogAuthorSkeleton";
import { SingleBlogContentSkeleton } from "./components/skeletons/SingleBlogContentSkeleton";
import { SingleBlogHeaderSkeleton } from "./components/skeletons/SingleBlogHeaderSkeleton";
import SingleBlogPromptSkeleton from "./components/skeletons/SingleBlogPromptSkeleton";
import { SingleBlogSummarySkeleton } from "./components/skeletons/SingleBlogSummarySkeleton";
import { SingleBlogTOCSkeleton } from "./components/skeletons/SingleBlogTOCSkeleton";
import TableOfContent from "./components/TableOfContent";
const defaultHtmlRendererConfig = {
    codeBlock: {
        wrapperClassName: "border border-stroke p-6 rounded-xl text-icon-color-default text-base",
        showLanguage: true,
        copyButton: true,
        lineNumbers: false,
        className: "mt-4 text-icon-color-default font-light text-sm leading-6 py-1",
        headerLanguageClassName: "text-icon-color-default text-md! capitalize pb-4",
    },
    headings: {
        addIds: true,
        h1ClassName: "text-2xl font-bold mt-8 mb-5",
        h2ClassName: "text-xl font-bold mt-6 mb-4",
        h3ClassName: "text-lg font-semibold mt-4 mb-3",
    },
    links: {
        openInNewTab: false,
    },
    images: {
        className: "rounded-sm shadow-md",
        addCaption: true,
    },
    paragraphs: {
        className: "text-secondary-text text-lg font-light ",
    },
    blockquote: {
        className: "border-l border-stroke bg-white/5 py-2 my-4 italic px-2 text-secondary-text",
    },
    wrapper: {
        tag: "article",
        className: "prose prose-lg",
    },
    lists: {
        ulClassName: "list-disc ml-6 my-5",
        olClassName: "list-decimal ml-6 my-5 font-bold",
        liClassName: "my-1 font-semi-bold",
    },
    hr: {
        className: "my-8 border-t border-border-3 ",
    },
    sanitization: {
        stripScripts: true,
        stripEvents: true,
        stripStyles: false,
    },
};
const BlogPreview = ({ loading, blog, htmlRendererConfig, className = "md:pt-5", headerClassName, contentClassName = "w-full px-0 md:px-6", sidebarClassName = "hidden md:block w-full max-h-screen overflow-y-scroll max-w-xs sticky top-4 pb-20 no-scrollbar", tagsClassName = "flex items-start justify-start gap-4 mt-12", tagClassName = "py-2 px-4 text-sm bg-minimap border border-border-3 font-light rounded-sm text-secondary-text", onBuild, }) => {
    const [copied, setCopied] = useState(false);
    const url = typeof window !== "undefined"
        ? `${window.location.origin}/blogs/${blog.slug}`
        : "";
    const handleCopyLink = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
        catch (_a) {
            // fallback ignored
        }
    });
    const renderSocialMediaIcons = () => {
        const baseStyle = "border border-border-3 rounded-sm p-2.5 cursor-pointer h-fit bg-transparent hover:bg-transparent";
        if (loading) {
            return Array.from({ length: 5 }).map((_, idx) => (_jsx(Skeleton, { className: "w-10 h-10" }, idx)));
        }
        return (_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("div", { className: "relative", children: [_jsx(Button, { className: baseStyle, onClick: handleCopyLink, children: _jsx(AppIcon, { iconName: copied ? "check" : "link", size: 15, className: "text-primary-text" }) }), copied && (_jsxs("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded-4xl bg-secondary-text text-black! whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-200", children: ["Copied to clipboard!", _jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stroke" })] }))] }), _jsx(LinkedinShareButton, { className: baseStyle, url: url, children: _jsx(AppIcon, { iconName: "custom-linkedin-fill", size: 15, className: "text-primary-text", source: "custom" }) }), _jsx(TwitterShareButton, { className: baseStyle, url: url, title: blog.title, children: _jsx(AppIcon, { iconName: "custom-xtwitter", size: 15, className: "text-primary-text", source: "custom" }) }), _jsx(RedditShareButton, { className: baseStyle, url: url, title: blog.title, children: _jsx(AppIcon, { iconName: "custom-reddit-fill", size: 16, className: "text-primary-text", source: "custom" }) }), _jsx(FacebookShareButton, { className: baseStyle, url: url, children: _jsx(AppIcon, { iconName: "custom-facebook-fill", size: 16, className: "text-primary-text", source: "custom" }) })] }));
    };
    const renderBlogHeader = () => {
        var _a, _b, _c;
        if (loading)
            return _jsx(SingleBlogHeaderSkeleton, {});
        return (_jsx(SingleBlogHeader, { title: (_a = blog === null || blog === void 0 ? void 0 : blog.title) !== null && _a !== void 0 ? _a : "", excerpt: blog === null || blog === void 0 ? void 0 : blog.excerpt, blogFlagName: (_b = blog === null || blog === void 0 ? void 0 : blog.flag) === null || _b === void 0 ? void 0 : _b.name, updatedAt: (_c = blog === null || blog === void 0 ? void 0 : blog.updatedAt) !== null && _c !== void 0 ? _c : "", className: "px-0 md:px-6 pt-4 md:pt-14 pb-6" }));
    };
    const renderBlogSummary = () => {
        if (loading)
            return _jsx(SingleBlogSummarySkeleton, {});
        if (!(blog === null || blog === void 0 ? void 0 : blog.summary))
            return null;
        return _jsx(SingleBlogSummary, { blogSummary: blog.summary });
    };
    const renderBlogContent = () => {
        if (loading)
            return _jsx(SingleBlogContentSkeleton, {});
        if (!(blog === null || blog === void 0 ? void 0 : blog.content))
            return null;
        const mergedConfig = htmlRendererConfig
            ? Object.keys(Object.assign(Object.assign({}, defaultHtmlRendererConfig), htmlRendererConfig)).reduce((acc, key) => {
                const k = key;
                const defaultVal = defaultHtmlRendererConfig[k];
                const userVal = htmlRendererConfig[k];
                if (defaultVal && userVal && typeof defaultVal === 'object' && typeof userVal === 'object' && !Array.isArray(defaultVal)) {
                    acc[key] = Object.assign(Object.assign({}, defaultVal), userVal);
                }
                else {
                    acc[key] = userVal !== undefined ? userVal : defaultVal;
                }
                return acc;
            }, {})
            : defaultHtmlRendererConfig;
        return (_jsx("div", { className: "w-full", children: _jsx(HtmlRenderer, { content: blog.content, config: mergedConfig }) }));
    };
    const renderBlogTag = () => {
        if (loading) {
            return Array.from({ length: 4 }).map((_, idx) => (_jsx(Skeleton, { className: "w-16 h-8" }, idx)));
        }
        if (!(blog === null || blog === void 0 ? void 0 : blog.tags))
            return null;
        const tagsArray = blog.tags.split(",");
        return tagsArray.map((tag, idx) => (_jsx("span", { className: tagClassName, children: tag }, idx)));
    };
    const renderAuthorDetails = () => {
        if (loading)
            return _jsx(SingleBlogAuthorSkeleton, {});
        if (!(blog === null || blog === void 0 ? void 0 : blog.authorEmail) || !(blog === null || blog === void 0 ? void 0 : blog.authorName))
            return null;
        return (_jsx(SingleBlogAuthor, { blogAuthorEmail: blog.authorEmail, blogAuthorName: blog.authorName }));
    };
    const renderBlogTOC = () => {
        if (loading)
            return _jsx(SingleBlogTOCSkeleton, {});
        if (!(blog === null || blog === void 0 ? void 0 : blog.content))
            return null;
        return _jsx(TableOfContent, { blogContent: blog.content });
    };
    const renderBlogPrompt = () => {
        if (loading)
            return _jsx(SingleBlogPromptSkeleton, {});
        if (!(blog === null || blog === void 0 ? void 0 : blog.prompt))
            return null;
        return _jsx(SingleBlogPrompt, { blogPrompt: blog.prompt, onBuild: onBuild });
    };
    return (_jsxs("div", { className: className, children: [_jsx("div", { className: headerClassName, children: renderBlogHeader() }), _jsxs("div", { className: "flex items-start gap-10 relative mt-2 md:mt-6 ", children: [_jsxs("div", { className: contentClassName, children: [_jsx("div", { className: "mb-6", children: renderBlogSummary() }), _jsxs("div", { className: "md:px-8", children: [_jsx("div", { children: renderBlogContent() }), (loading || (blog === null || blog === void 0 ? void 0 : blog.tags)) && (_jsxs("div", { className: tagsClassName, children: [_jsx("span", { className: "text-lg  text-icon-color-default mr-4", children: "Tags:" }), _jsx("div", { className: "flex flex-wrap justify-start gap-4", children: renderBlogTag() })] })), (loading || ((blog === null || blog === void 0 ? void 0 : blog.authorEmail) && (blog === null || blog === void 0 ? void 0 : blog.authorName))) && (_jsx("div", { className: " mt-12", children: renderAuthorDetails() }))] })] }), _jsxs("div", { className: sidebarClassName, children: [renderBlogTOC(), _jsx("div", { className: "flex items-center justify-center gap-2 my-10", children: renderSocialMediaIcons() }), (loading || (blog === null || blog === void 0 ? void 0 : blog.prompt)) && (_jsxs("div", { className: "mt-10", children: [_jsx("span", { className: "text-primary-text font-semibold text-lg", children: "Ready to turn ideas into action?" }), _jsx("div", { className: "mt-4", children: renderBlogPrompt() })] }))] })] }), _jsx(FloatingBuildAgentButton, {})] }));
};
export default BlogPreview;
export { BlogPreview };
