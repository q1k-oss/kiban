import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton } from "../../../skeleton";
export const SingleBlogContentSkeleton = () => {
    return (_jsx("div", { className: "flex flex-col w-full items-start gap-10 ", children: Array.from({ length: 5 }).map((_, idx) => (_jsxs("div", { className: "flex flex-col justify-start gap-3 w-full", children: [_jsx(Skeleton, { className: "w-2xs h-12 mb-4" }), _jsx(Skeleton, { className: "w-full h-5" }), _jsx(Skeleton, { className: "w-full h-5" }), _jsx(Skeleton, { className: "w-xs h-8" }), _jsx(Skeleton, { className: "w-full h-5" }), _jsx(Skeleton, { className: "w-full h-5" })] }, idx))) }));
};
