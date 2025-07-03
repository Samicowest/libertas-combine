interface BlocksquareServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: string;
}

export const BlocksquareServiceCard = ({
  title,
  description,
  image,
  icon,
}: BlocksquareServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="aspect-[4/5] relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-2 h-auto left-2 right-2 flex items-center flex-col ">
          <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xl">
            {icon}
          </div>

          {/* Content */}
          <div className="left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-3 text-center leading-tight">
              {title}
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed text-center">
              {description}
            </p>
          </div>
        </div>
        {/* Icon */}
      </div>
    </div>
  );
};
