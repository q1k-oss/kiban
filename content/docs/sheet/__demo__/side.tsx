'use client'

import { useState } from 'react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from 'ethereal-ui';

export default () => {
  const [side, setSide] = useState<"top" | "right" | "bottom" | "left">("right");
  
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
        <p className="text-sm text-muted-foreground">Choose side:</p>
        <div className="flex gap-1">
          <Button
            variant={side === "top" ? "default" : "outline"}
            size="sm"
            onClick={() => setSide("top")}
          >
            Top
          </Button>
          <Button
            variant={side === "right" ? "default" : "outline"}
            size="sm"
            onClick={() => setSide("right")}
          >
            Right
          </Button>
          <Button
            variant={side === "bottom" ? "default" : "outline"}
            size="sm"
            onClick={() => setSide("bottom")}
          >
            Bottom
          </Button>
          <Button
            variant={side === "left" ? "default" : "outline"}
            size="sm"
            onClick={() => setSide("left")}
          >
            Left
          </Button>
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="ml-4">Open Sheet from {side}</Button>
        </SheetTrigger>
        <SheetContent side={side}>
          <SheetHeader>
            <SheetTitle>Sheet from {side}</SheetTitle>
            <SheetDescription>
              This sheet slides in from the {side} of the screen.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              The Sheet component can slide in from any edge of the screen, making it versatile
              for different use cases and screen sizes.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground">
              <li>Top: Great for notifications or quick actions</li>
              <li>Right: Perfect for navigation or settings panels</li>
              <li>Bottom: Ideal for mobile interfaces and action sheets</li>
              <li>Left: Commonly used for main navigation menus</li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
} 