import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import React from "react";
import { homeFaqs } from "../../../../public/data/homeFaqs";
import assets from "../../../../public/images";

const HomeFaq = () => {
  return (
    <Container>
      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full lg:w-[40%]">
          <SectionTitle
            title="our most common questions"
            description="Do you have a question about platform? Please contact us! We would love to answer your questions."
          />
          <div>
            <Image className="" src={assets?.images?.faq} alt="FAQ" />
          </div>
        </div>
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="mx-auto w-full bg-arx-black-5 lg:w-[60%]"
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
      </div>
    </Container>
  );
};

export default HomeFaq;
