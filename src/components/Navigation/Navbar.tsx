
import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer"
        >
          <h1 className={`text-xl md:text-2xl font-bold font-serif ${isSticky ? 'text-dark' : 'text-white'}`}>
            Capture Moment
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {['O nas', 'Portfolio', 'Usługi', 'Opinie', 'Kontakt'].map((item) => (
              <li key={item}>
                <a
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`cursor-pointer font-medium hover:text-gold transition-colors ${
                    isSticky ? 'text-dark' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`hover:text-gold transition-colors ${isSticky ? 'text-dark' : 'text-white'}`}>
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`hover:text-gold transition-colors ${isSticky ? 'text-dark' : 'text-white'}`}>
              <Facebook size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden ${isSticky ? 'text-dark' : 'text-white'}`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 animate-slide-in">
          <ul className="flex flex-col space-y-3 px-4">
            {['O nas', 'Portfolio', 'Usługi', 'Opinie', 'Kontakt'].map((item) => (
              <li key={item}>
                <a
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block py-2 text-dark font-medium hover:text-gold transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="flex items-center space-x-4 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
