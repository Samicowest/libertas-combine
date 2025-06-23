
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
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-bl from-purple-100 to-blue-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-20 blur-lg"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Questions? Look here.</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">Find answers to commonly asked questions about our services</p>
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
