"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AppIcon } from "../../../app-icon";
import { Button } from "../../../button";
import { activeButtonClass, baseButtonClass, hoverButtonClass, } from "../utils";
const ActionRow = ({ icon, label, onClick, }) => (_jsxs(Button, { onClick: onClick, className: "w-full px-3 py-2 text-left text-xs hover:bg-primary-foreground/10 transition-colors bg-transparent text-primary-text flex items-center gap-2 cursor-pointer", "aria-label": label, children: [_jsx(AppIcon, { iconName: icon, size: 14 }), _jsx("span", { children: label })] }));
const PanelDivider = () => (_jsx("div", { className: "border-t border-border-3 my-1" }));
export const TableDropdown = ({ editor, isOpen, onToggle, }) => {
    const isInsideTable = editor.isActive("table");
    return (_jsxs("div", { className: "relative", children: [_jsx(Button, { onClick: onToggle, className: `${baseButtonClass} ${isOpen || isInsideTable ? activeButtonClass : hoverButtonClass}`, title: "Table", "aria-label": "Table", "aria-expanded": isOpen, children: _jsx(AppIcon, { iconName: "table", size: 16 }) }), isOpen && (_jsx("div", { className: "absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg min-w-48 z-20 py-1", children: !isInsideTable ? (_jsx(ActionRow, { icon: "table", label: "Insert Table (3\u00D73)", onClick: () => {
                        editor
                            .chain()
                            .focus()
                            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                            .run();
                        onToggle();
                    } })) : (_jsxs(_Fragment, { children: [_jsx(ActionRow, { icon: "columns-2", label: "Add Column Before", onClick: () => {
                                editor.chain().focus().addColumnBefore().run();
                                onToggle();
                            } }), _jsx(ActionRow, { icon: "columns-2", label: "Add Column After", onClick: () => {
                                editor.chain().focus().addColumnAfter().run();
                                onToggle();
                            } }), _jsx(ActionRow, { icon: "x", label: "Delete Column", onClick: () => {
                                editor.chain().focus().deleteColumn().run();
                                onToggle();
                            } }), _jsx(PanelDivider, {}), _jsx(ActionRow, { icon: "rows-2", label: "Add Row Before", onClick: () => {
                                editor.chain().focus().addRowBefore().run();
                                onToggle();
                            } }), _jsx(ActionRow, { icon: "rows-2", label: "Add Row After", onClick: () => {
                                editor.chain().focus().addRowAfter().run();
                                onToggle();
                            } }), _jsx(ActionRow, { icon: "x", label: "Delete Row", onClick: () => {
                                editor.chain().focus().deleteRow().run();
                                onToggle();
                            } }), _jsx(PanelDivider, {}), _jsx(ActionRow, { icon: "merge", label: "Merge / Split Cells", onClick: () => {
                                editor.chain().focus().mergeOrSplit().run();
                                onToggle();
                            } }), _jsx(ActionRow, { icon: "layout-list", label: "Toggle Header Row", onClick: () => {
                                editor.chain().focus().toggleHeaderRow().run();
                                onToggle();
                            } }), _jsx(PanelDivider, {}), _jsx(ActionRow, { icon: "trash-2", label: "Delete Table", onClick: () => {
                                editor.chain().focus().deleteTable().run();
                                onToggle();
                            } })] })) }))] }));
};
