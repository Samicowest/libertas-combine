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
      question:
        "Is tokenization as offered through Blocksquare, legally recognized in Nigeria?",
      answer:
        "Blocksquare’s protocol and standards are legally compliant with global standards. In Nigeria, its adoption is being pioneered by regulatory compliant bodies such as Libertas Alpha Technologies who remain legally responsive to the Nigerian setting.",
    },
    {
      question:
        "What is the actual minimum amount needed to begin my Real Estate portfolio with Blocksquare?",
      answer:
        "Access to revenue rights has never been simpler. While the price of each property token listed on a marketplace may vary based on property valuation, $100 worth of assets can get you multiple different property tokens.",
    },
    {
      question:
        "How exactly does the learn-to-earn campaign work? What are the Tangible benefits?",
      answer:
        "The campaign is built to educate and incentivize your Web3 Real Estate journey. It features simplified educational modules with guided content to improve your knowledge on the tokenization and opportunities in global borderless Real estate. You can directly earn tradeable Blocksquare ecosystem tokens, product discounts, advanced knowledge, certification and skillset. All while expanding your global network/reach.",
    },
    {
      question:
        "What are the key risks associated with investing in tokenized Real Estate, particularly in the Nigerian Context?",
      answer:
        "All forms of investment carry some sort of risk. With tokenized Real Estate on Global markets, the most concerning risk becomes regulatory uncertainty across different jurisdictions. This challenge can be mitigated through advocacy and policy redesigns. Market volatility may also emerge as a risk worth highlighting. The value of Real Estate even when tokenized is subject to broader economic fluctuations. Blockchain assisted smart contracts may also exhibit some form of technical risk but advanced audits are carried with progressive Blocksquare development. While these risks exist, we cannot afford to stand on the sidelines and watch the globe take a new face in Real Estate without us being co-architects.",
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
            We know you have questions: here is a list of Questions most young
            people in Nigeria have asked before getting started with
            Blocksquare’s solutions:
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
              href="https://chat.whatsapp.com/KueXtGoIA8A2OFXhXRle5m"
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
