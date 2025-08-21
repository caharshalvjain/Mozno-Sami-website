import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import moznoLogo from '../images/Mozno_Logo_Horizontal.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Wealth Management', href: '#/services/wealth-management' },
    { name: 'Financial Planning', href: '#/services/financial-planning' },
    { name: 'Tax Planning', href: '#/services/tax-planning' },
    { name: 'Insurance Planning', href: '#/services/insurance-planning' },
    { name: 'Borrowing Solutions', href: '#/services/borrowing-solutions' },
    { name: 'Succession Planning', href: '#/services/succession-planning' }
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#/" className="flex items-center space-x-3">
              <img
                src={moznoLogo}
                alt="Mozno Advisory Logo"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Home
            </a>
            <a href="#/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              About
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-teal-600 font-medium transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#/blog" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Blog
            </a>
            <a href="#/videos" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Videos
            </a>
            <a href="#/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Contact
            </a>

            <a
              href="#/contact"
              className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Get Expert Help, Fast.
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#/" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </a>
              <a href="#/about" className="text-gray-700 hover:text-green-600 font-medium">
                About
              </a>

              <div>
                <div className="text-gray-700 font-medium mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block text-gray-600 hover:text-green-600"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>

              <a href="#/partners" className="text-gray-700 hover:text-green-600 font-medium">
                Partners
              </a>
              <a href="#/blog" className="text-gray-700 hover:text-green-600 font-medium">
                Blog
              </a>
              <a href="#/videos" className="text-gray-700 hover:text-green-600 font-medium">
                Videos
              </a>
              <a href="#/contact" className="text-gray-700 hover:text-green-600 font-medium">
                Contact
              </a>

              <a
                href="#/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Get Expert Help, Fast.
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
