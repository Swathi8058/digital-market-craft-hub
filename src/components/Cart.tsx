
import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <Card className="h-full rounded-none border-0">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shopping Cart ({items.length})
              </CardTitle>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-0">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center p-6">
                <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                <p className="text-gray-500">Add some products to get started!</p>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {items.map(item => (
                  <div key={item.product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.product.name}</h4>
                      <p className="text-blue-600 font-bold">${item.product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500 hover:text-red-700"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>

          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-blue-600">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Proceed to Checkout
                </Button>
                <Button variant="outline" className="w-full" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Cart;
