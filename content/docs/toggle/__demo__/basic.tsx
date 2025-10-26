import { Bold, Italic, Underline } from 'lucide-react';

import { Toggle } from 'ethereal-ui';

export default () => (
  <div className="flex items-center gap-2">
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
    <Toggle aria-label="Toggle underline">
      <Underline className="h-4 w-4" />
    </Toggle>
    <Toggle aria-label="Toggle label">
      With Text
    </Toggle>
    <Toggle aria-label="Toggle with both">
      <Bold className="h-4 w-4" />
      Bold
    </Toggle>
  </div>
) 