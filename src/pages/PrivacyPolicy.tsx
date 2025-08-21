import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> March 2024
          </p>

          <p>
            At Mozno Advisory, we value your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Personal identification information (name, email, phone number)</li>
            <li>Financial information relevant to our advisory services</li>
            <li>Usage data and website analytics</li>
            <li>Communication records and preferences</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide personalized financial advisory services</li>
            <li>Communicate with you about our services</li>
            <li>Improve our website and service offerings</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your 
            information only in the following circumstances:
          </p>
          <ul>
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>With trusted service providers who assist in our operations</li>
            <li>To protect our rights and safety</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
            over the internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can control cookie 
            settings through your browser preferences.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: info@moznoadvisory.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Office No. 123, Business Center, Andheri East, Mumbai - 400069</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;