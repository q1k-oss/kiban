import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton } from "../../../skeleton";
export const SingleBlogSummarySkeleton = () => {
    return (_jsxs("div", { className: "p-4 italic", children: [_jsx("h4", { className: "font-bold mb-4 text-lg", children: "Summary" }), _jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(Skeleton, { className: "w-full h-4" }), _jsx(Skeleton, { className: "w-full h-4" }), _jsx(Skeleton, { className: "w-full h-4" }), _jsx(Skeleton, { className: "w-1/5 h-4" })] })] }));
};
