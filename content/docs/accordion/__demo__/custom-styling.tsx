import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'ethereal-ui';

export default () => (
  <Accordion 
    type="single" 
    collapsible 
    className="w-full rounded-md border p-4"
  >
    <AccordionItem value="item-1" className="border-b-0">
      <AccordionTrigger className="text-primary hover:no-underline">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-primary"></div>
          Custom Trigger Style
        </div>
      </AccordionTrigger>
      <AccordionContent className="bg-muted/50 p-4 rounded-md">
        This content has custom styling with a background and padding.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="border-b-0 pt-2">
      <AccordionTrigger className="text-destructive hover:no-underline">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-destructive"></div>
          Destructive Style
        </div>
      </AccordionTrigger>
      <AccordionContent className="bg-destructive/10 p-4 rounded-md text-destructive">
        This content uses destructive styling for emphasis.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" className="pt-2">
      <AccordionTrigger className="text-secondary-foreground font-bold hover:no-underline">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-secondary"></div>
          Bold Custom Style
        </div>
      </AccordionTrigger>
      <AccordionContent className="bg-secondary/20 p-4 rounded-md">
        Another example of custom styled content.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
) 