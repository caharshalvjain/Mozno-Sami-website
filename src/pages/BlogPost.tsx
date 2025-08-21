import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog post data - in a real app, this would come from an API
  const blogPost = {
    title: 'Why SIP is the New FD for Millennials',
    content: `
      <p>In today's rapidly changing financial landscape, millennials are increasingly moving away from traditional fixed deposits (FDs) and embracing Systematic Investment Plans (SIPs) as their preferred investment vehicle. This shift represents a fundamental change in how young Indians approach wealth creation and financial planning.</p>

      <h2>The Problem with Fixed Deposits</h2>
      <p>Fixed deposits, once considered the safest investment option, are losing their appeal among young investors. With inflation rates often exceeding FD returns, the real value of money invested in FDs is actually decreasing over time. Current FD rates hover around 5-7% annually, while inflation consistently runs at 4-6%, leaving investors with minimal real returns.</p>

      <h2>Why SIPs are Gaining Popularity</h2>
      <p>Systematic Investment Plans offer several advantages that make them particularly attractive to millennials:</p>
      
      <ul>
        <li><strong>Higher Returns:</strong> Historically, equity mutual funds have delivered returns of 12-15% annually over long periods</li>
        <li><strong>Rupee Cost Averaging:</strong> SIPs help reduce the impact of market volatility through systematic investing</li>
        <li><strong>Flexibility:</strong> Investors can start with as little as ₹500 per month and increase amounts as income grows</li>
        <li><strong>Tax Benefits:</strong> ELSS funds offer tax deductions under Section 80C</li>
      </ul>

      <h2>The Power of Compounding</h2>
      <p>The real magic of SIPs lies in the power of compounding. A monthly SIP of ₹5,000 for 20 years at 12% annual returns can grow to approximately ₹50 lakhs, compared to just ₹18 lakhs in a fixed deposit at 6% returns.</p>

      <h2>Getting Started with SIPs</h2>
      <p>Starting your SIP journey is easier than ever. Here's how to begin:</p>
      
      <ol>
        <li>Assess your risk tolerance and investment goals</li>
        <li>Choose appropriate mutual fund schemes</li>
        <li>Start with a comfortable amount and increase gradually</li>
        <li>Stay invested for the long term to maximize returns</li>
      </ol>

      <p>Remember, while SIPs offer higher return potential, they also come with market risks. It's essential to understand your risk appetite and invest accordingly.</p>
    `,
    author: 'Harshal Jain',
    date: 'March 15, 2024',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <a
          href="/blog"
          className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </a>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <header className="mb-8">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 lg:h-96 object-cover rounded-xl mb-8"
          />
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <User className="h-4 w-4 mr-1" />
            <span className="mr-4">{blogPost.author}</span>
            <Calendar className="h-4 w-4 mr-1" />
            <span>{blogPost.date}</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {blogPost.title}
          </h1>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-green-50 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Need Help with Your Investment Strategy?
          </h3>
          <p className="text-gray-600 mb-6">
            Our expert advisors can help you create a personalized investment plan that aligns with your financial goals.
          </p>
          <a
            href="/contact"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get Expert Help, Fast.
          </a>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;