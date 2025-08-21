import React from 'react';
import { Play, Calendar, Eye } from 'lucide-react';

const Videos = () => {
  const videos = [
    {
      title: 'SIP vs Lump Sum: Which is Better?',
      thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '8:45',
      views: '12.5K',
      date: 'March 20, 2024',
      description: 'Understanding the difference between SIP and lump sum investments and when to choose each strategy.'
    },
    {
      title: 'Tax Saving Strategies for 2024',
      thumbnail: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '12:30',
      views: '8.2K',
      date: 'March 15, 2024',
      description: 'Complete guide to saving taxes legally under various sections of the Income Tax Act.'
    },
    {
      title: 'How to Choose the Right Health Insurance',
      thumbnail: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '10:15',
      views: '15.7K',
      date: 'March 10, 2024',
      description: 'Key factors to consider when selecting health insurance for you and your family.'
    },
    {
      title: 'Retirement Planning in Your 30s',
      thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '14:20',
      views: '9.8K',
      date: 'March 5, 2024',
      description: 'Why starting retirement planning early can make you financially independent.'
    },
    {
      title: 'Home Loan Tips: Get Best Interest Rates',
      thumbnail: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '11:45',
      views: '18.3K',
      date: 'February 28, 2024',
      description: 'Expert tips to secure the lowest home loan interest rates and save lakhs.'
    },
    {
      title: 'Mutual Fund Basics for Beginners',
      thumbnail: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '16:30',
      views: '22.1K',
      date: 'February 20, 2024',
      description: 'Everything you need to know about mutual funds before making your first investment.'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Financial Education Videos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn about investments, tax planning, insurance, and more through our expert-led video content. 
              Make informed financial decisions with practical insights.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {video.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{video.views} views</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Subscribe for Weekly Financial Tips
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get notified when we upload new educational content to help you make better financial decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <a
              href="https://youtube.com/@awareness_initiative"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Subscribe on YouTube
            </a>
            <a
              href="https://www.instagram.com/the_awareness_initiative"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;