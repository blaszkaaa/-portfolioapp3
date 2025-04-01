
import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Capture Moment</h3>
            <p className="text-gray-300 mb-4">
              Specjalizujemy się w uwiecznianiu wyjątkowych momentów poprzez profesjonalną fotografię. Nasza pasja to tworzenie wspomnień, które pozostaną na zawsze.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:kontakt@capturemoment.pl" className="text-white hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+48123456789" className="text-white hover:text-gold transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              <li>
                <a onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-gold transition-colors cursor-pointer">Strona główna</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('o nas')} className="text-gray-300 hover:text-gold transition-colors cursor-pointer">O nas</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-gold transition-colors cursor-pointer">Portfolio</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('usługi')} className="text-gray-300 hover:text-gold transition-colors cursor-pointer">Usługi</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('opinie')} className="text-gray-300 hover:text-gold transition-colors cursor-pointer">Opinie</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('kontakt')} className="text-gray-300 hover:text-gold transition-colors cursor-pointer">Kontakt</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-300 mb-2">ul. Fotograficzna 42</p>
            <p className="text-gray-300 mb-4">00-123 Warszawa</p>
            <p className="text-gray-300 mb-2">
              <a href="mailto:kontakt@capturemoment.pl" className="hover:text-gold transition-colors">kontakt@capturemoment.pl</a>
            </p>
            <p className="text-gray-300">
              <a href="tel:+48123456789" className="hover:text-gold transition-colors">+48 123 456 789</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Capture Moment. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-gold transition-colors">Polityka prywatności</a>
              <a href="#" className="hover:text-gold transition-colors">Regulamin</a>
              <a href="#" className="hover:text-gold transition-colors">Mapa strony</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
