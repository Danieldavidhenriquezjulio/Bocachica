import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Filter, Camera } from 'lucide-react';
import Card from '../components/UI/Card';
import Modal from '../components/UI/Modal';
import Button from '../components/UI/Button';
import { supabase } from '../lib/supabase';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  category: 'paisajes' | 'personas' | 'arquitectura' | 'cultura';
  featured: boolean;
}

const Galeria: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const [images, setImages] = useState<GalleryImage[]>([]);
  // Cargar imágenes desde Supabase al montar el componente
  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from('galeria')
        .select('*')
        .order('created_at', { ascending: false });

        
      if (error) {
        console.error('Error al cargar imágenes:', error);
        return;
      }
      // Mapear los datos a GalleryImage (por si falta algún campo)
      const mapped = (data || []).map((img: any) => ({
        id: img.id,
        src: img.src,
        title: img.title,
        description: img.description,
        category: img.category,
        featured: img.featured ?? false
      }));
      setImages(mapped);
    };
    fetchImages();
  }, []);
  const categories = [
    { id: 'all', name: 'Todas', icon: Camera },
    { id: 'paisajes', name: 'Paisajes', icon: Camera },
    { id: 'personas', name: 'Personas', icon: Camera },
    { id: 'arquitectura', name: 'Arquitectura', icon: Camera },
    { id: 'cultura', name: 'Cultura', icon: Camera },
  ];

  // Formulario para agregar imagen (modal)
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadDesc, setUploadDesc] = useState('');
  const [uploadCat, setUploadCat] = useState('paisajes');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadFile(e.target.files[0]);
      setUploadPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Subida de imagen a Supabase Storage y registro en la base de datos
  const handleAddImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile || !uploadTitle) return;
    try {
      // 1. Subir imagen a Supabase Storage
      const fileName = `${Date.now()}_${uploadFile.name}`;
      const { data: storageData, error: storageError } = await supabase.storage
        .from('galeria')
        .upload(fileName, uploadFile);
      if (storageError) throw storageError;

      // 2. Obtener URL pública
      const { data: publicUrlData } = supabase.storage
        .from('galeria')
        .getPublicUrl(fileName);
      const url = publicUrlData.publicUrl;

      // 3. Guardar metadata en la tabla 'galeria'
      const { data: dbData, error: dbError } = await supabase
        .from('galeria')
        .insert([
          {
            src: url,
            title: uploadTitle,
            description: uploadDesc,
            category: uploadCat,
            featured: false,
            created_at: new Date().toISOString()
          }
        ])
        .select()
        .single();
      if (dbError) throw dbError;

      // 4. Actualizar galería local
      const newImg: GalleryImage = {
        id: dbData.id,
        src: url,
        title: uploadTitle,
        description: uploadDesc,
        category: uploadCat as GalleryImage['category'],
        featured: false
      };
      setImages([newImg, ...images]);
      setUploadFile(null);
      setUploadPreview(null);
      setUploadTitle('');
      setUploadDesc('');
      setUploadCat('paisajes');
      setShowUploadModal(false);
    } catch (err) {
      alert('Error al subir la imagen. Intenta de nuevo.');
      console.error(err);
    }
  };

  // Carrusel: mostrar todas las imágenes en orden aleatorio
  const [shuffledImages, setShuffledImages] = useState<GalleryImage[]>([]);

  // Barajar imágenes solo cuando cambian
  useEffect(() => {
    if (images.length > 0) {
      const shuffled = [...images];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffledImages(shuffled);
    }
  }, [images]);
  const filteredImages = selectedFilter === 'all' 
    ? images 
    : images.filter(img => img.category === selectedFilter);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % shuffledImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [shuffledImages.length]);

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
  }, [selectedFilter]);

  const nextCarouselImage = useCallback(() => {
    setCurrentCarouselIndex((prev) => (prev + 1) % shuffledImages.length);
  }, [shuffledImages.length]);

  const prevCarouselImage = useCallback(() => {
    setCurrentCarouselIndex((prev) => prev === 0 ? shuffledImages.length - 1 : prev - 1);
  }, [shuffledImages.length]);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const nextLightboxImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  const prevLightboxImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
      setSelectedImage(filteredImages[prevIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'ArrowRight') nextLightboxImage();
        if (e.key === 'ArrowLeft') prevLightboxImage();
        if (e.key === 'Escape') closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, selectedImage, filteredImages]);

  return (
    <div className="min-h-screen pt-16">
      {/* Botón flotante para agregar imagen */}
      <button
        onClick={() => setShowUploadModal(true)}
        className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl focus:outline-none focus:ring-4 focus:ring-blue-300"
        title="Agregar imagen"
        aria-label="Agregar imagen"
      >
        +
      </button>

      {/* Modal de formulario de subida */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowUploadModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-700"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Agregar imagen a la galería</h2>
            <form onSubmit={handleAddImage} className="flex flex-col gap-4 items-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
              />
              {uploadPreview && (
                <img src={uploadPreview} alt="Vista previa" className="w-48 h-48 object-cover rounded-lg shadow" />
              )}
              <input
                type="text"
                placeholder="Título de la imagen"
                value={uploadTitle}
                onChange={e => setUploadTitle(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <textarea
                placeholder="Descripción (opcional)"
                value={uploadDesc}
                onChange={e => setUploadDesc(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={2}
              />
              <select
                value={uploadCat}
                onChange={e => setUploadCat(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="paisajes">Paisajes</option>
                <option value="personas">Personas</option>
                <option value="arquitectura">Arquitectura</option>
                <option value="cultura">Cultura</option>
              </select>
              <button
                type="submit"
                disabled={!uploadFile || !uploadTitle}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                Agregar Imagen
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-black mb-6 observe-animation opacity-0">
            Galería Visual
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed observe-animation opacity-0">
            Una colección de imágenes que capturan la esencia, belleza y 
            patrimonio cultural de Bocachica a través del lente del tiempo
          </p>
        </div>
      </section>
      {/* Se eliminó el formulario fijo de agregar imagen, ahora solo está disponible en el modal */}

      {/* Featured Carousel */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-black mb-4">Imágenes Destacadas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Las fotografías más emblemáticas que definen la identidad visual de Bocachica
            </p>
          </div>

          <div className="relative">
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              {shuffledImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-1000 group ${
                    index === currentCarouselIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 cursor-pointer"
                    onClick={() => openLightbox(image)}
                    onError={e => { e.currentTarget.src = 'https://placehold.co/400x300?text=Imagen+no+disponible'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">{image.title}</h3>
                    <p className="text-lg opacity-90 max-w-2xl">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevCarouselImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextCarouselImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {shuffledImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCarouselIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCarouselIndex ? 'bg-black scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Filter size={20} className="text-gray-600" />
              <span className="font-semibold text-gray-700">Filtrar por:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                variant={selectedFilter === category.id ? 'primary' : 'outline'}
                size="sm"
                className="transition-all duration-300"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      

      {/* Image Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6"
            key={`grid-${filteredImages.length}-${selectedFilter}`}
          >
            {filteredImages.map((image, index) => (
              <Card
                key={`${image.id}-${selectedFilter}`}
                className={`break-inside-avoid mb-6 observe-animation opacity-100 transition-all duration-300 hover:shadow-xl cursor-pointer group`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full min-h-[180px] max-h-72 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105 bg-gray-100"
                    onError={e => { e.currentTarget.src = 'https://placehold.co/400x300?text=Imagen+no+disponible'; }}
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-semibold text-black mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{image.description}</p>
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                      {categories.find(cat => cat.id === image.category)?.name}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Navigation Buttons */}
            <button
              onClick={prevLightboxImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextLightboxImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="max-w-5xl max-h-full flex flex-col items-center">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="max-w-full max-h-[70vh] object-contain"
              />
              <div className="text-white text-center mt-6 max-w-2xl">
                <h3 className="text-2xl font-serif font-bold mb-3">{selectedImage.title}</h3>
                <p className="text-lg opacity-90 leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-70">
              {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} de {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;