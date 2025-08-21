import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import moznoLogo from '../images/Mozno_Advisory_Logo_New.png'; // Adjust the path as necessary

const Footer = () => {
  const services = [
    { name: 'Wealth Management', href: '#/services/wealth-management' },
    { name: 'Financial Planning', href: '#/services/financial-planning' },
    { name: 'Tax Planning', href: '#/services/tax-planning' },
    { name: 'Insurance Planning', href: '#/services/insurance-planning' },
    { name: 'Borrowing Solutions', href: '#/services/borrowing-solutions' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#/about' },
    { name: 'Blog', href: '#/blog' },
    { name: 'Videos', href: '#/videos' },
    { name: 'Contact', href: '#/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#/privacy-policy' },
    { name: 'Disclaimer', href: '#/disclaimer' },
    { name: 'Terms & Conditions', href: '#/terms-conditions' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={moznoLogo}
                alt="Mozno Advisory Logo"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                  }
                }}
              />
              <div className="hidden">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
              </div>
              <div>
                <div className="text-xl font-bold">MOZNO ADVISORY</div>
                <div className="text-sm text-teal-400">One-stop house for all your financial needs</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded by CA Harshal Jain, Mozno Advisory simplifies your financial journey with
              expert guidance in wealth management, tax planning, and comprehensive financial solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://x.com/hvj2503" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/harshal-jain-979a54341" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/the_awareness_initiative" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@awareness_initiative" className="text-gray-400 hover:text-green-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-gray-300 hover:text-green-400 transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-green-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>106, Shyamkamal 'C' Building,</p>
                  <p>Agarwal Market, Vile Parle (E),</p>
                  <p>Mumbai - 400 057.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="tel:+919820507696" className="text-gray-300 hover:text-green-400 transition-colors">
                  +91 98205 07696
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="mailto:contact@mozno.in" className="text-gray-300 hover:text-green-400 transition-colors">
                  contact@mozno.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Mozno Advisory. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center text-gray-500 text-sm">
            <p>Investment in securities is subject to market risk. Please read all scheme related documents carefully.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
