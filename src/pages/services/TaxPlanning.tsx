import React from 'react';
import { Calculator, FileText, TrendingDown, ArrowRight } from 'lucide-react';

const TaxPlanning = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Direct Tax Planning & ITR Filing',
      description: 'Income tax planning, optimization strategies, and compliance for individuals and businesses.',
      href: '#/blog/direct-tax-planning'
    },
    {
      icon: FileText,
      title: 'Indirect Tax Planning & GST Compliance',
      description: 'GST registration, filing, compliance, and optimization for businesses of all sizes.',
      href: '#/blog/indirect-tax-planning'
    },
    {
      icon: FileText,
      title: 'Tax-Saving Investment Strategies',
      description: 'GST registration, filing, compliance, and optimization for businesses of all sizes.',
      href: '#/blog/tax-saving-investment-strategies'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Calculator className="h-10 w-10 text-yellow-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tax Planning
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reduce your tax liabilities with our personalized tax planning and filing strategies. 
              Be it direct or indirect taxes, we ensure optimized post-tax wealth creation.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="bg-yellow-100 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-yellow-600" />
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
      <section className="py-20 bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Save More on Taxes Legally
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Let our CA experts help you optimize your tax strategy and maximize savings.
          </p>
          <a
            href="/contact"
            className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Expert Help, Fast.
          </a>
        </div>
      </section>
    </div>
  );
};

export default TaxPlanning;