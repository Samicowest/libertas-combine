import { BlocksquareServiceCard } from "./BlocksquareServiceCard";

export const DiscoverBlocksquare = () => {
  const services = [
    {
      title: "Own Fractions of Properties",
      description:
        "Real Estate investments have access to a wealth hub of resources that can help you make more informed decisions and resource allocation.",
      image:
        "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🏠",
    },
    {
      title: "List Your Properties",
      description:
        "Working with a real estate agency can give you peace of mind, knowing that you have a knowledgeable and experienced professional handling your property.",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "📋",
    },
    {
      title: "Co-own High-end Real Estate",
      description:
        "A real estate agency can save you time by handling the tedious and time-consuming tasks associated with buying or selling a property.",
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
            Welcome to Blocksquare – the global marketplace where property
            ownership is redefined. Led by young entrepreneurs like you, we've
            broken down traditional barriers. Now, you can:
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
