
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarIcon, User } from 'lucide-react';

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Design', 'Personal', 'Career', 'Philosophy'];

  const blogPosts = [
    {
      id: 1,
      title: 'Skill > CGPA: Why Your GPA Doesn\'t Define Your Worth',
      excerpt: 'A deep dive into why practical skills matter more than academic grades in the real world, especially in design and tech.',
      category: 'Career',
      readTime: '8 min read',
      date: '2024-03-15',
      author: 'Mahedi Hasan Nabil',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Why I Quit App Development and Found My True Calling',
      excerpt: 'The story of my transition from being a developer to becoming a product designer and consultant.',
      category: 'Personal',
      readTime: '6 min read',
      date: '2024-03-08',
      author: 'Mahedi Hasan Nabil',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: 'Naruto & Healing: What Anime Taught Me About Growth',
      excerpt: 'An unexpected exploration of how Naruto\'s journey parallels personal and professional growth in design.',
      category: 'Philosophy',
      readTime: '10 min read',
      date: '2024-02-28',
      author: 'Mahedi Hasan Nabil',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      featured: true
    },
    {
      id: 4,
      title: 'The Future of Design Systems in 2024',
      excerpt: 'Exploring emerging trends and best practices in building scalable design systems for modern products.',
      category: 'Design',
      readTime: '12 min read',
      date: '2024-02-20',
      author: 'Mahedi Hasan Nabil',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'User Research: Beyond Just Surveys and Interviews',
      excerpt: 'Unconventional methods for understanding your users and their real needs in the digital age.',
      category: 'Design',
      readTime: '7 min read',
      date: '2024-02-10',
      author: 'Mahedi Hasan Nabil',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="min-h-screen py-20 px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts on design, career growth, and life lessons learned along the way. 
            I write about what matters to me and hopefully resonates with you too.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">Featured Posts</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-gray-900">
            {selectedCategory === 'All' ? 'All Posts' : `${selectedCategory} Posts`}
          </h3>
          <div className="space-y-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-32 md:h-24 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="md:w-3/4">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-primary/5 rounded-xl p-8 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Get notified when I publish new articles about design, career growth, and life insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
