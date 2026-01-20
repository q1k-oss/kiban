import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { NOTION_FLOAT_MENU_TOOLBAR_CONFIG } from "../constants";
export const FloatingCommandMenu = ({ editor }) => {
    return (_jsx("div", { className: "bg-agent-card-fill border border-border-3 rounded-lg shadow-2xl w-80 max-h-96 overflow-y-auto", children: _jsx("div", { className: "p-1 flex flex-col items-center w-full gap-1", children: NOTION_FLOAT_MENU_TOOLBAR_CONFIG.map((cmd, idx) => (_jsxs(Button, { onClick: () => cmd.action(editor), className: "w-full flex items-start gap-3 px-3 h-fit  text-sm text-left rounded transition-colors group cursor-pointer duration-100 hover:bg-primary-foreground/10 bg-transparent", children: [_jsx("span", { className: "mt-0.5 text-icon-disabled-fill group-hover:text-primary-text group duration-100", children: _jsx(AppIcon, { iconName: cmd.icon, size: 18 }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("div", { className: "font-medium text-secondary-text group-hover:text-primary-text duration-100", children: cmd.label }), _jsx("div", { className: "text-xs text-disabled-text group-hover:text-secondary-text truncate duration-100", children: cmd.description })] })] }, idx))) }) }));
};
