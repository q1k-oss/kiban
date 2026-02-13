import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../../utils/cn';
import { Button } from '../../button';
export const SingleBlogPrompt = ({ blogPrompt, className, }) => {
    return (_jsxs("div", { className: cn('p-6 border border-[#F49D5699] rounded-md  font-dm-mono', className), children: [_jsx("p", { className: "text-secondary-text text-sm font-medium   leading-6", children: blogPrompt }), _jsx("div", { className: "w-full flex items-center justify-end mt-4", children: _jsx(Button, { className: "border border-border-3 bg-button-fill-3 text-xs h-fit w-fit hover:bg-button-fill-3 font-dm-mono", children: "Build an Agent" }) })] }));
};
