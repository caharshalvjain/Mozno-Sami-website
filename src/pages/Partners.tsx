import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'HDFC Bank', logo: 'https://via.placeholder.com/200x100/1f2937/ffffff?text=HDFC+BANK' },
    { name: 'ICICI Bank', logo: 'https://via.placeholder.com/200x100/1f2937/ffffff?text=ICICI+BANK' },
    { name: 'State Bank of India', logo: 'https://via.placeholder.com/200x100/1f2937/ffffff?text=SBI' },
    { name: 'Axis Bank', logo: 'https://via.placeholder.com/200x100/1f2937/ffffff?text=AXIS+BANK' },
    { name: 'Kotak Mahindra Bank', logo: 'https://via.placeholder.com/200x100/1f2937/ffffff?text=KOTAK' },
    { name: 'Life Insurance Corporation', logo: 'https://via.placeholder.com/200x100/1f2937/ffffff?text=LIC' },
    { name: 'HDFC Life', logo: 'https://via.placeholder.com/200x100/1f2937/ffffff?text=HDFC+LIFE' },
    { name: 'ICICI Prudential', logo: 'https://via.placeholder.com/200x100/1f2937/ffffff?text=ICICI+PRUD' },
    { name: 'Bajaj Finserv', logo: 'https://via.placeholder.com/200x100/1f2937/ffffff?text=BAJAJ' },
    { name: 'Tata AIG', logo: 'https://via.placeholder.com/200x100/1f2937/ffffff?text=TATA+AIG' },
    { name: 'Reliance Nippon Life', logo: 'https://via.placeholder.com/200x100/1f2937/ffffff?text=RELIANCE' },
    { name: 'Max Life Insurance', logo: 'https://via.placeholder.com/200x100/1f2937/ffffff?text=MAX+LIFE' }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Trusted Partners
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We collaborate with leading financial institutions across India to bring you the best 
              products and services for all your financial needs.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Our Partnerships Matter
            </h2>
            <p className="text-xl text-gray-600">
              Strategic alliances that benefit our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Rates</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to preferential rates and exclusive products through our strong partnerships.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wide Choice</h3>
              <p className="text-gray-600 leading-relaxed">
                Compare products from multiple providers to find the perfect fit for your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Faster Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamlined processes and dedicated support for quicker approvals and service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;