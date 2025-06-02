
import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              StyleHub
            </h1>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Categories</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>

            {/* User */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs p-0"
                >
                  {getTotalItems()}
                </Badge>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Categories</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors py-2">About</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
