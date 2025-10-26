'use client'

import { Bold, Italic, Underline, Strikethrough } from 'lucide-react';
import { useState } from 'react';

import { ToggleGroup, ToggleGroupItem } from 'ethereal-ui';

export default function ToggleGroupMultipleDemo() {
  const [formatting, setFormatting] = useState<string[]>(['bold', 'italic']);
  
  return (
    <div className="flex flex-col gap-4 items-center">
      <ToggleGroup 
        type="multiple" 
        value={formatting} 
        onValueChange={setFormatting}
      >
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
          <Strikethrough className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Selected formatting: <span className="font-medium text-foreground">{formatting.length > 0 ? formatting.join(', ') : 'none'}</span>
        </p>
        
        <div className="mt-4 p-4 border rounded-md">
          <p
            style={{
              fontWeight: formatting.includes('bold') ? 'bold' : 'normal',
              fontStyle: formatting.includes('italic') ? 'italic' : 'normal',
              textDecoration: [
                formatting.includes('underline') ? 'underline' : '',
                formatting.includes('strikethrough') ? 'line-through' : '',
              ].filter(Boolean).join(' '),
            }}
          >
            Sample text with applied formatting
          </p>
        </div>
      </div>
    </div>
  );
} 