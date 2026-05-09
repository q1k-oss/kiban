import { cn } from '../../../utils/cn';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../accordion';
import type { ISingleBlogFaqProp } from '../types/type';

const SingleBlogFaq = ({ faqItems, className }: ISingleBlogFaqProp) => {
  if (!faqItems || faqItems.length === 0) return null;
  return (
    <div className={cn('p-6', className)}>
      <h4 className="font-semibold mb-6 text-base text-primary-text">FAQ</h4>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, idx) => (
          <AccordionItem
            key={idx}
            value={`faq-${idx}`}
            className={cn(
              'border-b border-border-3 last:border-b-0',
              // Active: lift the expanded item out of the divider list with
              // a soft golden frame so the user sees what they opened.
              'data-[state=open]:border data-[state=open]:border-b data-[state=open]:rounded-lg data-[state=open]:px-4 data-[state=open]:my-1 data-[state=open]:border-[#F4C656]/40',
            )}
          >
            <AccordionTrigger className="text-left text-primary-text font-medium py-4 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-secondary-text leading-relaxed pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SingleBlogFaq;
