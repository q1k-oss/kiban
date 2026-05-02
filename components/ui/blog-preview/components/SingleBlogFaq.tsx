import { cn } from '../../../utils/cn';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../accordion';
import type { ISingleBlogFaqProp } from '../types/type';

const SingleBlogFaq = ({ faqItems, className }: ISingleBlogFaqProp) => {
  if (!faqItems || faqItems.length === 0) return null;
  return (
    <div className={cn('mt-10 border border-border-3 rounded-lg p-6', className)}>
      <h2 className="text-xl font-semibold text-primary-text mb-4">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, idx) => (
          <AccordionItem key={idx} value={`faq-${idx}`}>
            <AccordionTrigger className="text-left text-primary-text">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-secondary-text leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SingleBlogFaq;
