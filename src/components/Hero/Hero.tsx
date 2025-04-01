
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566275529824-cca6d008f3da?q=80&w=2074&auto=format&fit=crop')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: `translateY(${offset * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
          Uchwyć najpiękniejsze chwile z nami
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Profesjonalna fotografia ślubna, portretowa i produktowa
        </p>
        <button 
          onClick={scrollToPortfolio}
          className="bg-gold text-white font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-all"
        >
          Zobacz portfolio
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
