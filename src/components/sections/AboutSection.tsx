import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, Monitor, Globe, Code, Palette, Database, LayoutDashboard, LayoutGrid, LayoutList, TrendingUp, Rocket, Calculator } from 'lucide-react';

const AboutSection = () => {
  const knowledgeRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const industries = [
    { 
      name: 'App Development', 
      icon: '📱',
      techIcons: [Smartphone, Monitor]
    },
    { 
      name: 'Web Development', 
      icon: '🌐',
      techIcons: [Globe, Code, Palette, Database]
    },
    { 
      name: 'Product Development', 
      icon: '⚙️',
      techIcons: [LayoutDashboard, LayoutGrid]
    },
    { 
      name: 'Accounts and Finance', 
      icon: '💰',
      techIcons: [Calculator, LayoutList]
    },
    { 
      name: 'Digital Marketing', 
      icon: '📈',
      techIcons: [TrendingUp, Globe]
    },
    { 
      name: 'Business Development', 
      icon: '🚀',
      techIcons: [Rocket, LayoutGrid]
    },
  ];

  const values = [
    {
      title: 'Business Model Thinking',
      description: 'I approach every idea with a strategic lens, identifying value, structure, and sustainability to shape it into a workable business model.',
    },
    {
      title: 'Collaborative Execution',
      description: 'I believe success is built on teamwork, combining ideas, skills, and effort to turn plans into action with clarity and shared vision.',
    },
    {
      title: 'Financial Clarity & Discipline',
      description: 'Behind every bold move is a strong foundation. I ensure every plan is backed by clear, accurate, and purpose-driven financial thinking.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (knowledgeRef.current) {
      observer.observe(knowledgeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="min-h-screen py-20 px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 animate-fade-in">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Bio */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Designing Systems, Building Businesses
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I've had the opportunity to work across startups, student-led ventures, and business initiatives, 
                contributing to product development, business operations, marketing, finance, and strategy. These 
                experiences in diverse working environments have shaped my understanding of how ideas grow into real 
                businesses when aligned with structure and purpose.
              </p>
              <p>
                Though still early in my journey, I've developed a practical, strategic mindset by working with 
                different teams and navigating real-world challenges. I enjoy taking existing ideas or systems and 
                turning them into more refined, impactful experiences that better serve both users and business goals.
              </p>
              <p>
                My focus is to keep learning, building, and supporting others, especially those with ideas who need 
                help making them stronger, more actionable, and aligned with long-term success.
              </p>
            </div>
          </div>

          {/* Industry Knowledge */}
          <div ref={knowledgeRef} className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">I'm Aware Of</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Through my diverse career graph, I've gained valuable insights across multiple industries
            </p>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={industry.name}
                  className={`bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="text-2xl mb-2">{industry.icon}</div>
                  <h4 className="font-medium text-gray-900 text-sm leading-tight mb-3">
                    {industry.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.techIcons.map((IconComponent, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="bg-gray-50 p-1.5 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <IconComponent size={16} className="text-gray-600" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-gray-900 text-center">
            My Mission & Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
