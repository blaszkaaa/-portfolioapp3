
import React, { useEffect } from 'react';
import Navbar from '../components/Navigation/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Capture Moment Studio | Profesjonalne Sesje Fotograficzne';
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInViewport = (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
          rect.bottom >= 0
        );
        
        if (isInViewport) {
          el.classList.add('animated');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
