
import React, { useState } from 'react';
import SectionHeading from '../UI/SectionHeading';
import { Mail, Phone, MapPin, Instagram, Facebook, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name) newErrors.name = 'Imię jest wymagane';
    if (!formData.email) {
      newErrors.email = 'Email jest wymagany';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Niepoprawny format adresu email';
    }
    if (!formData.subject) newErrors.subject = 'Temat jest wymagany';
    if (!formData.message) newErrors.message = 'Wiadomość jest wymagana';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user types
    if (errors[name as keyof typeof formData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast({
          title: "Wiadomość wysłana",
          description: "Dziękujemy za kontakt. Odezwiemy się wkrótce!",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 1500);
    }
  };

  return (
    <section id="kontakt" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Kontakt" 
          subtitle="Masz pytania? Skontaktuj się z nami lub wypełnij formularz kontaktowy" 
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6">Dane kontaktowe</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gold p-3 rounded-full text-white mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Adres</h4>
                  <p className="text-gray-600">
                    ul. Fotograficzna 42<br />
                    00-123 Warszawa
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold p-3 rounded-full text-white mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefon</h4>
                  <p className="text-gray-600">
                    <a href="tel:+48123456789" className="hover:text-gold">+48 123 456 789</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold p-3 rounded-full text-white mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:kontakt@capturemoment.pl" className="hover:text-gold">kontakt@capturemoment.pl</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold p-3 rounded-full text-white mr-4">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Instagram</h4>
                  <p className="text-gray-600">
                    <a href="https://instagram.com/capturemoment" target="_blank" rel="noopener noreferrer" className="hover:text-gold">@capturemoment</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold p-3 rounded-full text-white mr-4">
                  <Facebook size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Facebook</h4>
                  <p className="text-gray-600">
                    <a href="https://facebook.com/capturemoment" target="_blank" rel="noopener noreferrer" className="hover:text-gold">/capturemoment</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8 animate-on-scroll">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={60} className="mx-auto text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Dziękujemy!</h3>
                <p className="text-gray-600 mb-6">Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gold text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold mb-6">Napisz do nas</h3>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Imię i nazwisko</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.name ? 'border-red-500 focus:ring-red-200' : 'focus:ring-gold/50 border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Adres email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-red-500 focus:ring-red-200' : 'focus:ring-gold/50 border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Temat</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.subject ? 'border-red-500 focus:ring-red-200' : 'focus:ring-gold/50 border-gray-300'
                    }`}
                  >
                    <option value="">Wybierz temat</option>
                    <option value="sesja-slubna">Sesja ślubna</option>
                    <option value="sesja-portretowa">Sesja portretowa</option>
                    <option value="fotografia-produktowa">Fotografia produktowa</option>
                    <option value="inne">Inne</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Wiadomość</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.message ? 'border-red-500 focus:ring-red-200' : 'focus:ring-gold/50 border-gray-300'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gold text-white font-medium py-3 px-6 rounded-md transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'
                  }`}
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16 rounded-lg overflow-hidden h-96 shadow-lg">
          <iframe
            title="Studio location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7378344643664!2d20.995804776895313!3d52.22986597189227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccec5b779143%3A0x5a75f0986fe3eaa!2sWarsaw%20Spire!5e0!3m2!1sen!2spl!4v1718112889778!5m2!1sen!2spl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
