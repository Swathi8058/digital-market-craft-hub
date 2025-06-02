
import React from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { sampleProducts } from '@/data/products';
import { Product } from '@/types/product';

const Products = () => {
  const handleProductClick = (product: Product) => {
    // Navigate to product detail - we'll implement this with routing
    console.log('Product clicked:', product);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header onCartClick={() => {}} />
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">All Products</h1>
          </div>
          <ProductGrid 
            products={sampleProducts} 
            onProductClick={handleProductClick}
          />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Products;
