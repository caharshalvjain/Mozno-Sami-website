import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzjGXyVvIx9BetbDWx_VIL24ZKjA8B4dLssWjKLMMPH8yuGo_hUaRg1vRpsxAU2iIfx/exec'; // Replace with your deployed Apps Script web app URL
const RECAPTCHA_SITE_KEY = '6Lc5b5IrAAAAAEcsiXPLIG5Xd__O817x4N46EzsP'; // Replace with your reCAPTCHA site key

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [consent, setConsent] = useState(false);
  const [touched, setTouched] = useState<{[key: string]: boolean}>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | ''>('');
  const [captcha, setCaptcha] = useState<string | null>(null);

  // Validation function
  const isFormValid = () =>
    formData.name.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.service.trim() &&
    consent &&
    captcha;

  // Error helpers
  const errors = {
    name: touched.name && !formData.name.trim(),
    email: touched.email && !formData.email.trim(),
    phone: touched.phone && !formData.phone.trim(),
    service: touched.service && !formData.service.trim(),
    captcha: touched.captcha && !captcha,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;
    setLoading(true);
    setStatus('');
    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('phone', formData.phone);
      form.append('service', formData.service);
      form.append('message', formData.message);
      form.append('g-recaptcha-response', captcha || '');

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setConsent(false);
        setTouched({});
        setCaptcha(null);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to take control of your financial future? Contact our expert advisors for
              personalized guidance and solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 98205 07696</p>
                    <p className="text-sm text-gray-500">Mon-Sat, 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@mozno.in</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      106, Shyamkamal 'C' Building,<br />
                      Agarwal Market, Vile Parle (E),<br />
                      Mumbai - 400 057.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600">+91 98205 07696</p>
                    <a
                      href="https://wa.me/919820507696"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      Send Message →
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 5:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                We’re Here to Help
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">Full Name is required.</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">Email Address is required.</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">Phone Number is required.</p>
                  )}
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  >
                    <option value="">Select a service</option>
                    <option value="wealth-management">Wealth Management</option>
                    <option value="financial-planning">Financial Planning</option>
                    <option value="tax-planning">Tax Planning</option>
                    <option value="insurance-planning">Insurance Planning</option>
                    <option value="borrowing-solutions">Borrowing Solutions</option>
                    <option value="succession-planning">Succession Planning</option>
                    <option value="others">Others</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1">Service selection is required.</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your financial goals..."
                  ></textarea>
                </div>
                <div>
                  <ReCAPTCHA
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={token => setCaptcha(token)}
                    onExpired={() => setCaptcha(null)}
                  />
                  {!captcha && touched && (
                    <p className="text-red-500 text-xs mt-1">Please complete the CAPTCHA.</p>
                  )}
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={consent}
                    onChange={e => setConsent(e.target.checked)}
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    By submitting this form, I agree to the <a href="/terms" className="text-green-600 underline">Terms &amp; Conditions</a> and <a href="/privacy" className="text-green-600 underline">Privacy Policy</a>.
                  </label>
                </div>
                <button
                  type="submit"
                  className={`w-full bg-green-600 text-white py-4 rounded-lg font-semibold transition-colors hover:bg-green-700 ${!isFormValid() || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!isFormValid() || loading}
                >
                  {loading ? 'Submitting...' : 'Get Expert Help, Fast.'}
                </button>
                {status === 'success' && (
                  <p className="text-green-600 text-sm mt-4">Thank you for your inquiry! We will contact you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-sm mt-4">Submission failed. Please try again later.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">Located in the heart of Mumbai's business district</p>
          </div>
          <div className="bg-gray-300 rounded-xl h-96 flex items-center justify-center">
            <p className="text-gray-600 text-lg">Interactive Google Map will be embedded here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;