import React from 'react';
import { Target, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react';

const FinancialPlanning = () => {
  const services = [
    {
      icon: Target,
      title: 'Goal-Based Planning',
      description: 'Structured planning for specific life goals like buying a home, child education, or dream vacation.',
      href: '#/blog/goal-based-planning'
    },
    {
      icon: Users,
      title: 'Strategic Asset Allocation',
      description: 'Description needs to be added',
      href: '#/blog/strategic-asset-allocation'
    },
    {
      icon: TrendingUp,
      title: 'Retirement Planning',
      description: 'Comprehensive retirement corpus building strategies to ensure financial independence in your golden years.',
      href: '#/blog/retirement-planning'
    },
    {
      icon: Users,
      title: 'Cash Flow Management & Budgeting',
      description: 'Description needs to be added',
      href: '#/blog/cash-flow-management'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Target className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Financial Planning
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial roadmaps that cover your life goals, risk assessment, and strategic asset allocation. 
              We cover everything from child education to retirement and estate planning.
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
                  <div className="bg-blue-100 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-blue-600" />
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Plan Your Financial Future Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a personalized financial roadmap tailored to your life goals.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Expert Help, Fast.
          </a>
        </div>
      </section>
    </div>
  );
};

export default FinancialPlanning;