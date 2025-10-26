'use client'

import { useState } from 'react';

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from 'ethereal-ui';

export default () => {
  const [checkboxValues, setCheckboxValues] = useState({
    check1: true,
    check2: false,
    check3: false,
  });
  
  const [radioValue, setRadioValue] = useState('item-1');
  
  const toggleCheckbox = (name: string) => {
    setCheckboxValues({
      ...checkboxValues,
      [name]: !checkboxValues[name as keyof typeof checkboxValues],
    });
  };
  
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-60 w-full items-center justify-center rounded-md border border-dashed text-sm">
        <div className="text-center">
          <p>Right click to view options</p>
          <p className="text-xs text-muted-foreground mt-2">
            Selected view: {radioValue === 'item-1' ? 'Grid' : radioValue === 'item-2' ? 'List' : 'Details'}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Options: {Object.entries(checkboxValues)
              .filter(([_, value]) => value)
              .map(([key]) => key === 'check1' ? 'Show Hidden' : key === 'check2' ? 'Show Extensions' : 'Show Preview')
              .join(', ') || 'None'}
          </p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>View Options</ContextMenuLabel>
        
        <ContextMenuSeparator />
        
        <ContextMenuRadioGroup value={radioValue} onValueChange={setRadioValue}>
          <ContextMenuRadioItem value="item-1">
            Grid View
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="item-2">
            List View
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="item-3">
            Details View
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        
        <ContextMenuSeparator />
        
        <ContextMenuCheckboxItem
          checked={checkboxValues.check1}
          onCheckedChange={() => toggleCheckbox('check1')}
        >
          Show Hidden Files
          <ContextMenuShortcut>⌘H</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        
        <ContextMenuCheckboxItem
          checked={checkboxValues.check2}
          onCheckedChange={() => toggleCheckbox('check2')}
        >
          Show Extensions
          <ContextMenuShortcut>⌘E</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        
        <ContextMenuCheckboxItem
          checked={checkboxValues.check3}
          onCheckedChange={() => toggleCheckbox('check3')}
        >
          Show Preview
          <ContextMenuShortcut>⌘P</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        
        <ContextMenuSeparator />
        
        <ContextMenuItem>
          Refresh
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
} 