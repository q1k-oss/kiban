"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckIcon, ChevronDown } from "lucide-react";
import * as React from "react";
import RPNInput, { getCountryCallingCode, } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { cn } from "../utils";
import { Button } from "./button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, } from "./command";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ScrollArea } from "./scroll-area";
const PhoneInput = React.forwardRef((_a, ref) => {
    var { className, inputClassName, icon, onChange, value } = _a, props = __rest(_a, ["className", "inputClassName", "icon", "onChange", "value"]);
    return (_jsx(RPNInput, Object.assign({ ref: ref, className: cn("flex justify-between items-center w-full p-2 rounded-md border border-input bg-transparent shadow-sm transition-colors overflow-hidden", "focus-within:outline-none focus-within:ring-1 focus-within:ring-ring", className), flagComponent: FlagComponent, countrySelectComponent: CountrySelect, inputComponent: (inputProps) => (_jsx(InputComponent, Object.assign({}, inputProps, { className: inputClassName, icon: icon }))), smartCaret: false, value: value || undefined, 
        /**
         * Handles the onChange event.
         *
         * react-phone-number-input might trigger the onChange event as undefined
         * when a valid phone number is not entered. To prevent this,
         * the value is coerced to an empty string.
         *
         * @param {E164Number | undefined} value - The entered value
         */
        onChange: (value) => onChange === null || onChange === void 0 ? void 0 : onChange(value || "") }, props)));
});
PhoneInput.displayName = "PhoneInput";
const InputComponent = React.forwardRef((_a, ref) => {
    var { className, icon } = _a, props = __rest(_a, ["className", "icon"]);
    return (_jsx(Input, Object.assign({ className: cn(" rounded-none border-0 border-l border-input focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none h-fit py-0 pr-0 shadow-none flex-1", className), icon: icon }, props, { ref: ref })));
});
InputComponent.displayName = "InputComponent";
const CountrySelect = ({ disabled, value: selectedCountry, options: countryList, onChange, }) => {
    const scrollAreaRef = React.useRef(null);
    const [searchValue, setSearchValue] = React.useState("");
    const [isOpen, setIsOpen] = React.useState(false);
    return (_jsxs(Popover, { open: isOpen, modal: true, onOpenChange: (open) => {
            setIsOpen(open);
            if (open) {
                setSearchValue("");
            }
        }, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { type: "button", variant: "outline", className: "flex h-auto gap-1 rounded-lg  border-0 px-3 focus:z-10 shadow-none bg-transparent", disabled: disabled, children: [_jsx(FlagComponent, { country: selectedCountry, countryName: selectedCountry }), _jsx(ChevronDown, { className: cn("-mr-2 size-4 opacity-50 text-text-field-border", disabled ? "hidden" : "opacity-100") })] }) }), _jsx(PopoverContent, { className: "w-[300px] p-0", children: _jsxs(Command, { children: [_jsx(CommandInput, { value: searchValue, onValueChange: (value) => {
                                setSearchValue(value);
                                setTimeout(() => {
                                    if (scrollAreaRef.current) {
                                        const viewportElement = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]");
                                        if (viewportElement) {
                                            viewportElement.scrollTop = 0;
                                        }
                                    }
                                }, 0);
                            }, placeholder: "Search country..." }), _jsx(CommandList, { children: _jsxs(ScrollArea, { ref: scrollAreaRef, className: "h-72", children: [_jsx(CommandEmpty, { children: "No country found." }), _jsx(CommandGroup, { children: countryList.map(({ value, label }) => value ? (_jsx(CountrySelectOption, { country: value, countryName: label, selectedCountry: selectedCountry, onChange: onChange, onSelectComplete: () => setIsOpen(false) }, value)) : null) })] }) })] }) })] }));
};
const CountrySelectOption = ({ country, countryName, selectedCountry, onChange, onSelectComplete, }) => {
    const handleSelect = () => {
        onChange(country);
        onSelectComplete();
    };
    return (_jsxs(CommandItem, { className: "gap-2", onSelect: handleSelect, children: [_jsx(FlagComponent, { country: country, countryName: countryName }), _jsx("span", { className: "flex-1 text-sm", children: countryName }), _jsx("span", { className: "text-sm text-foreground/50", children: `+${getCountryCallingCode(country)}` }), _jsx(CheckIcon, { className: `ml-auto size-4 ${country === selectedCountry ? "opacity-100" : "opacity-0"}` })] }));
};
const FlagComponent = ({ country, countryName }) => {
    const Flag = flags[country];
    return (_jsx("span", { className: "flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg:not([class*='size-'])]:size-full", children: Flag && _jsx(Flag, { title: countryName }) }));
};
export { PhoneInput };
