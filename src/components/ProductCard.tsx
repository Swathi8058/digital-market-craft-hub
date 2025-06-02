
import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
      onClick={() => onProductClick(product)}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {!product.inStock && (
            <Badge 
              variant="destructive" 
              className="absolute top-2 right-2"
            >
              Out of Stock
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
