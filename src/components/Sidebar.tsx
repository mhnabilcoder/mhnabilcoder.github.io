
import React from 'react';
import { Home, User, Briefcase, BookOpen, Facebook, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'blog', label: 'Blog', icon: BookOpen },
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/mahedi.hasan.nabil', icon: Facebook },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mahedi-hasan-nabil/', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/mhnabilcoder', icon: Github },
    { name: 'Email', url: 'mailto:nabilhasan2526@gmail.com', icon: Mail },
  ];

  return (
    <aside className="h-screen w-80 bg-white border-r border-gray-200 flex flex-col touch-manipulation">
      {/* Profile Section */}
      <div className="p-6 lg:p-8 text-center border-b border-gray-100 flex-shrink-0">
        <div className="relative inline-block mb-4 lg:mb-6">
          <img
            src="/lovable-uploads/9c40ae80-510c-440d-83d4-41949aec04fc.png"
            alt="Mahedi Hasan Nabil"
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover mx-auto shadow-lg"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        
        <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1">Mahedi Hasan Nabil</h2>
        <p className="text-xs lg:text-sm text-gray-600 mb-3 lg:mb-4">COO & Co-Founder of Edcluster</p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-2 lg:space-x-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 touch-manipulation"
                title={social.name}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 lg:p-6 flex-shrink-0 overflow-y-auto">
        <ul className="space-y-1 lg:space-y-2 w-full">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center px-3 py-3 lg:px-4 lg:py-3 text-left rounded-lg transition-colors duration-200 touch-manipulation text-sm lg:text-base ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 lg:p-6 border-t border-gray-100 flex-shrink-0">
        <p className="text-xs text-gray-500 text-center">
          © 2024 Mahedi Hasan Nabil
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
