
import React, { useState, useEffect } from 'react';
import SectionHeading from '../UI/SectionHeading';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const categories = [
    { id: 'all', name: 'Wszystkie' },
    { id: 'weddings', name: 'Śluby' },
    { id: 'portraits', name: 'Portrety' },
    { id: 'products', name: 'Produkty' }
  ];
  
  const portfolioItems = [
    {
      id: 1,
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop',
      title: 'Ślub Anny i Marka'
    },
    {
      id: 2,
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1470&auto=format&fit=crop',
      title: 'Ceremonia w plenerze'
    },
    {
      id: 3,
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1374&auto=format&fit=crop',
      title: 'Portret biznesowy'
    },
    {
      id: 4,
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop',
      title: 'Sesja plenerowa'
    },
    {
      id: 5,
      category: 'products',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop',
      title: 'Zegarek premium'
    },
    {
      id: 6,
      category: 'products',
      image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop',
      title: 'Kosmetyki naturalne'
    },
    {
      id: 7,
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop',
      title: 'Pierwszy taniec'
    },
    {
      id: 8,
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop',
      title: 'Portret artystyczny'
    },
    {
      id: 9,
      category: 'products',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1515&auto=format&fit=crop',
      title: 'Biżuteria'
    }
  ];
  
  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setLightboxOpen(true);
  };

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

  return (
    <section id="portfolio" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Portfolio" 
          subtitle="Odkryj nasze najlepsze prace fotograficzne w różnych kategoriach" 
        />
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 mx-2 mb-3 rounded-full transition-all ${
                selectedCategory === category.id 
                  ? 'bg-gold text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-md h-80 animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => openLightbox(item.image)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all flex items-end">
                <div className="p-6 w-full text-white opacity-0 hover:opacity-100 transition-opacity">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm">{categories.find(cat => cat.id === item.category)?.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl bg-transparent border-none shadow-none">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Lightbox image" 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
