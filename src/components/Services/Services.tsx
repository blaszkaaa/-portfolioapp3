
import React, { useEffect } from 'react';
import SectionHeading from '../UI/SectionHeading';
import { Camera, UserCheck, ShoppingBag, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 1,
      icon: <Camera size={36} />,
      title: 'Sesje ślubne',
      description: 'Profesjonalna dokumentacja najważniejszego dnia w Waszym życiu. Uchwycenie spontanicznych i wzruszających momentów ceremonii oraz wesela.',
      details: [
        'Przygotowania do ślubu',
        'Ceremonia ślubna',
        'Sesja plenerowa',
        'Przyjęcie weselne',
        'Album w eleganckim wydaniu'
      ],
      price: 'od 3000 PLN'
    },
    {
      id: 2,
      icon: <UserCheck size={36} />,
      title: 'Sesje portretowe',
      description: 'Profesjonalne portrety biznesowe, rodzinne lub artystyczne. Doskonałe zdjęcia, które oddają charakter i osobowość.',
      details: [
        'Portrety biznesowe',
        'Portrety rodzinne',
        'Sesje lifestyle',
        'Portfolio modelek/modeli',
        'Retusz i obróbka zdjęć'
      ],
      price: 'od 800 PLN'
    },
    {
      id: 3,
      icon: <ShoppingBag size={36} />,
      title: 'Fotografia produktowa',
      description: 'Atrakcyjne zdjęcia produktów dla sklepów internetowych, katalogów i materiałów marketingowych. Podkreślenie zalet oferowanych produktów.',
      details: [
        'Packshoty produktów',
        'Zdjęcia aranżowane',
        'Fotografia kulinarna',
        'Sesje biżuterii',
        'Zdjęcia dla e-commerce'
      ],
      price: 'od 1500 PLN'
    }
  ];

  return (
    <section id="usługi" className="section bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Nasze usługi" 
          subtitle="Oferujemy profesjonalne usługi fotograficzne dopasowane do Twoich potrzeb" 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="service-card bg-white border border-gray-100 animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-6">
                <div className="text-gold mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="font-semibold text-dark">{service.price}</p>
              </div>

              <div className="service-overlay">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="mb-6 text-left w-full">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start mb-2">
                      <ChevronRight size={18} className="text-gold mt-1 mr-2" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={scrollToContact}
                  className="mt-auto bg-gold text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Skontaktuj się
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">Potrzebujesz indywidualnej oferty? Skontaktuj się z nami!</p>
          <button 
            onClick={scrollToContact}
            className="bg-gold text-white font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-all"
          >
            Zapytaj o ofertę
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
