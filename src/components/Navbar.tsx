
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    'Home',
    'About',
    'Gallery',
    'Fittings & Finishes',
    'Floor Plans',
    'Location',
    'Contact'
  ];

  // Helper function to create proper anchor links
  const getAnchorLink = (item: string) => {
    if (item === 'Fittings & Finishes') {
      return '#fittings-finishes';
    }
    return `#${item.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300',
        isScrolled ? 'py-4 bg-noir/90 backdrop-blur-lg shadow-sm' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-medium text-white tracking-tighter hover:opacity-75 transition-opacity">
          Solis Rosebud
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={getAnchorLink(item)}
              className="text-sm font-medium text-white hover:text-noir-gold transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-medium text-noir-dark bg-noir-gold hover:bg-noir-gold2 transition-colors duration-200 rounded-sm"
          >
            Enquire
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col space-y-1.5">
            <span className={`block w-6 h-px bg-white transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-6 h-px bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-px bg-white transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 bg-noir-dark z-40 transition-transform duration-500 ease-in-out',
          isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col space-y-8 items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={getAnchorLink(item)}
                className="text-xl font-light text-white hover:text-noir-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 px-6 py-3 text-base font-medium text-noir-dark bg-noir-gold hover:bg-noir-gold2 transition-colors rounded-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Enquire
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
