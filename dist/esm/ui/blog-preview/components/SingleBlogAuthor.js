import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../../utils/cn';
const SingleBlogAuthor = ({ className, blogAuthorName, blogAuthorEmail, }) => {
    return (_jsxs("div", { className: cn('border-2 border-border-3 p-6 rounded-lg', className), children: [_jsx("div", { className: "flex items-start justify-start gap-4", children: _jsxs("div", { children: [_jsx("h1", { className: "text-lg text-primary-text font-semibold", children: blogAuthorName }), _jsx("p", { className: "text-primary-text", children: blogAuthorEmail })] }) }), _jsx("p", { className: "mt-6 text-secondary-text", children: "About Author" })] }));
};
export default SingleBlogAuthor;
