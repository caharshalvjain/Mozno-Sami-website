import React, { useState } from 'react';
import { 
  TrendingUp, 
  Target, 
  Calculator, 
  Shield, 
  CreditCard, 
  Star, 
  ArrowRight,
  Play,
  Users,
  Award,
  CheckCircle,
  Phone,
  Mail,
  ClipboardList
} from 'lucide-react';
import profilePic from '../images/Profile_Photo.jpeg'; // Adjust the path as necessary
import ReCAPTCHA from 'react-google-recaptcha';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzjGXyVvIx9BetbDWx_VIL24ZKjA8B4dLssWjKLMMPH8yuGo_hUaRg1vRpsxAU2iIfx/exec'; // Replace with your deployed Apps Script web app URL
const RECAPTCHA_SITE_KEY = '6Lc5b5IrAAAAAEcsiXPLIG5Xd__O817x4N46EzsP'; // Replace with your reCAPTCHA site key

const Home = () => {
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

  const services = [
    {
      icon: TrendingUp,
      title: 'Wealth Management',
      description: 'End-to-end wealth advisory tailored to your goals and risk appetite',
      href: '#/services/wealth-management',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      title: 'Financial Planning',
      description: 'Comprehensive financial roadmaps covering your life goals',
      href: '#/services/financial-planning',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calculator,
      title: 'Tax Planning',
      description: 'Reduce tax liabilities with personalized strategies',
      href: '#/services/tax-planning',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Shield,
      title: 'Insurance Planning',
      description: 'Protecting your health, income, and legacy',
      href: '#/services/insurance-planning',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CreditCard,
      title: 'Borrowing Solutions',
      description: 'Best deals on loans with end-to-end support',
      href: '#/services/borrowing-solutions',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: ClipboardList,
      title: 'Succession Planning',
      description: 'Secure your legacy for the next generation',
      href: '#/services/succession-planning',
      color: 'from-red-500 to-red-600'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      rating: 5,
      comment: 'Harshal and his team helped me restructure my investments and save significantly on taxes. Highly professional service!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      rating: 5,
      comment: 'Excellent financial planning guidance. They made complex investment concepts easy to understand.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Amit Patel',
      role: 'Doctor',
      rating: 5,
      comment: 'Got the best home loan rates through Mozno Advisory. Their support throughout the process was exceptional.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const partners = [
    { name: 'HDFC Bank', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=HDFC' },
    { name: 'ICICI Bank', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=ICICI' },
    { name: 'SBI', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=SBI' },
    { name: 'Axis Bank', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=AXIS' },
    { name: 'Kotak', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=KOTAK' },
    { name: 'LIC', logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=LIC' }
  ];

  const blogPosts = [
    {
      title: 'Why SIP is the New FD for Millennials',
      excerpt: 'Discover why young investors are turning away from fixed deposits and embracing Systematic Investment Plans for better returns.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      href: '/blog/why-sip-is-new-fd'
    },
    {
      title: 'How to Save ₹1.5 Lakh in Taxes Legally',
      excerpt: 'Explore legitimate tax-saving options under 80C, 80D, and beyond. Suitable for salaried and business professionals.',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      href: '/blog/save-tax-legally'
    },
    {
      title: 'Retirement Planning: Start Early, Retire Wealthy',
      excerpt: 'A step-by-step guide on building your retirement corpus from your 20s to your 50s.',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      href: '/blog/retirement-planning-guide'
    }
  ];


  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                One-stop house for all your{' '}
                <span className="text-teal-600">financial needs</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded by CA Harshal Jain, we simplify your financial journey with expert guidance 
                in wealth management, tax planning, and comprehensive financial solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center"
                >
                  Get Expert Help, Fast.
                </a>
                <a
                  href="tel:+919876543210"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors text-center"
                >
                  Call: +91 98205 07696
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Financial Planning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to your unique needs and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by hundreds of satisfied clients across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={profilePic}
                alt="Harshal Jain"
                className="w-90 h-90 object-cover rounded-full shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Meet the Founder
              </h2>
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-teal-600 mb-3">Harshal Jain</h3>
                <p className="text-2xl text-gray-600 mb-6">Chartered Accountant & Founder</p>
              </div>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Harshal Jain is a Chartered Accountant and Founder of Mozno Advisory. With experience
                spanning auditing, investment advisory, tax, and compliance, Harshal brings a vision
                to simplify financial journeys. Mozno aims to make strategic financial advice accessible
                to every Indian.
              </p>

              <blockquote className="border-l-4 border-teal-600 pl-6 mb-10">
                <p className="text-2xl italic text-gray-800">
                  "We simplify financial lives so that you can focus on what truly matters."
                </p>
              </blockquote>

              <div className="flex items-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/harshal-jain-979a54341"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="#/about"
                  className="text-teal-600 font-semibold hover:text-teal-700 transition-colors text-lg"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest financial tips and market insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.href}
                    className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              View All Articles
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Financial Future?
              </h2>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                Get personalized financial advice from our expert team. Book your free consultation today 
                and take the first step towards financial freedom.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-300" />
                  <span className="text-teal-100">Free initial consultation</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-300" />
                  <span className="text-teal-100">Personalized financial roadmap</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-300" />
                  <span className="text-teal-100">Expert guidance from CA</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-300" />
                  <span className="text-teal-100">Ongoing support and monitoring</span>
                </div>
              </div>
            </div>

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
    </div>
  );
};

export default Home;
