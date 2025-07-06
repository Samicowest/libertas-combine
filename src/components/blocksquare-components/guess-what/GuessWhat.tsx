import { Button } from "@/components/ui/button";

export const GuessWhat = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
            Guess What!
          </span>
        </h2>

        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          The world demands smarter solutions. You are building an innovative
          future for yourself, and your financial journey should be just as
          forward thinking. You need direct accessible ways to tap into the
          power of property investment, to build real wealth that aligns with
          your current resources.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://marketplace.oceanpoint.fi/oceanpoint/auth/sign-up?referralCode=4684081497c715e0a69ef3447b34631f1aee50001b966c374528e468f50b4000"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-2 text-lg font-semibold"
          >
            Start Your Journey →
          </a>
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white px-8 py-3 text-lg font-semibold"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
