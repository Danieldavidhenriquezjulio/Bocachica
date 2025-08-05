import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Bocachica</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Descubre la rica historia y cultura de Bocachica, 
              corazón de la bahía de Cartagena, donde cada rincón 
              cuenta una historia centenaria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { path: '/historia', label: 'Historia' },
                { path: '/cultura', label: 'Cultura' },
                { path: '/galeria', label: 'Galería' },
                { path: '/anecdotas', label: 'Anecdotas' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">
                  Isla de Bocachica, Cartagena, Colombia
                </span>
              </div>
            </div>

            
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Bocachica. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm">
            &copy; Creado por Daniel David Henriquez Julio.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;