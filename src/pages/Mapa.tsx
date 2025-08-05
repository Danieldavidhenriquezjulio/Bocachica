import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Phone, Globe, ChevronDown } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

interface PointOfInterest {
  id: string;
  name: string;
  description: string;
  coordinates: { lat: number; lng: number };
  category: 'historico' | 'cultural' | 'natural' | 'gastronomico';
  image: string;
  details: string;
  hours?: string;
  contact?: string;
}

const Mapa: React.FC = () => {
  const [selectedPOI, setSelectedPOI] = useState<PointOfInterest | null>(null);
  const [mapCenter] = useState({ lat: 10.3157, lng: -75.5448 }); // Bocachica coordinates
  const [origin, setOrigin] = useState('');
  const [showDirections, setShowDirections] = useState(false);

  const pointsOfInterest: PointOfInterest[] = [
    {
      id: '1',
      name: 'Fuerte San Luis de Bocachica',
      description: 'Fortaleza colonial del siglo XVII',
      coordinates: { lat: 10.3157, lng: -75.5448 },
      category: 'historico',
      image: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg',
      details: 'Construido entre 1697 y 1739, el Fuerte San Luis de Bocachica fue la principal defensa de la entrada sur de la bahía de Cartagena. Sus imponentes muros de piedra coralina y su posición estratégica lo convirtieron en una fortaleza prácticamente inexpugnable.',
      hours: '8:00 AM - 5:00 PM',
      contact: '+57 (5) 664-9624'
    },
    {
      id: '2',
      name: 'Batería de San José',
      description: 'Complemento defensivo del sistema fortificado',
      coordinates: { lat: 10.3167, lng: -75.5438 },
      category: 'historico',
      image: 'https://images.pexels.com/photos/161901/pexels-photo-161901.jpeg',
      details: 'Situada en la punta norte de la isla, la Batería de San José completaba el sistema defensivo de Bocachica. Sus cañones cruzaban fuego con los del Fuerte San Luis, creando una barrera impenetrable.',
      hours: '8:00 AM - 5:00 PM'
    },
    {
      id: '3',
      name: 'Plaza Central de Bocachica',
      description: 'Corazón de la vida comunitaria',
      coordinates: { lat: 10.3147, lng: -75.5458 },
      category: 'cultural',
      image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg',
      details: 'El centro neurálgico de la vida social y cultural de Bocachica. Aquí se realizan las principales festividades, mercados y celebraciones que mantienen viva la tradición de la comunidad.',
      hours: 'Acceso libre las 24 horas'
    },
    {
      id: '4',
      name: 'Muelle de Pescadores',
      description: 'Puerto tradicional de la comunidad pesquera',
      coordinates: { lat: 10.3137, lng: -75.5468 },
      category: 'cultural',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      details: 'El muelle donde llegan los pescadores con sus capturas diarias. Un lugar perfecto para observar las técnicas tradicionales de pesca y la vida cotidiana de la comunidad marinera.',
      hours: '5:00 AM - 7:00 PM'
    },
    {
      id: '5',
      name: 'Playa de Bocachica',
      description: 'Aguas cristalinas del Caribe',
      coordinates: { lat: 10.3127, lng: -75.5478 },
      category: 'natural',
      image: 'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg',
      details: 'Una hermosa playa de arena blanca con aguas cristalinas del mar Caribe. Ideal para relajarse, nadar y disfrutar de espectaculares atardeceres mientras se contempla la bahía de Cartagena.',
      hours: 'Acceso libre las 24 horas'
    },
    {
      id: '6',
      name: 'Restaurante La Bocana',
      description: 'Gastronomía marina tradicional',
      coordinates: { lat: 10.3177, lng: -75.5428 },
      category: 'gastronomico',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      details: 'Restaurante familiar que ofrece los mejores platos de mariscos y pescados frescos preparados con recetas tradicionales transmitidas de generación en generación.',
      hours: '11:00 AM - 8:00 PM',
      contact: '+57 (5) 664-9856'
    },
    {
      id: '7',
      name: 'Casa de la Cultura',
      description: 'Centro de preservación cultural',
      coordinates: { lat: 10.3117, lng: -75.5488 },
      category: 'cultural',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      details: 'Espacio dedicado a la preservación y promoción de las tradiciones culturales de Bocachica. Aquí se realizan talleres de música, danza y artesanías tradicionales.',
      hours: '9:00 AM - 6:00 PM',
      contact: '+57 (5) 664-9742'
    },
    {
      id: '8',
      name: 'Mirador Panorámico',
      description: 'Vista espectacular de la bahía',
      coordinates: { lat: 10.3187, lng: -75.5418 },
      category: 'natural',
      image: 'https://images.pexels.com/photos/1832323/pexels-photo-1832323.jpeg',
      details: 'El punto más alto de la isla ofrece una vista panorámica incomparable de la bahía de Cartagena, las fortalezas históricas y el mar Caribe. Especialmente hermoso durante el atardecer.',
      hours: 'Acceso libre las 24 horas'
    }
  ];

  const categories = [
    { id: 'historico', name: 'Histórico', color: 'bg-amber-500', count: pointsOfInterest.filter(p => p.category === 'historico').length },
    { id: 'cultural', name: 'Cultural', color: 'bg-blue-500', count: pointsOfInterest.filter(p => p.category === 'cultural').length },
    { id: 'natural', name: 'Natural', color: 'bg-green-500', count: pointsOfInterest.filter(p => p.category === 'natural').length },
    { id: 'gastronomico', name: 'Gastronómico', color: 'bg-red-500', count: pointsOfInterest.filter(p => p.category === 'gastronomico').length },
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

  const handleGetDirections = () => {
    if (origin && selectedPOI) {
      const googleMapsUrl = `https://www.google.com/maps/dir/${encodeURIComponent(origin)}/Bocachica,+Cartagena,+Colombia/@${selectedPOI.coordinates.lat},${selectedPOI.coordinates.lng},15z`;
      window.open(googleMapsUrl, '_blank');
    }
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'bg-gray-500';
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-black mb-6 observe-animation opacity-0">
            Mapa Interactivo
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed observe-animation opacity-0">
            Explora los lugares más emblemáticos de Bocachica y planifica tu visita 
            a este tesoro histórico del Caribe colombiano
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Interactive Map Placeholder */}
            <div className="lg:col-span-2">
              <Card className="h-96 lg:h-[600px] relative overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Map Points */}
                  {pointsOfInterest.map((poi, index) => (
                    <button
                      key={poi.id}
                      className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 hover:scale-125 ${getCategoryColor(poi.category)} ${
                        selectedPOI?.id === poi.id ? 'scale-150 ring-4 ring-white' : ''
                      }`}
                      style={{
                        left: `${20 + (index % 3) * 25 + Math.random() * 10}%`,
                        top: `${20 + Math.floor(index / 3) * 20 + Math.random() * 10}%`,
                      }}
                      onClick={() => setSelectedPOI(poi)}
                      title={poi.name}
                    />
                  ))}

                  {/* Map Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 max-w-xs">
                    <h4 className="font-semibold mb-3 text-sm">Leyenda</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2 text-xs">
                          <div className={`w-3 h-3 rounded-full ${category.color}`} />
                          <span>{category.name} ({category.count})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-lg shadow-md flex items-center justify-center transition-colors">
                      <span className="text-lg font-bold">+</span>
                    </button>
                    <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-lg shadow-md flex items-center justify-center transition-colors">
                      <span className="text-lg font-bold">-</span>
                    </button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Points of Interest List */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-black mb-4">Puntos de Interés</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Selecciona un punto en el mapa o en la lista para obtener más información
                </p>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {pointsOfInterest.map((poi) => (
                  <Card
                    key={poi.id}
                    onClick={() => setSelectedPOI(poi)}
                    className={`p-4 cursor-pointer transition-all duration-300 ${
                      selectedPOI?.id === poi.id ? 'ring-2 ring-black bg-gray-50' : 'hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-4 h-4 rounded-full ${getCategoryColor(poi.category)} flex-shrink-0 mt-1`} />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-black truncate">{poi.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">{poi.description}</p>
                        {poi.hours && (
                          <div className="flex items-center mt-2 text-xs text-gray-500">
                            <Clock size={12} className="mr-1" />
                            {poi.hours}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected POI Details */}
      {selectedPOI && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square">
                  <img 
                    src={selectedPOI.image} 
                    alt={selectedPOI.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-4 h-4 rounded-full ${getCategoryColor(selectedPOI.category)} mr-3`} />
                    <span className="text-sm font-medium text-gray-600 capitalize">
                      {categories.find(c => c.id === selectedPOI.category)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-black mb-4">
                    {selectedPOI.name}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {selectedPOI.details}
                  </p>

                  <div className="space-y-3 mb-8">
                    {selectedPOI.hours && (
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Clock size={16} />
                        <span>Horarios: {selectedPOI.hours}</span>
                      </div>
                    )}
                    {selectedPOI.contact && (
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Phone size={16} />
                        <span>Contacto: {selectedPOI.contact}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <MapPin size={16} />
                      <span>
                        Coordenadas: {selectedPOI.coordinates.lat.toFixed(4)}, {selectedPOI.coordinates.lng.toFixed(4)}
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setShowDirections(!showDirections)}
                    variant="outline"
                    className="w-full mb-4"
                  >
                    <Navigation size={16} className="mr-2" />
                    Cómo llegar
                    <ChevronDown size={16} className={`ml-2 transition-transform ${showDirections ? 'rotate-180' : ''}`} />
                  </Button>

                  {showDirections && (
                    <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
                          Desde dónde vienes:
                        </label>
                        <input
                          id="origin"
                          type="text"
                          value={origin}
                          onChange={(e) => setOrigin(e.target.value)}
                          placeholder="Ej: Hotel Charleston, Cartagena"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                        />
                      </div>
                      <Button
                        onClick={handleGetDirections}
                        disabled={!origin}
                        className="w-full"
                        size="sm"
                      >
                        <Globe size={16} className="mr-2" />
                        Abrir en Google Maps
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Location Info */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-serif font-bold mb-6">Cómo llegar a Bocachica</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-xl font-semibold mb-4">Por Mar</h4>
              <p className="text-gray-300 leading-relaxed">
                La forma más auténtica de llegar es por lancha desde el Muelle de la Bodeguita 
                en Cartagena. El viaje dura aproximadamente 45 minutos y ofrece vistas espectaculares 
                de la bahía y las fortalezas.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Tours Organizados</h4>
              <p className="text-gray-300 leading-relaxed">
                Múltiples operadores turísticos ofrecen excursiones completas que incluyen 
                transporte, guía y almuerzo. Una opción cómoda para conocer toda la historia 
                del lugar con expertos locales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mapa;