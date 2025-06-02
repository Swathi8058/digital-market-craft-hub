
import React from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header onCartClick={() => {}} />
        <div className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About StyleHub</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Welcome to StyleHub, your premier destination for quality products and exceptional shopping experiences.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We're committed to bringing you the finest selection of products across electronics, fashion, and lifestyle categories. 
                Our team carefully curates each item to ensure quality, style, and value.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose StyleHub?</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Carefully curated product selection</li>
                <li>Competitive prices and regular deals</li>
                <li>Fast and reliable shipping</li>
                <li>30-day return policy</li>
                <li>Excellent customer service</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                Have questions? We'd love to hear from you. Reach out to our customer service team 
                and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default About;
