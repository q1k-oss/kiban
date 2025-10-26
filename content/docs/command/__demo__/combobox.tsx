'use client'

import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from 'ethereal-ui';

// Sample data for frameworks
const frameworks = [
  { value: 'react', label: 'React', icon: '⚛️' },
  { value: 'next', label: 'Next.js', icon: '▲' },
  { value: 'vue', label: 'Vue', icon: '🟢' },
  { value: 'nuxt', label: 'Nuxt.js', icon: '🟩' },
  { value: 'svelte', label: 'Svelte', icon: '🔶' },
  { value: 'angular', label: 'Angular', icon: '🅰️' },
  { value: 'solid', label: 'Solid', icon: '💠' },
];

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  
  const selectedFramework = frameworks.find(
    (framework) => framework.value === value
  );

  return (
    <div className="flex justify-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-60 justify-between"
          >
            {value
              ? <div className="flex items-center">
                  <span className="mr-1">{selectedFramework?.icon}</span>
                  <span>{selectedFramework?.label}</span>
                </div>
              : "Select framework..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-60 p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{framework.icon}</span>
                      <span>{framework.label}</span>
                    </div>
                    <Check
                      className={`ml-auto h-4 w-4 ${
                        value === framework.value ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
} 