import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../../../utils/cn';
import { Skeleton } from "../../../skeleton";
export default function SingleBlogPromptSkeleton({ className, }) {
    return (_jsxs("div", { children: [' ', _jsxs("div", { className: cn('p-6 flex flex-col gap-4 ', className), children: [_jsx(Skeleton, { className: "w-full h-4" }), _jsx(Skeleton, { className: "w-full h-4" }), _jsx(Skeleton, { className: "w-full h-4" }), _jsx("div", { className: "w-full flex items-center justify-end mt-4", children: _jsx(Skeleton, { className: "w-20 h-8" }) })] })] }));
}
