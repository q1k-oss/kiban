import { Bold, Italic, Underline } from 'lucide-react';

import { Toggle, ToggleGroup, ToggleGroupItem } from 'ethereal-ui';

export default () => (
  <div className="flex flex-col gap-6">
    <div className="space-y-2">
      <p className="text-sm font-medium">Disabled Toggles</p>
      <div className="flex items-center gap-2">
        <Toggle disabled aria-label="Toggle disabled">
          <Bold className="h-4 w-4" />
        </Toggle>
        
        <Toggle disabled pressed aria-label="Toggle disabled pressed">
          <Italic className="h-4 w-4" />
        </Toggle>
        
        <Toggle disabled variant="outline" aria-label="Toggle outline disabled">
          <Underline className="h-4 w-4" />
        </Toggle>
        
        <Toggle disabled aria-label="Toggle text disabled">
          Disabled
        </Toggle>
      </div>
    </div>
    
    <div className="space-y-2">
      <p className="text-sm font-medium">Disabled Toggle Group Items</p>
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" disabled aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
    
    <div className="space-y-2">
      <p className="text-sm font-medium">Disabled Toggle Group</p>
      <ToggleGroup type="multiple" disabled>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
          Bold
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
          Italic
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
          Underline
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  </div>
)