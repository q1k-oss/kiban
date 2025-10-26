'use client'

import { ChevronsUpDown, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
} from 'ethereal-ui';

export default () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="space-y-6">
      {/* Slide animation */}
      <div className="rounded-md border">
        <Collapsible
          open={isOpen1}
          onOpenChange={setIsOpen1}
          className="w-full"
        >
          <div className="flex items-center justify-between p-4">
            <h4 className="text-sm font-semibold">
              Slide Animation
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent 
            className="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up"
          >
            <div className="border-t p-4">
              <p className="text-sm text-muted-foreground">
                This content slides up and down when toggled.
                The animation is controlled by Tailwind classes.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      
      {/* Scale animation */}
      <div className="rounded-md border">
        <Collapsible
          open={isOpen2}
          onOpenChange={setIsOpen2}
          className="w-full"
        >
          <div className="flex items-center justify-between p-4">
            <h4 className="text-sm font-semibold">
              Scale Animation
            </h4>
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline"
                size="sm" 
                className="h-8 w-8 p-0 transition-all duration-200"
              >
                {isOpen2 ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent 
            className="overflow-hidden transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
          >
            <div className="border-t p-4">
              <p className="text-sm text-muted-foreground">
                This content scales and fades when toggled.
                The animation combines zoom and fade effects.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
} 