
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Your
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Perfect Style
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Shop the latest trends in fashion, electronics, and lifestyle products. 
                Quality guaranteed, fast delivery, and exceptional customer service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View Collections
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                alt="Shopping Experience"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
