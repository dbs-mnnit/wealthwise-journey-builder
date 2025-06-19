
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-navy-900">
                Wealth<span className="text-gold-500">Wise</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-navy-900 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#blog" className="text-gray-700 hover:text-navy-900 px-3 py-2 text-sm font-medium transition-colors">
              Blog
            </a>
            <a href="#tools" className="text-gray-700 hover:text-navy-900 px-3 py-2 text-sm font-medium transition-colors">
              Tools
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-navy-900 px-3 py-2 text-sm font-medium transition-colors">
              Pricing
            </a>
            <a href="#community" className="text-gray-700 hover:text-navy-900 px-3 py-2 text-sm font-medium transition-colors">
              Community
            </a>
            <a href="#about" className="text-gray-700 hover:text-navy-900 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-navy-900 border-navy-900 hover:bg-navy-50">
              Login
            </Button>
            <Button className="bg-gold-500 hover:bg-gold-600 text-white">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-navy-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50">
                Home
              </a>
              <a href="#blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50">
                Blog
              </a>
              <a href="#tools" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50">
                Tools
              </a>
              <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50">
                Pricing
              </a>
              <a href="#community" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50">
                Community
              </a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50">
                About
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full text-navy-900 border-navy-900">
                  Login
                </Button>
                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
