'use client'

import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';
import { useState } from 'react';

import { ToggleGroup, ToggleGroupItem } from 'ethereal-ui';

export default function ToggleGroupBasicDemo() {
  const [alignment, setAlignment] = useState('center');
  
  return (
    <div className="flex flex-col gap-4 items-center">
      <ToggleGroup type="single" value={alignment} onValueChange={setAlignment}>
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="justify" aria-label="Justify">
          <AlignJustify className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Selected alignment: <span className="font-medium text-foreground">{alignment}</span>
        </p>
      </div>
    </div>
  );
} 