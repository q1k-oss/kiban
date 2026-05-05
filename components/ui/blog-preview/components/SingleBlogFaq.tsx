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
      <h4 className="font-bold mb-4 text-lg">Frequently Asked Questions</h4>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, idx) => (
          <AccordionItem
            key={idx}
            value={`faq-${idx}`}
            className="border-b border-border-3 last:border-b-0"
          >
            <AccordionTrigger className="text-left text-primary-text font-semibold py-4 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-secondary-text italic leading-relaxed pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SingleBlogFaq;
