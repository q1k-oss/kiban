'use client'

import { useState } from 'react';

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'ethereal-ui';

export default function DrawerSidesDemo() {
  const [side, setSide] = useState<'top' | 'right' | 'bottom' | 'left'>('bottom');

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium">Drawer side:</p>
        <Select
          value={side}
          onValueChange={(value) => setSide(value as 'top' | 'right' | 'bottom' | 'left')}
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Select side" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="top">Top</SelectItem>
            <SelectItem value="right">Right</SelectItem>
            <SelectItem value="bottom">Bottom</SelectItem>
            <SelectItem value="left">Left</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Drawer direction={side}>
        <DrawerTrigger asChild>
          <Button>Open {side} drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>{side.charAt(0).toUpperCase() + side.slice(1)} Drawer</DrawerTitle>
              <DrawerDescription>
                This drawer slides in from the {side} of the screen.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <div className="flex h-20 w-full items-center justify-center rounded-md border border-dashed">
                <p className="text-sm text-muted-foreground">Content goes here</p>
              </div>
            </div>
            <DrawerFooter>
              <Button>Continue</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
} 