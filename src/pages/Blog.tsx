import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import MutualFundsPage from '../blogs/1.1mutual-funds.tsx';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Why SIP is the New FD for Millennials',
      excerpt: 'Discover why young investors are turning away from fixed deposits and embracing Systematic Investment Plans for better returns.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Harshal Jain',
      date: 'March 15, 2024',
      slug: 'why-sip-is-new-fd'
    },
    {
      title: 'How to Save ₹1.5 Lakh in Taxes Legally',
      excerpt: 'Explore legitimate tax-saving options under 80C, 80D, and beyond. Suitable for salaried and business professionals.',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Harshal Jain',
      date: 'March 10, 2024',
      slug: 'save-tax-legally'
    },
    {
      title: '5 Mistakes to Avoid While Buying Insurance',
      excerpt: 'Know what to check before buying term or health insurance so you don\'t regret later.',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Harshal Jain',
      date: 'March 5, 2024',
      slug: 'insurance-buying-mistakes'
    },
    {
      title: 'Retirement Planning: Start Early, Retire Wealthy',
      excerpt: 'A step-by-step guide on building your retirement corpus from your 20s to your 50s.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Harshal Jain',
      date: 'February 28, 2024',
      slug: 'retirement-planning-guide'
    },
    {
      title: 'Mutual Funds vs Fixed Deposits: Which is Better?',
      excerpt: 'A comprehensive comparison of mutual funds and fixed deposits to help you make informed investment decisions.',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Harshal Jain',
      date: 'February 20, 2024',
      slug: 'mutual-funds-vs-fd'
    },
    {
      title: 'Home Loan Tips: Get the Best Interest Rates',
      excerpt: 'Expert tips on securing the best home loan rates and terms for your dream home purchase.',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Harshal Jain',
      date: 'February 15, 2024',
      slug: 'home-loan-tips'
    }
  ];

  return (<MutualFundsPage/>);

//   return (
//     <div className="pt-16 lg:pt-20">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//               Financial Insights & Tips
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Stay updated with the latest financial trends, investment strategies, and expert advice
//               to make informed decisions about your money.
//             </p>
//           </div>
//         </div>
//       </section>
//
//       {/* Blog Posts */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogPosts.map((post, index) => (
//               <article key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <div className="flex items-center text-sm text-gray-500 mb-3">
//                     <User className="h-4 w-4 mr-1" />
//                     <span className="mr-4">{post.author}</span>
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span>{post.date}</span>
//                   </div>
//
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
//                     {post.title}
//                   </h3>
//
//                   <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
//                     {post.excerpt}
//                   </p>
//
//                   <a
//                     href={`#//blog/${post.slug}`}
//                     className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
//                   >
//                     Read More
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* Newsletter Signup */}
//       <section className="py-20 bg-green-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
//             Stay Updated with Financial Tips
//           </h2>
//           <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
//             Subscribe to our newsletter for weekly financial insights and market updates.
//           </p>
//           <div className="max-w-md mx-auto flex gap-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300"
//             />
//             <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
};

export default Blog;