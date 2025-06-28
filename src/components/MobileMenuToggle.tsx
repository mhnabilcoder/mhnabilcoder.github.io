
import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuToggle = ({ isOpen, onToggle }: MobileMenuToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 left-6 z-50 lg:hidden bg-white rounded-full p-3 shadow-lg border border-gray-200 touch-manipulation"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      style={{ 
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation'
      }}
    >
      {isOpen ? (
        <X className="w-6 h-6 text-gray-900" />
      ) : (
        <Menu className="w-6 h-6 text-gray-900" />
      )}
    </button>
  );
};

export default MobileMenuToggle;
