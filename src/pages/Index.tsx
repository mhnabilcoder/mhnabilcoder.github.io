
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import MobileMenuToggle from '@/components/MobileMenuToggle';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import BlogSection from '@/components/sections/BlogSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as HTMLElement;
        const sidebar = document.getElementById('mobile-sidebar');
        const toggleButton = document.getElementById('mobile-menu-toggle');
        
        if (sidebar && toggleButton && 
            !sidebar.contains(target) && 
            !toggleButton.contains(target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'blog'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
      return () => mainContent.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-hidden relative">
      {/* Mobile Menu Toggle */}
      <div id="mobile-menu-toggle">
        <MobileMenuToggle 
          isOpen={isMobileMenuOpen} 
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        />
      </div>
      
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeMobileMenu}
          onTouchEnd={closeMobileMenu}
        />
      )}
      
      {/* Sidebar */}
      <div 
        id="mobile-sidebar"
        className={`${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out fixed lg:static z-40 lg:flex-shrink-0`}
      >
        <Sidebar 
          activeSection={activeSection} 
          onNavigate={handleNavigate}
        />
      </div>
      
      {/* Main Content */}
      <main 
        id="main-content"
        className="flex-1 h-screen overflow-y-auto"
      >
        <HomeSection onNavigate={handleNavigate} />
        <AboutSection />
        <PortfolioSection />
        <BlogSection />
      </main>
    </div>
  );
};

export default Index;
