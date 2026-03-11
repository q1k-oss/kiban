"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { cn } from "../../../utils/cn";
import { AppIcon } from "../../app-icon";
import { BorderMovingWrapper } from "../../border-moving-wrapper";
import { Button } from "../../button";
export default function FloatingBuildAgentButton() {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs("div", { className: "md:hidden", children: [isOpen && (_jsx("div", { className: "fixed inset-0 bg-black/80", style: { zIndex: 99998 }, onClick: () => setIsOpen(false) })), isOpen && (_jsx("div", { className: "fixed left-12 right-8 ", style: { zIndex: 99999, bottom: "100px" }, children: _jsx(BorderMovingWrapper, { colors: [
                        "#C3946F99",
                        "#F49D5699",
                        "#FFF2B7",
                        "#FEEEB2FA",
                        "#F4C656",
                    ], animationMode: "loop", children: _jsxs("div", { className: "bg-textbox-user-background p-4 ", children: [_jsx("span", { className: "font-dm-mono", children: "Create an AI agent that monitors my data, identifies important changes, and takes action only after validating the outcome" }), _jsx("div", { className: "flex justify-end mt-2", children: _jsxs("button", { type: "button", className: "flex items-center gap-2 px-4 py-2 rounded-md text-base bg-background-black text-primary-text border border-border-3", children: [_jsx("span", { children: "Generate" }), _jsx(AppIcon, { iconName: "custom-ai-stars", size: 16, source: "custom" })] }) })] }) }) })), _jsx(Button, { type: "button", onClick: () => setIsOpen(!isOpen), className: cn("fixed bottom-4 right-4 flex items-center gap-2 p-2 rounded-md border border-[#F49D56] bg-[#100803] text-primary-text text-sm font-light shadow-lg shadow-white/5 h-fit", isOpen && "bg-button-fill-3"), style: { zIndex: 99999 }, children: _jsxs("div", { className: "flex items-center p-2 border border-[#FEEEB299] rounded-sm gap-2", children: [_jsx(AppIcon, { iconName: "vector-square", size: 16, className: "text-primary-text" }), _jsx("span", { children: "Build Agent" }), isOpen && (_jsx(AppIcon, { iconName: "x", size: 16, className: "text-primary-text ml-1" }))] }) })] }));
}
