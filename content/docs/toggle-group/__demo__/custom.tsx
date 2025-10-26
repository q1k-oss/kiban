'use client'

import { useState } from 'react';

import { ToggleGroup, ToggleGroupItem } from 'ethereal-ui';

export default function ToggleGroupCustomDemo() {
  const [selectedColor, setSelectedColor] = useState('indigo');
  
  const colors = [
    { value: 'slate', label: 'Slate', bgClass: 'bg-slate-500', ringClass: 'ring-slate-400' },
    { value: 'gray', label: 'Gray', bgClass: 'bg-gray-500', ringClass: 'ring-gray-400' },
    { value: 'zinc', label: 'Zinc', bgClass: 'bg-zinc-500', ringClass: 'ring-zinc-400' },
    { value: 'red', label: 'Red', bgClass: 'bg-red-500', ringClass: 'ring-red-400' },
    { value: 'orange', label: 'Orange', bgClass: 'bg-orange-500', ringClass: 'ring-orange-400' },
    { value: 'amber', label: 'Amber', bgClass: 'bg-amber-500', ringClass: 'ring-amber-400' },
    { value: 'yellow', label: 'Yellow', bgClass: 'bg-yellow-500', ringClass: 'ring-yellow-400' },
    { value: 'lime', label: 'Lime', bgClass: 'bg-lime-500', ringClass: 'ring-lime-400' },
    { value: 'green', label: 'Green', bgClass: 'bg-green-500', ringClass: 'ring-green-400' },
    { value: 'emerald', label: 'Emerald', bgClass: 'bg-emerald-500', ringClass: 'ring-emerald-400' },
    { value: 'teal', label: 'Teal', bgClass: 'bg-teal-500', ringClass: 'ring-teal-400' },
    { value: 'cyan', label: 'Cyan', bgClass: 'bg-cyan-500', ringClass: 'ring-cyan-400' },
    { value: 'sky', label: 'Sky', bgClass: 'bg-sky-500', ringClass: 'ring-sky-400' },
    { value: 'blue', label: 'Blue', bgClass: 'bg-blue-500', ringClass: 'ring-blue-400' },
    { value: 'indigo', label: 'Indigo', bgClass: 'bg-indigo-500', ringClass: 'ring-indigo-400' },
    { value: 'violet', label: 'Violet', bgClass: 'bg-violet-500', ringClass: 'ring-violet-400' },
    { value: 'purple', label: 'Purple', bgClass: 'bg-purple-500', ringClass: 'ring-purple-400' },
    { value: 'fuchsia', label: 'Fuchsia', bgClass: 'bg-fuchsia-500', ringClass: 'ring-fuchsia-400' },
    { value: 'pink', label: 'Pink', bgClass: 'bg-pink-500', ringClass: 'ring-pink-400' },
    { value: 'rose', label: 'Rose', bgClass: 'bg-rose-500', ringClass: 'ring-rose-400' },
  ];
  
  const selectedColorData = colors.find(color => color.value === selectedColor);
  
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="w-full max-w-md">
        <ToggleGroup 
          type="single" 
          value={selectedColor} 
          onValueChange={(value) => value && setSelectedColor(value)}
          className="flex flex-wrap justify-center gap-2"
        >
          {colors.map((color) => (
            <ToggleGroupItem
              key={color.value}
              value={color.value}
              aria-label={color.label}
              className={`rounded-full p-0 h-8 w-8 data-[state=on]:ring-2 ${color.ringClass}`}
            >
              <div className={`${color.bgClass} h-full w-full rounded-full`} />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <div className={`h-20 w-20 rounded-full ${selectedColorData?.bgClass}`}></div>
        <p className="text-sm font-medium">Selected: {selectedColorData?.label}</p>
        <p className="text-xs text-muted-foreground">Color: {selectedColor}</p>
      </div>
      
      <div className={`p-4 border rounded-md shadow-sm w-full max-w-sm`}>
        <h3 className={`font-medium text-${selectedColor}-600 dark:text-${selectedColor}-400`}>
          Custom Toggle Group
        </h3>
        <p className="mt-2 text-sm">
          This example demonstrates a custom toggle group implementation with color swatches. 
          The selected color is {selectedColorData?.label}.
        </p>
      </div>
    </div>
  );
} 