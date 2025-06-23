
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer as a consultancy?",
      answer: "We provide comprehensive asset development with blockchain technology, personnel development and training, and financial analytics and software solutions to help businesses optimize their operations and growth."
    },
    {
      question: "How can you help with our blockchain development?",
      answer: "Our team specializes in creating blockchain solutions that provide superior transparency and accessibility for both institutional and individual investors, ensuring secure and efficient asset management."
    },
    {
      question: "What makes your training programs different?",
      answer: "We focus on improving recruiting and social capabilities in ways that directly enhance your company's human resources potential, using proven methodologies and industry best practices."
    },
    {
      question: "Do you provide ongoing support for your solutions?",
      answer: "Yes, we offer comprehensive ongoing support for all our services, including regular updates, maintenance, and consultation to ensure your solutions continue to meet your evolving business needs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions? Look here.</h2>
          <p className="text-gray-600">Find answers to commonly asked questions about our services</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 bg-gray-50"
            >
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-purple-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-4">
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
