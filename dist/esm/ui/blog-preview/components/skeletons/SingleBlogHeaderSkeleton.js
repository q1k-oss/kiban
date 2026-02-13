import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton } from "../../../skeleton";
export const SingleBlogHeaderSkeleton = () => {
    return (_jsxs("div", { className: "relative w-full min-h-[300px] bg-[url(/q1ader_bg.png)]\r\n                 bg-cover bg-center bg-no-repeat px-6 py-8 flex flex-col justify-end gap-6", children: [_jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-b from-transparent to-black" }), _jsxs("div", { className: "flex items-center text-xs gap-4", children: [_jsx(Skeleton, { className: "h-7 w-20 rounded-md " }), _jsx(Skeleton, { className: "h-7 w-24" })] }), _jsx(Skeleton, { className: "h-10 w-3/4" }), _jsx(Skeleton, { className: "h-5 w-full" }), _jsx(Skeleton, { className: "h-5 w-2/3" }), _jsx(Skeleton, { className: "h-5 w-40" }), _jsx("hr", { className: "border-border-3" })] }));
};
