
import React, { useState } from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductGrid = ({ products, onProductClick }: ProductGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">Discover our handpicked selection of premium items</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category === 'all' ? 'All Products' : category}
              </Button>
            ))}
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
