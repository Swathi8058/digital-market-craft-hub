
import React, { useState } from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import Cart from '@/components/Cart';
import ProductModal from '@/components/ProductModal';
import Footer from '@/components/Footer';
import { sampleProducts } from '@/data/products';
import { Product } from '@/types/product';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <HeroSection />
        <ProductGrid 
          products={sampleProducts} 
          onProductClick={handleProductClick}
        />
        <Footer />
        
        <Cart 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
        />
        
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={closeProductModal}
        />
      </div>
    </CartProvider>
  );
};

export default Index;
