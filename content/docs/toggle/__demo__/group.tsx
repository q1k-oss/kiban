import { 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  AlignJustify,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  ListTodo,
} from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from 'ethereal-ui';

export default () => (
  <div className="flex flex-col gap-8">
    <div className="space-y-2">
      <p className="text-sm font-medium">Text Alignment (Single Selection)</p>
      <ToggleGroup type="single" defaultValue="center">
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
    </div>
    
    <div className="space-y-2">
      <p className="text-sm font-medium">Text Formatting (Multiple Selection)</p>
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
          <Strikethrough className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
    
    <div className="space-y-2">
      <p className="text-sm font-medium">List Types (Single Selection with Variant)</p>
      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem value="bullet" aria-label="Bullet list">
          <List className="h-4 w-4" />
          Bullet
        </ToggleGroupItem>
        <ToggleGroupItem value="number" aria-label="Numbered list">
          <ListOrdered className="h-4 w-4" />
          Numbered
        </ToggleGroupItem>
        <ToggleGroupItem value="check" aria-label="Checklist">
          <ListTodo className="h-4 w-4" />
          Checklist
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  </div>
) 