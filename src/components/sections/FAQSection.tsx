import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Where is Libertas Alpha based?",
      answer:
        "Libertas Alpha is corporately registered in Nigeria but has a global web3 presence for borderless development.",
    },
    {
      question: "What is the purpose of Libertas Alpha?",
      answer:
        "Our main purpose is to drive social impact through cutting edge technology. We aim to create a more equitable and sustainable world.",
    },
    {
      question: "How does Libertas Alpha measure social impact?",
      answer:
        "We measure social impact through the tangible, positive changes our projects bring to people’s lives and communities. This includes improvements in access to essential services, job creation and enhanced quality of life.",
    },
    {
      question:
        "What makes Libertas Alpha Technologies different from other other companies?",
      answer:
        "We are unique because we combine advanced technology with a deep commitment to social good. Unlike traditional tech firms focused solely on profit, or non-profits limited by funding models, we build sustainable tech solutions that directly address social needs. Our decentralized model ensures shared risk and rewards.",
    },
    {
      question: "How does Libertas ensure financial sustainability?",
      answer:
        "We achieve financial sustainability by developing innovative solutions which generate revenue. This revenue is not the end goal; it is systemized to accomplish our missions without waiting for 3rd party capital injections. This ensures systematic growth.",
    },
    {
      question: "What type of organizations does Libertas Alpha Partner with?",
      answer:
        "We seek partners who share our commitment to social impact and innovation. This includes but not limited to: Cooperatives, local community groups, tech developers, research institutes, relevant LLCs, government agencies and impact investors. We believe in cross sector collaboration.",
    },
    {
      question:
        "How does Libertas Alpha involve local communities in projects? ",
      answer:
        "Community engagement is essential for social impact.  We empower locals and use participatory technology development for solution designs. We work hand in hand with local communities, involving them in solutions for the long term.",
    },
    {
      question:
        "What is Libertas Alpha Technologies’ Vision for the long term through Social Impact?",
      answer:
        "Our long term vision is to create a global ecosystem where technology is a direct force for sustainable development. This is true Freedom!",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-bl from-purple-100 to-blue-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-20 blur-lg"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Questions? Look here.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">
            Find answers to commonly asked questions about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-xl px-6 bg-gradient-to-r from-gray-50 to-gray-50 hover:from-purple-50 hover:to-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-purple-600 transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
