
import React, { useEffect, useRef } from 'react';
import SectionHeading from '../UI/SectionHeading';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const teamMembers = [
    {
      name: 'Anna Kowalska',
      role: 'Fotograf ślubny',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      description: 'Specjalizuje się w uchwyceniu spontanicznych, pełnych emocji momentów podczas ceremonii ślubnych i wesel.',
    },
    {
      name: 'Piotr Nowak',
      role: 'Fotograf portretowy',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      description: 'Mistrz portretów, potrafi wydobyć naturalną esencję każdej osoby, tworząc ponadczasowe ujęcia.',
    },
    {
      name: 'Marta Wiśniewska',
      role: 'Fotograf produktowy',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      description: 'Ekspertka od fotografii produktowej, tworzy perfekcyjne ujęcia, które przyciągają wzrok i sprzedają produkt.',
    },
  ];

  return (
    <section id="o nas" className="section bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="O nas" 
          subtitle="Poznaj studio Capture Moment i nasz zespół profesjonalnych fotografów" 
        />

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-4">Nasza pasja</h3>
            <p className="text-gray-700 mb-4">
              Studio Capture Moment powstało z miłości do fotografii i pragnienia uwieczniania wyjątkowych chwil. Od ponad 10 lat tworzymy profesjonalne zdjęcia, które opowiadają historie, budzą emocje i pozostają z Wami na zawsze.
            </p>
            <p className="text-gray-700 mb-4">
              Nasza filozofia to połączenie artystycznego podejścia z techniczną perfekcją. Wierzymy, że każdy moment zasługuje na to, by być uchwyconym w sposób wyjątkowy i niepowtarzalny.
            </p>
            <p className="text-gray-700">
              Doświadczenie zdobyte podczas setek sesji zdjęciowych, ślubów i projektów komercyjnych pozwala nam spełniać nawet najbardziej wymagające oczekiwania naszych klientów.
            </p>
          </div>
          <div className="relative animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1470&auto=format&fit=crop" 
              alt="Studio fotograficzne" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold rounded-lg"></div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-8 text-center">Nasz zespół</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="team-member-info">
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gold mb-2">{member.role}</p>
                <p className="text-center text-sm">{member.description}</p>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
