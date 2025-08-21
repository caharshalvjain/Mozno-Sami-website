import React from 'react';
import { Shield, Heart, Car, ArrowRight } from 'lucide-react';

const InsurancePlanning = () => {
  const services = [
    {
      icon: Shield,
      title: 'Term & Life Insurance Advisory',
      description: 'Comprehensive life insurance coverage to protect your family\'s financial future.',
      href: '#/blog/term-life-insurance'
    },
    {
      icon: Heart,
      title: 'Health & Medical Insurance',
      description: 'Medical insurance plans to safeguard against rising healthcare costs.',
      href: '#/blog/health-insurance'
    },
    {
      icon: Car,
      title: 'Motor & General Insurance',
      description: 'Vehicle insurance and other general insurance products for complete protection.',
      href: '#/blog/motor-general-insurance'
    },
    {
      icon: Car,
      title: 'Insurance Portfolio Review & Optimization',
      description: 'Vehicle insurance and other general insurance products for complete protection.',
      href: '#/blog/insurance-portfolio-review'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Shield className="h-10 w-10 text-purple-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Insurance Planning
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Protecting your health, income, and legacy. We help you select the best life, health, 
              and general insurance products with claim assistance.
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
                  <div className="bg-purple-100 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-purple-600" />
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
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Secure Your Family's Future
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get the right insurance coverage tailored to your family's needs.
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Expert Help, Fast.
          </a>
        </div>
      </section>
    </div>
  );
};

export default InsurancePlanning;