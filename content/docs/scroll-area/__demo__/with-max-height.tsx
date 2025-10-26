import { ScrollArea } from 'ethereal-ui';

// Sample item data
const items = Array.from({ length: 50 }).map((_, i, a) => `Item ${i + 1} of ${a.length}`);

export default () => (
  <div className="space-y-2">
    <p className="text-sm text-muted-foreground">
      This ScrollArea has a max-height of 200px and will only show a scrollbar when the content exceeds this height.
    </p>
    <ScrollArea className="h-[200px] w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Items List</h4>
        {items.map((item) => (
          <div
            key={item}
            className="text-sm py-2 border-b last:border-0"
          >
            {item}
          </div>
        ))}
      </div>
    </ScrollArea>
  </div>
) 