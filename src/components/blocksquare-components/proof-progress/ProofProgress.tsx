export const ProofProgress = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl bg-white mx-auto rounded-md p-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Business growth visualization"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-600/20" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The Proof is in the Progress
            </h2>

            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Blocksquare isn't just an idea; it's a thriving reality. With
                <span className="font-semibold text-cyan-600">
                  over 162 properties actively traded
                </span>{" "}
                on several partner marketplaces, Blocksquare is empowering a new
                generation of investors
                <span className="font-semibold text-cyan-600">
                  Hundreds of young people
                </span>{" "}
                have already become property owners, profitable agents and many
                even co-owning university student rental accommodations –
                imagine the possibilities right here in your city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
