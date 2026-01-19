import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FONT_SIZES = [
    { label: "Small", value: "12px" },
    { label: "Normal", value: "16px" },
    { label: "Medium", value: "18px" },
    { label: "Large", value: "24px" },
    { label: "Extra Large", value: "32px" },
    { label: "Huge", value: "48px" },
];
export const FontSizePicker = ({ editor, onClose }) => {
    return (_jsxs("div", { className: "absolute top-full w-full mt-2 bg-agent-card-fill border border-border-3 rounded-lg shadow-xl p-2 z-50 min-w-[160px]", children: [_jsx("div", { className: "text-sm font-medium text-primary-text mb-2 px-2", children: "Font Size" }), _jsxs("div", { className: "space-y-1", children: [FONT_SIZES.map((size) => (_jsxs("button", { onClick: () => {
                            editor.chain().focus().setMark("textStyle", { fontSize: size.value }).run();
                            onClose();
                        }, className: "w-full px-3 py-2 text-left rounded transition-colors text-xs text-tertiary-text hover:text-primary-text hover:bg-primary-foreground/10 font-light flex items-center justify-between cursor-pointer duration-100", children: [_jsx("span", { className: "font-medium", children: size.label }), _jsxs("span", { children: ["(", size.value, ")"] })] }, size.value))), _jsx("div", { className: "border-t border-button-border2 my-1" }), _jsx("button", { onClick: () => {
                            editor.chain().focus().setMark("textStyle", { fontSize: null }).run();
                            onClose();
                        }, className: "w-full px-3 py-2 text-left rounded transition-colors text-sm text-secondary-text hover:text-primary-text hover:bg-primary-foreground/10 cursor-pointer duration-100", children: "Reset to default" })] })] }));
};
