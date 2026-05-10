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
    // No inner padding — let the parent (BlogPreview body wrapper) own the
    // horizontal alignment so the FAQ heading sits flush with tags / prose.
    <div className={className}>
      <h4 className="font-semibold mb-6 text-base text-primary-text">FAQ</h4>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, idx) => (
          // `border-b-0` overrides the default divider on `AccordionItem`.
          // No `data-[state=open]:` shifts (border / rounded / px / my) so
          // expanding an item never moves the rest of the list.
          <AccordionItem
            key={idx}
            value={`faq-${idx}`}
            className="border-b-0"
          >
            <AccordionTrigger className="text-left text-primary-text font-medium py-5 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-secondary-text leading-relaxed pb-5 pt-0">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SingleBlogFaq;
