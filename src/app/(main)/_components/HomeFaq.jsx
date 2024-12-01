import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import { homeFaqs } from "../../../../public/data/homeFaqs";

const HomeFaq = () => {
  return (
    <Container>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="mx-auto w-full bg-arx-primary md:w-[90%]"
      >
        {homeFaqs?.map((faq, index) => (
          <AccordionItem
            key={faq.id}
            value={`item-${index + 1}`}
            className="border-zinc-700 last:border-b-0"
          >
            <AccordionTrigger className="p-4 text-left font-semibold md:p-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-xs text-zinc-300 md:px-6 md:pb-6 md:text-sm md:leading-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default HomeFaq;
