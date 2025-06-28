
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PortfolioSection = () => {
  const organizations = [
    {
      id: 1,
      name: 'Edcluster',
      role: 'Co-Founder & COO',
      description: 'Spearheading business operations and development initiatives, overseeing strategic growth and operational execution.',
      logo: '/lovable-uploads/0c52f265-0b35-4216-accb-1222091b6c66.png',
      type: 'Leadership',
      duration: '2025 - Present',
      color: 'bg-white border-gray-200'
    },
    {
      id: 2,
      name: 'MR-Accountants',
      role: 'Jr. Business Development Executive',
      description: 'Supporting client acquisition, conducting market research, and assisting in the development of business proposals to drive growth.',
      logo: '/lovable-uploads/34482f7c-aea5-43f9-b91b-52c6513b0ddc.png',
      type: 'Business',
      duration: '2025 - Present',
      color: 'bg-white border-gray-200'
    },
    {
      id: 3,
      name: 'TedxDhanmondi',
      role: 'Finance Head',
      description: 'Leading the finance team, building financial workflows, and managing budgets and reports to ensure smooth event execution.',
      logo: '/lovable-uploads/58673826-8e89-42b2-94bb-a9104dfb7e7f.png',
      type: 'Finance',
      duration: '2025 - Present',
      color: 'bg-white border-gray-200'
    },
    {
      id: 4,
      name: 'BelaBazar',
      role: 'Co-Founder & COO',
      description: 'First entrepreneurial venture; gained foundational insights into product development, despite early-stage failure.',
      logo: '/lovable-uploads/43c6899a-1498-450c-b3f0-952b9d44be1d.png',
      type: 'Leadership',
      duration: '2020 - 2020',
      color: 'bg-white border-gray-200'
    },
    {
      id: 5,
      name: 'Pulse Tech Ltd.',
      role: 'Jr. User Interface Development Intern',
      description: 'Worked with the Flutter framework to support frontend app development, contributing to interface design and user experience.',
      logo: '/lovable-uploads/38a3f899-49b9-4c35-9880-f6349b57c52f.png',
      type: 'Development',
      duration: '2022 - 2022',
      color: 'bg-white border-gray-200'
    },
    {
      id: 6,
      name: 'Light Cluster',
      role: 'Fellow Director',
      description: 'Initiated a community-driven learning platform; organized educational events, competitions, and seminars to promote collaborative growth.',
      logo: '/lovable-uploads/e06b3134-83c5-4c62-83e7-956661878c70.png',
      type: 'Community',
      duration: '2019 - 2020',
      color: 'bg-white border-gray-200'
    },
    {
      id: 7,
      name: 'Interactive Cares',
      role: 'Brand Representative',
      description: 'Promoted brand presence across platforms, represented the organization in outreach and awareness initiatives.',
      logo: '/lovable-uploads/5f458c60-4047-4e1d-ad36-57f7d9d9f413.png',
      type: 'Marketing',
      duration: '2024 - 2024',
      color: 'bg-white border-gray-200'
    },
    {
      id: 8,
      name: 'BNMPC Business Club',
      role: 'Class Representative',
      description: 'Acted as a liaison between students and faculty, supporting academic and club coordination activities.',
      logo: '/lovable-uploads/ed8eaf10-ce0e-432d-893c-cfe44db0a9e5.png',
      type: 'Academic',
      duration: '2022 - 2023',
      color: 'bg-white border-gray-200'
    },
    {
      id: 9,
      name: 'YSSE',
      role: 'Operations Management Intern',
      description: 'Assisted in streamlining internal processes, supporting event logistics, and coordinating cross-functional operations.',
      logo: '/lovable-uploads/e844c0d8-86bc-488b-8715-9da25a757b73.png',
      type: 'Operations',
      duration: '2024 - 2024',
      color: 'bg-white border-gray-200'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leadership': return 'bg-blue-100 text-blue-800';
      case 'Business': return 'bg-green-100 text-green-800';
      case 'Finance': return 'bg-purple-100 text-purple-800';
      case 'Development': return 'bg-orange-100 text-orange-800';
      case 'Community': return 'bg-red-100 text-red-800';
      case 'Marketing': return 'bg-indigo-100 text-indigo-800';
      case 'Academic': return 'bg-yellow-100 text-yellow-800';
      case 'Operations': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDetailedExperienceClick = () => {
    window.open('https://www.linkedin.com/in/mahedi-hasan-nabil/', '_blank');
  };

  return (
    <section id="portfolio" className="min-h-screen py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Brands & Organizations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey through various organizations where I've contributed my skills, 
            learned valuable lessons, and made meaningful impact across different roles and industries.
          </p>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {organizations.map((org, index) => (
            <Card
              key={org.id}
              className={`${org.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Logo */}
                <div className="w-20 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg shadow-sm overflow-hidden">
                  <img
                    src={org.logo}
                    alt={`${org.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                {/* Organization Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{org.name}</h3>
                
                {/* Role */}
                <h4 className="text-sm font-medium text-gray-700 mb-3">{org.role}</h4>
                
                {/* Type Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getTypeColor(org.type)}`}>
                  {org.type}
                </span>
                
                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{org.description}</p>
                
                {/* Duration */}
                <p className="text-xs text-gray-500 font-medium">{org.duration}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 animate-fade-in">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-2">9+</div>
            <div className="text-sm text-gray-600">Organizations</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-2">9+</div>
            <div className="text-sm text-gray-600">Different Roles</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <p className="text-gray-600 mb-6">Interested in collaborating or learning more about my experience?</p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={handleDetailedExperienceClick}
          >
            View Detailed Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
