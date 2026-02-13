import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../../utils/cn';
export const SingleBlogSummary = ({ blogSummary, className }) => {
    return (_jsxs("div", { className: cn("border-2 rounded-xl border-[#F49D5699] p-6 italic", className), children: [_jsx("h4", { className: "font-bold mb-4 text-lg", children: "Summary" }), _jsx("p", { className: "text-secondary-text", children: blogSummary })] }));
};
