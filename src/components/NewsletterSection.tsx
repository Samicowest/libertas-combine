
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Handle newsletter subscription logic here
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter to Get Updates to Our Latest Collection
          </h2>
          <p className="text-purple-100 text-lg">
            Stay informed about our latest research, insights, and service updates
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-12 bg-white border-0 focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="h-12 px-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
          >
            Subscribe
          </Button>
        </form>
        
        <p className="text-purple-200 text-sm mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
