
import React, { useState, useEffect } from 'react';
import SectionHeading from '../UI/SectionHeading';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Aleksandra i Michał',
      image: 'https://images.unsplash.com/photo-1623042881284-a43314c4ab1c?q=80&w=1374&auto=format&fit=crop',
      rating: 5,
      text: 'Zdjęcia z naszego ślubu przerosły nasze oczekiwania! Fotograf doskonale uchwycił atmosferę tego dnia i najważniejsze momenty. Każde spojrzenie, każdy uśmiech i każda łza zostały zatrzymane w kadrze. Polecamy z całego serca!'
    },
    {
      id: 2,
      name: 'Tomasz Kubiak',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop',
      rating: 5,
      text: 'Sesja biznesowa w wykonaniu studia Capture Moment to strzał w dziesiątkę. Profesjonalne podejście, świetna atmosfera podczas sesji i co najważniejsze - wyjątkowe zdjęcia, które wykorzystuję w swoich materiałach biznesowych.'
    },
    {
      id: 3,
      name: 'Magdalena Witkowska',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop',
      rating: 5,
      text: 'Przepiękna sesja rodzinna! Marta ma niesamowite podejście do dzieci, potrafi wydobyć z nich naturalne uśmiechy i spontaniczne reakcje. Zdjęcia zdobią nasze ściany i za każdym razem gdy na nie patrzę, na mojej twarzy pojawia się uśmiech.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="opinie" className="section bg-dark text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
          style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"5\" cy=\"5\" r=\"1\" fill=\"white\"/></svg>')" }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Opinie klientów" 
          subtitle="Poznaj doświadczenia osób, które skorzystały z naszych usług" 
          light 
        />
        
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Testimonial slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-20 h-20 object-cover rounded-full mb-4 md:mb-0 md:mr-6"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <div className="flex text-gold mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="#d4af37" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-lg italic">{testimonial.text}</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  i === currentSlide ? 'bg-gold' : 'bg-white bg-opacity-30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
