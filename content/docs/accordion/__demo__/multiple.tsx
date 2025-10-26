import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'ethereal-ui';

export default () => (
  <Accordion type="multiple" className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>What is Ethereal UI?</AccordionTrigger>
      <AccordionContent>
        Ethereal UI is a beautiful, modern component library built with React and Radix UI.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How do I install it?</AccordionTrigger>
      <AccordionContent>
        You can install Ethereal UI using npm or yarn:
        <pre className="mt-2 p-2 bg-muted rounded-md">
          <code>npm install ethereal-ui</code>
        </pre>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Can I customize the components?</AccordionTrigger>
      <AccordionContent>
        Yes. All components are highly customizable through props and can be themed to match your brand.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
) 