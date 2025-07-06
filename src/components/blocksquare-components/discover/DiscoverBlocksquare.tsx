import { BlocksquareServiceCard } from "./BlocksquareServiceCard";

export const DiscoverBlocksquare = () => {
  const services = [
    {
      title: "Co-Own High End Real Estate",
      description:
        "Fractional ownership is now a seamless reality. When you cannot afford to own the whole property, co-own the revenue with the same APY from the comfort of your phone, leveraging the transparency and immutability of blockchain technology.",
      image:
        "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🏠",
    },
    {
      title: "List Your Own Properties",
      description:
        "Working as a Real Estate Agency? You can now list your properties for an ocean of ready investors on international markets. Begin Directly with Blocksquare.",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "📋",
    },
    {
      title: "Create Your Unique Marketplace",
      description:
        "No sophisticated coding! Deploy your real estate business plan by launching your own private or public marketplace as a Blocksquare partner. Your Network will be ready to engage with your platform in a few weeks.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-20 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Blocksquare
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Welcome to Blocksquare - Helping Individuals and Businesses to
            redefine property ownership. Led by young entrepreneurs like you,
            Blocksquare has broken down traditional barriers for you. Now you
            can:-
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <BlocksquareServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
