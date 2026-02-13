import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const SingleBlogSummary = ({ blogSummary }) => {
    return (_jsxs("div", { className: "border-2 rounded-xl border-[#F49D5699] p-6 italic", children: [_jsx("h4", { className: "font-bold mb-4 text-lg", children: "Summary" }), _jsx("p", { className: "text-secondary-text", children: blogSummary })] }));
};
