import { Bold } from 'lucide-react';

import { Toggle } from 'ethereal-ui';

export default () => (
  <div className="flex flex-col gap-8">
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">Default Variant</p>
      <div className="flex items-center gap-2">
        <Toggle size="sm" aria-label="Toggle small">
          <Bold className="h-3.5 w-3.5" />
          Small
        </Toggle>
        <Toggle size="default" aria-label="Toggle default">
          <Bold className="h-4 w-4" />
          Default
        </Toggle>
        <Toggle size="lg" aria-label="Toggle large">
          <Bold className="h-4.5 w-4.5" />
          Large
        </Toggle>
      </div>
    </div>
    
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">Outline Variant</p>
      <div className="flex items-center gap-2">
        <Toggle variant="outline" size="sm" aria-label="Toggle small outline">
          <Bold className="h-3.5 w-3.5" />
          Small
        </Toggle>
        <Toggle variant="outline" size="default" aria-label="Toggle default outline">
          <Bold className="h-4 w-4" />
          Default
        </Toggle>
        <Toggle variant="outline" size="lg" aria-label="Toggle large outline">
          <Bold className="h-4.5 w-4.5" />
          Large
        </Toggle>
      </div>
    </div>
    
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">With Custom Colors</p>
      <div className="flex items-center gap-2">
        <Toggle 
          className="bg-blue-50 text-blue-500 hover:bg-blue-100 hover:text-blue-600 data-[state=on]:bg-blue-500 data-[state=on]:text-white" 
          aria-label="Toggle blue"
        >
          Blue
        </Toggle>
        <Toggle 
          className="bg-amber-50 text-amber-500 hover:bg-amber-100 hover:text-amber-600 data-[state=on]:bg-amber-500 data-[state=on]:text-white" 
          aria-label="Toggle amber"
        >
          Amber
        </Toggle>
        <Toggle 
          className="bg-green-50 text-green-500 hover:bg-green-100 hover:text-green-600 data-[state=on]:bg-green-500 data-[state=on]:text-white" 
          aria-label="Toggle green"
        >
          Green
        </Toggle>
      </div>
    </div>
  </div>
) 