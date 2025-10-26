'use client'

import { Info } from "lucide-react"

import { Button, Popover, PopoverContent, PopoverTrigger } from "ethereal-ui"

export default function PopoverArrowDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex gap-2 items-center">
          <Info className="h-4 w-4" />
          Information
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-64"
        sideOffset={8}
      >
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Important notice</h4>
          <p className="text-xs text-muted-foreground">
            This is a visual example of a popover with an arrow pointing to the trigger element.
          </p>
          <div className="pt-2">
            <Button variant="outline" size="sm" className="w-full">
              Acknowledge
            </Button>
          </div>
        </div>
        <div className="popover-arrow" />
        <style jsx>{`
          .popover-arrow {
            position: absolute;
            width: 10px;
            height: 10px;
            background: inherit;
            border: inherit;
            z-index: -1;
            border-top-width: 0;
            border-left-width: 0;
            left: 50%;
            bottom: 0;
            transform: translate(-50%, 50%) rotate(45deg);
          }
        `}</style>
      </PopoverContent>
    </Popover>
  )
} 