import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/historia', label: 'Historia' },
    { path: '/cultura', label: 'Cultura' },
    { path: '/galeria', label: 'Galería' },
    { path: '/anecdotas', label: 'Anecdotas' }
  ];
  const juegosItems = [
    { path: '/trivia', label: 'Trivia' },
    { path: '/OrdenaTimeline', label: 'Ordena la Línea de Tiempo' },
    { path: '/VerdaderoFalso', label: 'Verdadero o Falso' },
    { path: '/EncuentraElError', label: 'Encuentra el Error' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
      style={{ transform: location.pathname === '/' && !isScrolled ? 'translateY(-100%)' : undefined }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-serif font-bold text-black hover:opacity-80 transition-opacity"
          >
            Bocachica
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-gray-600 ${
                  location.pathname === item.path 
                    ? 'text-black ' 
                    : 'text-gray-700'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black animate-pulse"></span>
                )}
              </Link>
            ))}
            
            {/* Juegos Dropdown */}
            <div className="relative group">
              <button className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-black focus:outline-none">
                Juegos
                <span className="ml-1">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-20 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                {juegosItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black rounded-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'text-black bg-gray-100'
                      : 'text-gray-700 hover:text-black hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
             
              {/* Juegos Mobile Dropdown */}
              <div className="mt-2">
                <div className="px-3 py-2 text-base font-medium text-gray-700">Juegos</div>
                {juegosItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-6 py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-black rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;