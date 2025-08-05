import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Anchor, MapPin, Camera, Clock } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Añadir animación al contenedor principal
          entry.target.classList.add('animate-fade-in');
          // Quitar opacidad de los hijos relevantes
          const children = entry.target.querySelectorAll('.opacity-0');
          children.forEach((child) => {
            child.classList.remove('opacity-0');
            child.classList.add('animate-fade-in');
          });
        }
      });
    }, observerOptions);

    if (introRef.current) observer.observe(introRef.current);

    return () => observer.disconnect();
  }, []);

  const navigationCards = [
    {
      title: 'Historia',
      description: 'Descubre los eventos que forjaron nuestra identidad',
      icon: Clock,
      path: '/historia',
      image: '../public/ataque.jpg'
    },
    {
      title: 'Cultura',
      description: 'Tradiciones vivas que perduran en el tiempo',
      icon: Anchor,
      path: '/cultura',
      image: '../public/cultura.jpg'
    },
    {
      title: 'Galería',
      description: 'Imágenes que capturan la esencia de Bocachica',
      icon: Camera,
      path: '/galeria',
      image: '../public/imagenes.jpg'
    },
    {
      title: 'Mapa',
      description: 'Explora los lugares más emblemáticos',
      icon: MapPin,
      path: '/mapa',
      image: '../public/mapa.png'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-gray-900 filter grayscale"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("../public/bocachica.jpg")`,
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up">
            Bocachica
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 animate-fade-in-up animation-delay-200">
            Corazón de la Bahía
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Donde la historia cobra vida y las tradiciones perduran,
            entre aguas cristalinas y fortalezas centenarias
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => navigate('/historia')}
            className="border-white text-white hover:bg-white hover:text-black animate-fade-in-up animation-delay-600"
          >
            Explora Bocachica
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={introRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 transition-all duration-1000" id="intro-content">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-black mb-6">
              Un Tesoro en el Caribe
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Bocachica no es solo un lugar, es un testimonio viviente de la historia colombiana. 
              Desde sus fortalezas coloniales hasta sus tradiciones pesqueras, cada rincón 
              cuenta una historia de resistencia, cultura y belleza natural que ha perdurado 
              a través de los siglos.
            </p>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="text-center opacity-0 transition-all duration-1000 delay-200">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Anchor size={40} className="text-black" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Historia Marítima</h4>
              <p className="text-gray-600">
                Fortalezas y defensas que protegieron el Caribe colonial
              </p>
            </div>
            <div className="text-center opacity-0 transition-all duration-1000 animation-delay-400">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Clock size={40} className="text-black" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Tradiciones Vivas</h4>
              <p className="text-gray-600">
                Cultura que se mantiene viva en cada generación
              </p>
            </div>
            <div className="text-center opacity-0 transition-all duration-1000 animation-delay-600">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <MapPin size={40} className="text-black" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Belleza Natural</h4>
              <p className="text-gray-600">
                Paisajes únicos donde el mar y la historia se encuentran
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-black mb-6">
              Descubre Bocachica
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explora cada aspecto de nuestra rica herencia cultural e histórica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {navigationCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card 
                  key={card.path}
                  onClick={() => navigate(card.path)}
                  className="group h-80 relative overflow-hidden"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('${card.image}')`,
                    }}
                  />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                    <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                      <IconComponent size={32} />
                    </div>
                    <h4 className="text-xl font-serif font-bold mb-2">{card.title}</h4>
                    <p className="text-sm opacity-90 leading-relaxed">{card.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Vive la Experiencia Completa
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Planifica tu visita y sumérgete en la historia, cultura y belleza 
            natural de uno de los lugares más emblemáticos del Caribe colombiano.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => navigate('/historia')}
            className="border-white text-white hover:bg-white hover:text-black"
          >
            Explora Bocachica
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;