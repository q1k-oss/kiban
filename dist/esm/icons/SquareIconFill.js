import { jsx as _jsx } from "react/jsx-runtime";
export const SquareIconFill = ({ size = 20, className, strokeWidth = 1.5, }) => {
    return (_jsx("svg", { width: size, height: size, viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className, children: _jsx("rect", { width: '18', height: '18', rx: "2", fill: "currentColor", strokeWidth: strokeWidth }) }));
};
