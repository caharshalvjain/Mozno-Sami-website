import React from 'react';

const Disclaimer = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> March 2024
          </p>

          <h2>Investment Risks</h2>
          <p>
            Investment in securities is subject to market risk. Past performance is not indicative of 
            future returns. The value of investments can go up or down, and you may not get back the 
            amount you invested.
          </p>

          <h2>No Guarantee of Returns</h2>
          <p>
            Mozno Advisory does not guarantee returns or safety of capital. All investment decisions 
            should be made based on your own risk assessment and financial situation.
          </p>

          <h2>Professional Advice</h2>
          <p>
            The information provided on this website is for educational purposes only and should not 
            be considered as personalized investment advice. Please consult with our qualified advisors 
            for recommendations specific to your situation.
          </p>

          <h2>Regulatory Compliance</h2>
          <p>
            Mozno Advisory is a SEBI registered investment advisor. We comply with all applicable 
            regulations and guidelines set by SEBI, IRDAI, and other regulatory authorities.
          </p>

          <h2>Third-Party Products</h2>
          <p>
            We may recommend products from various financial institutions. While we conduct due 
            diligence, we are not responsible for the performance or policies of these third-party providers.
          </p>

          <h2>Market Volatility</h2>
          <p>
            Financial markets are subject to volatility and various economic factors. Investment 
            values may fluctuate significantly, especially in the short term.
          </p>

          <h2>Tax Implications</h2>
          <p>
            Tax laws are subject to change, and the tax treatment of investments may vary based on 
            individual circumstances. Please consult a tax advisor for specific tax-related queries.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Mozno Advisory shall not be liable for any direct, indirect, incidental, or consequential 
            damages arising from the use of our services or reliance on information provided.
          </p>

          <h2>Contact Information</h2>
          <p>
            For any questions regarding this disclaimer, please contact us at info@moznoadvisory.com 
            or +91 98765 43210.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;