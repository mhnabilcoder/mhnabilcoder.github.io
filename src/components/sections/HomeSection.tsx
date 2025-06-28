
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-20 animate-fade-in"
    >
      {/* Left Content */}
      <div className="max-w-3xl lg:flex-1 lg:pr-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="block">Hi, I'm</span>
          <span className="block text-primary typing-animation">
            Mahedi Hasan Nabil
          </span>
        </h1>
        
        <div className={`transition-opacity duration-500 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            <span className="text-primary font-medium">COO & Co-Founder of Edcluster</span> — Let's Build the Next Big Thing Together.
            I'm passionate about creating tech-powered solutions that drive educational equity and meaningful impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium"
            >
              Book a Consultancy
            </Button>
            <Button
              onClick={() => onNavigate('blog')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-medium"
            >
              Read My Blog
            </Button>
          </div>
          
          <div className="flex items-center text-gray-500 lg:hidden">
            <ArrowDown className="w-5 h-5 mr-2 animate-bounce" />
            <span>Scroll down to explore my work</span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-12 lg:mt-0 lg:flex-shrink-0">
        <div className="relative">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-3xl transform rotate-3 scale-105"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-3xl transform -rotate-2 scale-105"></div>
          
          {/* Main image container */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="/lovable-uploads/fd503ace-8d55-41b8-a26b-70642913fab3.png"
              alt="Mahedi Hasan Nabil - Professional"
              className="w-72 md:w-80 lg:w-96 h-auto object-cover"
            />
            
            {/* Subtle overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
          </div>
          
          {/* Additional decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Scroll indicator for desktop */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 items-center text-gray-500">
        <ArrowDown className="w-5 h-5 mr-2 animate-bounce" />
        <span>Scroll down to explore my work</span>
      </div>
      
      {/* Background decoration - adjusted for mobile */}
      <div className="absolute top-20 right-4 lg:right-20 w-48 lg:w-72 h-48 lg:h-72 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-4 lg:left-20 w-64 lg:w-96 h-64 lg:h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HomeSection;
