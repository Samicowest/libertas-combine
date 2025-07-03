import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Is this real? How do I know Blocksquare isn't a scam?",
      answer:
        "Blocksquare is a legitimate blockchain-based real estate platform with over 162 active properties. We're regulated, transparent, and backed by real technology. You can verify our properties, see actual ownership records on the blockchain, and start with small amounts to test the platform.",
    },
    {
      question: "How much money do I need to start investing?",
      answer:
        "You can start investing with as little as ₦10,000 (about $12). Unlike traditional real estate that requires millions in down payments, Blocksquare lets you buy fractions of properties, making it accessible for students and young professionals.",
    },
    {
      question: "Is this legal in Nigeria? What about regulations?",
      answer:
        "Yes, digital asset ownership and blockchain-based investments are legal in Nigeria. We comply with all relevant financial regulations and work within the legal framework. However, as with any investment, we recommend doing your own research and consulting with financial advisors.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <h2 className="font-montserrat font-semibold text-3xl md:text-4xl text-center text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            We know you have questions. Here are honest answers to the concerns
            most FUTO students have about getting started with real estate
            investment.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-slate-200 px-6"
              >
                <AccordionTrigger className="text-left font-montserrat font-medium text-slate-800 hover:text-blocksquare-blue py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="text-blocksquare-blue hover:text-blue-700 font-medium underline underline-offset-4 transition-colors"
            >
              Join Our WhatsApp Community
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default FaqSection;
