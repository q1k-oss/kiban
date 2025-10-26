import { ScrollArea } from 'ethereal-ui';

export default () => (
  <ScrollArea className="h-72 w-full rounded-md border p-4">
    <div className="space-y-4">
      <h4 className="text-sm font-medium">Introduction to Scroll Area</h4>
      <p className="text-sm text-muted-foreground">
        The ScrollArea component provides a scrollable container with a custom scrollbar 
        that is consistent across different browsers and operating systems.
      </p>
      <p className="text-sm text-muted-foreground">
        It is built on top of Radix UI's ScrollArea primitive, providing a reliable and 
        accessible scrolling experience that maintains the same visual design regardless 
        of the user's platform.
      </p>
      <h4 className="text-sm font-medium pt-2">Key Features</h4>
      <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-2">
        <li>
          Consistent styling across browsers and operating systems
        </li>
        <li>
          Customizable scrollbar appearance
        </li>
        <li>
          Support for both vertical and horizontal scrolling
        </li>
        <li>
          Maintains native scrolling behavior for the best user experience
        </li>
        <li>
          Automatically adjusts to the content size
        </li>
      </ul>
      <h4 className="text-sm font-medium pt-2">Use Cases</h4>
      <p className="text-sm text-muted-foreground">
        Scroll Areas are particularly useful for creating contained scrollable sections 
        within a page, such as side panels, code blocks, long lists, and modal content.
      </p>
      <p className="text-sm text-muted-foreground">
        By providing a consistent scrollbar appearance, they help maintain the visual 
        coherence of your interface while still allowing users to scroll through content 
        naturally.
      </p>
      <h4 className="text-sm font-medium pt-2">Accessibility</h4>
      <p className="text-sm text-muted-foreground">
        The ScrollArea component preserves the native scrolling functionality, ensuring 
        that keyboard navigation, touch scrolling, and screen reader compatibility are 
        maintained.
      </p>
      <p className="text-sm text-muted-foreground pb-4">
        This makes it an excellent choice for creating scrollable content that remains 
        accessible to all users, regardless of how they interact with your application.
      </p>
    </div>
  </ScrollArea>
) 