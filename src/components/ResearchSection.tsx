import React from "react";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import { defaultPosts } from "@/data/data";
import { BlogPost, BlogProps } from "@/types/types";

const postsBlog: BlogPost[] = defaultPosts;

const ResearchSection: React.FC<BlogProps> = ({ posts = postsBlog }) => {
  // Use Intersection Observer to detect when the container is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the container is visible
  });

  // Array of box data
  const boxes = [
    {
      id: 1,
      color: "bg-blue-500",
      text: "Box 1",
      animation: "translate-x-full",
    }, // Slide from right
    {
      id: 2,
      color: "bg-green-500",
      text: "Box 2",
      animation: "translate-y-full",
    }, // Slide from bottom
    {
      id: 3,
      color: "bg-purple-500",
      text: "Box 3",
      animation: "-translate-x-full",
    }, // Slide from left
  ];

  return (
    <section
      id="research"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute top-32 right-20 w-32 h-32 bg-white/3 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-20 h-20 bg-white/5 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-16 h-16 bg-white/3 rounded-full blur-md animate-bounce"
          style={{ animationDuration: "3s", animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
          Latest Research Posts
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-6 lg:mb-8"></div>
        <p className="text-lg sm:text-xl text-purple-100 mb-8 sm:mb-12 max-w-3xl mx-auto">
          Discover cutting-edge research and insights from our team of experts
        </p>

        <div
          ref={ref}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <article
              key={post.id}
              className={`flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl  transform transition-all duration-1000 ease-in-out ${
                inView
                  ? "translate-x-0 translate-y-0 opacity-100"
                  : `${boxes[index].animation} opacity-0`
              }`}
            >
              <div className="h-48 w-full relative">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-4 ">
                <div className="flex w-full flex-wrap gap-1  ">
                  {post.category.map((data) => {
                    return (
                      <span className=" bg-slate-400 text-white px-2 py-1 m-1 rounded-full text-[8px] font-medium">
                        {data}
                      </span>
                    );
                  })}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[8px]">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-md font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>

                  <div className="border-t pt-4">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      <span className="font-medium">Read more</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
