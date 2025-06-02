
import React from 'react';
import { X, Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Product Details</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              {!product.inStock && (
                <Badge 
                  variant="destructive" 
                  className="absolute top-4 right-4"
                >
                  Out of Stock
                </Badge>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.rating}/5)</span>
              </div>

              {/* Price */}
              <div className="text-4xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </div>

              {/* Add to Cart */}
              <div className="space-y-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>

                <div className="text-sm text-gray-600 space-y-1">
                  <p>✓ Free shipping on orders over $50</p>
                  <p>✓ 30-day return policy</p>
                  <p>✓ 1-year warranty included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
