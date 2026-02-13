import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { format, isValid } from 'date-fns';
import { cn } from '../../../utils/cn';
import SingleBlogHeaderBackground from './SingleBlogHeaderBackground';
function formatDate(value) {
    const date = new Date(value);
    if (!isValid(date))
        return null;
    return format(date, 'MMM dd, yyyy');
}
export default function SingleBlogHeader({ blogFlagName, excerpt, updatedAt, title, className, }) {
    const formattedDate = updatedAt ? formatDate(updatedAt) : null;
    return (_jsxs("div", { className: cn('relative w-full min-h-80 bg-cover bg-center bg-no-repeat  flex flex-col justify-end gap-10 md:gap-8', className), children: [_jsx(SingleBlogHeaderBackground, { className: "absolute inset-0 z-0 hidden md:block" }), _jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 z-0 bg-linear-to-b from-transparent to-black" }), blogFlagName && (_jsxs("div", { className: "flex items-center  gap-4 z-100", children: [_jsx("span", { className: "px-2 py-1.5 text-primary-text bg-button-fill-3 rounded-sm font-medium text-base  md:text-xs", children: blogFlagName }), _jsx("span", { className: "text-base md:text-sm", children: ". 4 min read" })] })), title && (_jsx("h1", { className: "text-3xl lg:text-5xl font-semibold text-primary-text z-10", children: title })), excerpt && (_jsx("p", { className: "text-secondary-text font-light text-lg z-10", children: excerpt })), formattedDate && (_jsxs("p", { className: "text-secondary-text font-light z-10", children: ["Updated, ", formattedDate] })), _jsx("hr", { className: "border-border-3 z-10" })] }));
}
