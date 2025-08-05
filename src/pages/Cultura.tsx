import React, { useState, useEffect, useRef } from 'react';
import { Music, Users, ChefHat, Calendar, Play, Volume2 } from 'lucide-react';
import Card from '../components/UI/Card';
import Modal from '../components/UI/Modal';

interface CulturalCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  image: string;
  content: {
    text: string;
    highlights: string[];
    mediaUrl?: string;
    mediaType?: 'audio' | 'video';
  };
}

interface Testimony {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const Cultura: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CulturalCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const testimonyInterval = useRef<NodeJS.Timeout | null>(null);

  const culturalCategories: CulturalCategory[] = [
    {
      id: 'musica',
      title: 'Música Tradicional',
      description: 'Ritmos caribeños que narran nuestra historia',
      icon: Music,
      image: '../public/cumbia.jpg',
      content: {
        text: 'La música de Bocachica es el alma sonora de nuestro pueblo. Heredada de las culturas africana, indígena y española, nuestros ritmos tradicionales como la cumbia, la champeta y el bullerengue resuenan en cada celebración. Los tambores ancestrales marcan el compás de la vida cotidiana, mientras las gaitas y maracas acompañan las historias que se transmiten de generación en generación.',
        highlights: [
          'Cumbia',
          'Bullerengue',
          'Tambores',
          'champeta'
        ],
       media: [
      {
        url: '/mapale.m4a',
        type: 'audio' as const
      },
      {
        url: '/videom.mp4',
        type: 'video' as const
      }
    ]
      }
    },
    {
      id: 'bailes',
      title: 'Danzas Folclóricas',
      description: 'Movimientos que celebran la vida y la tradición',
      icon: Users,
      image: '../public/baile.jpg',
      content: {
        text: 'Nuestras danzas son expresiones corporales de alegría y resistencia cultural. El mapale, con sus movimientos ondulantes que imitan las olas del mar, y la cumbia, con su elegante cortejo de polleras coloridas, son protagonistas de nuestras festividades. Cada paso cuenta una historia, cada giro celebra la vida y cada compás une a la comunidad en un abrazo colectivo de tradición.',
        highlights: [
          'Mapale: danza de origen africano que imita el movimiento del mar',
          'Cumbia: cortejo elegante con polleras tradicionales',
          'Son de negro: celebración de la herencia africana',
          'Danzas ceremoniales para eventos religiosos'
        ],
         media: [
      {
        url: '/videod.mp4',
        type: 'video' as const
      },
      {
        url: '/videod2.mp4',
        type: 'video' as const
      }
    ]
      }
    },
    {
      id: 'gastronomia',
      title: 'Gastronomía',
      description: 'Sabores del mar y tradiciones culinarias',
      icon: ChefHat,
      image: '/pescado.jpg',
      content: {
        text: 'La cocina de Bocachica es un festín de sabores marinos fusionados con técnicas ancestrales. El pescado fresco, los mariscos y el coco son protagonistas de platos como el sancocho de pescado y el arroz con coco. Cada receta guarda secretos transmitidos por las abuelas, quienes conocen el punto exacto de cocción y la mezcla perfecta de especias que dan vida a nuestra identidad gastronómica.',
        highlights: [
          'Sancocho de pescado',
          'Arroz con coco',
          'Patacones y pescado',
          'Cocadas y dulces de coco artesanales'
        ],
        media: [
          {
            url: '/pescado.jpg',
            type: 'image' as const
          },
          {
            url: '/sancocho.jpg',
            type: 'image' as const
          },
          {
            url: '/arroz.jpg',
            type: 'image' as const
          },
          {
            url: '/cocadas.avif',
            type: 'image' as const
          }
        ]
      }
    },
    {
      id: 'festividades',
      title: 'Festividades',
      description: 'Celebraciones que unen a la comunidad',
      icon: Calendar,
      image: '/ffe.jpg',
      content: {
        text: 'Nuestro calendario festivo marca el ritmo de la vida comunitaria. Las Fiestas de la Virgen del Carmen en julio, transforman la isla en un escenario de devoción y alegría. Las celebraciones del 29 de junio, y las fiestas decembrinas, crean momentos de unión familiar y comunitaria que fortalecen nuestros lazos culturales.',
        highlights: [
          'Fiestas de la Virgen del Carmen (16 de julio)',
          'tradiciones de semana santa',
          'Festival del frito (febrero)',
          'Celebraciones decembrinas',
          'Fiestas de San Juan y San Pedro (29 de junio)',
          'Fiestas de independencia (noviembre)'
        ],
        media: [
          {
            url: '/16.mp4',
            type: 'video' as const
          },
          {
            url: '/nov.mp4',
            type: 'video' as const
          },
          {
            url: '/ff.mp4',
            type: 'video' as const
          },
          {
            url: '/29.mp4',
            type: 'video' as const
          }
        ]
      }
    }
  ];

  

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.observe-animation');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  

  const openModal = (category: CulturalCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-black mb-6 observe-animation opacity-0">
            Cultura Viva
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed observe-animation opacity-0">
            Tradiciones ancestrales que perduran en el tiempo, 
            fusionando influencias africanas, indígenas y españolas en una identidad única
          </p>
        </div>
      </section>

      {/* Cultural Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={category.id}
                  onClick={() => openModal(category)}
                  className={`h-80 relative overflow-hidden group observe-animation opacity-0`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('${category.image}')`,
                    }}
                  />
                  <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={40} className="opacity-90" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3">{category.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed mb-4">{category.description}</p>
                    <div className="flex items-center text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                      <span>Explorar</span>
                      <Play size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-6 observe-animation opacity-0">
              Agradecimientos
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto observe-animation opacity-0">
Mucho del contenido audiovisual son de la autoria del señor belmir caraballo, gestor cultural de Bocachica,
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
          </div>

          {/* Testimony Navigation */}
         
        </div>
      </section>

      {/* Cultural Heritage Quote */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed">
            "Nuestra cultura no es museo, es vida que late en cada compás, 
            en cada sabor, en cada celebración que une a nuestro pueblo."
          </blockquote>
          <cite className="text-lg opacity-80">
            — Casa de la Cultura de Bocachica
          </cite>
        </div>
      </section>

      {/* Cultural Category Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedCategory?.title}>
        {selectedCategory && (
          <div className="space-y-6">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src={selectedCategory.image} 
                alt={selectedCategory.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {selectedCategory.content.text}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-serif font-semibold mb-4">Características Destacadas</h4>
              <ul className="space-y-2">
                {selectedCategory.content.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

             {/* Renderizado de media items */}
            {selectedCategory.content.media.map((mediaItem, idx) => {
              switch (mediaItem.type) {
                case 'audio':
                  return (
                    <div className="bg-gray-50 rounded-lg p-6" key={idx}>
                      <div className="flex items-center space-x-4 mb-4">
                        <Volume2 size={24} className="text-gray-600" />
                        <span className="font-semibold">{mediaItem.caption || 'Audio'}</span>
                      </div>
                      <audio controls className="w-full">
                        <source src={mediaItem.url} type="audio/mp4" />
                        Tu navegador no soporta audio.
                      </audio>
                    </div>
                  );
                case 'video':
                  return (
                    <div className="aspect-video rounded-lg overflow-hidden" key={idx}>
                      <video controls className="w-full h-full">
                        <source src={mediaItem.url} type="video/mp4" />
                        Tu navegador no soporta video.
                      </video>
                      {mediaItem.caption && <p className="text-center mt-2 text-sm">{mediaItem.caption}</p>}
                    </div>
                  );
                case 'image':
                  return (
                    <div className="rounded-lg overflow-hidden" key={idx}>
                      <img src={mediaItem.url} alt={mediaItem.caption || 'Image'} className="w-full h-auto object-cover" />
                      {mediaItem.caption && <p className="text-center mt-2 text-sm">{mediaItem.caption}</p>}
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Cultura;