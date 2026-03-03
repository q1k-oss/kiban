import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../../../utils/cn';
import { Skeleton } from "../../../skeleton";
const SingleBlogAuthorSkeleton = ({ className }) => {
    return (_jsxs("div", { className: cn('border-2 border-border-3 p-6 rounded-lg', className), children: [_jsxs("div", { className: "w-full", children: [_jsx(Skeleton, { className: "h-8 w-1/3" }), _jsx(Skeleton, { className: "h-5 w-1/2 mt-2" })] }), _jsx(Skeleton, { className: "h-5 w-full mt-6" })] }));
};
export default SingleBlogAuthorSkeleton;
