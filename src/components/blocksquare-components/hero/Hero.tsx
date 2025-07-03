
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/80 to-teal-900/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your degree. Your future. Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
            real estate empire
          </span>
          .
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Starts here
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200">
          Seven years ago, in 2018, a truth became undeniable: Real Estate is the ultimate path to wealth. But for ambitious young minds like you, actually owning it felt impossible. Massive down payments, complex paperwork, and out-of-reach opportunities stood in the way.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-3 text-lg font-semibold">
            EXPLORE PROPERTIES NOW →
          </Button>
          <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 text-lg font-semibold">
            Learn to Earn
          </Button>
        </div>
      </div>
    </section>
  );
};
