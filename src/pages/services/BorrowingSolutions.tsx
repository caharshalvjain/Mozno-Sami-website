import React from 'react';
import { CreditCard, Home, Building, TrendingDown, ArrowRight } from 'lucide-react';

const BorrowingSolutions = () => {
  const services = [
    {
      icon: Home,
      title: 'Home Loans & Property Finance',
      description: 'Best interest rates and terms for your dream home purchase or construction.',
      href: '#/blog/home-loans'
    },
    {
      icon: Building,
      title: 'Business Loans & MSME Finance',
      description: 'Unlock the value of your property for business or personal needs.',
      href: '#/blog/business-loans'
    },
    {
      icon: CreditCard,
      title: 'Personal Loans & Consumer Finance',
      description: 'Business loans and working capital solutions for small and medium enterprises.',
      href: '#/blog/personal-loans'
    },
    {
      icon: TrendingDown,
      title: 'Builder Finance & Stressed Asset Funding',
      description: 'Specialized funding solutions for distressed assets and restructuring needs.',
      href: '#/blog/builder-finance'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <CreditCard className="h-10 w-10 text-red-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Borrowing Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Loans are a tool, not a trap. We help you get the best deals on home loans, business loans, 
              and working capital with end-to-end support.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="bg-red-100 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Get the Best Loan Deals
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let us help you find the most competitive rates and terms for your borrowing needs.
          </p>
          <a
            href="/contact"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Expert Help, Fast.
          </a>
        </div>
      </section>
    </div>
  );
};

export default BorrowingSolutions;