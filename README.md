# Bocachica - Patrimonio Cultural e Histórico

Una aplicación web moderna y responsive que celebra la rica herencia cultural e histórica de Bocachica, ubicada en la bahía de Cartagena, Colombia.

## 🌟 Características Principales

- **Diseño Responsive**: Mobile-first con breakpoints optimizados (320px, 768px, 1024px, 1440px)
- **Navegación Intuitiva**: 6 páginas principales con routing suave
- **Accesibilidad**: Cumple con estándares WCAG 2.1 AA
- **Performance Optimizada**: Lazy loading, code splitting, imágenes WebP
- **Animaciones Elegantes**: Scroll animations con Intersection Observer
- **SEO Optimizado**: Meta tags, structured data, sitemap

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Primario**: #FFFFFF (Blanco)
- **Secundario**: #000000 (Negro)
- **Acento**: #F5F5F5 (Gris claro)
- **Contraste mínimo**: 4.5:1 (WCAG AA)

### Tipografía
- **Títulos**: Playfair Display (serif elegante)
- **Contenido**: Inter (sans-serif moderna)
- **Jerarquía**: H1(2.5rem), H2(2rem), H3(1.5rem), Body(1rem)

## 📱 Páginas de la Aplicación

### 1. **Inicio** (/)
- Hero section con imagen aérea panorámica
- Introducción cultural con iconos temáticos
- Grid de navegación interactivo
- Call-to-action para planificar visitas

### 2. **Historia** (/historia)
- Timeline horizontal interactiva con eventos históricos
- Navegación por épocas con flechas y indicators
- Accordions expandibles con detalles
- Citas históricas destacadas

### 3. **Cultura** (/cultura)
- Grid responsivo de categorías culturales
- Modales con contenido multimedia
- Testimonios rotativos de la comunidad
- Integración de audio tradicional

### 4. **Galería** (/galeria)
- Carrusel principal con imágenes destacadas
- Grid tipo Pinterest con filtros por categoría
- Lightbox modal para vista completa
- Navegación por teclado (arrow keys, escape)

### 5. **Mapa** (/mapa)
- Mapa interactivo con puntos de interés
- Marcadores categorizados con popups informativos
- Calculadora de rutas integrada con Google Maps
- Información detallada de cada ubicación

### 6. **Contacto** (/contacto)
- Formulario validado con feedback visual
- Información de contacto completa
- Integración con redes sociales
- Mapa de ubicación de oficina de turismo

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18+ con TypeScript
- **Styling**: Tailwind CSS con sistema de diseño personalizado
- **Routing**: React Router DOM v6
- **Icons**: Lucide React (iconografía moderna)
- **Build Tool**: Vite (desarrollo rápido)
- **Linting**: ESLint con configuración TypeScript

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/bocachica-heritage.git

# Navegar al directorio
cd bocachica-heritage

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linting del código
```

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Layout/          # Header, Footer
│   └── UI/              # Button, Card, Modal
├── pages/               # Páginas principales
│   ├── Home.tsx         # Página de inicio
│   ├── Historia.tsx     # Timeline histórica
│   ├── Cultura.tsx      # Tradiciones culturales
│   ├── Galeria.tsx      # Galería de imágenes
│   ├── Mapa.tsx         # Mapa interactivo
│   └── Contacto.tsx     # Formulario de contacto
├── data/                # Datos estructurados (JSON)
├── assets/              # Recursos estáticos
└── styles/              # Estilos globales
```

## 🎯 Componentes Clave

### Componentes de UI Reutilizables
- **Button**: Variantes (primary, secondary, outline) con estados hover/active
- **Card**: Container flexible con efectos hover opcionales
- **Modal**: Lightbox accesible con navegación por teclado

### Características Avanzadas
- **Scroll Animations**: Intersection Observer para animaciones progresivas
- **Image Lazy Loading**: Carga diferida de imágenes para mejor performance
- **Responsive Navigation**: Menu hamburguesa en mobile con transiciones
- **Form Validation**: Validación en tiempo real con feedback visual

## 🌐 SEO y Accesibilidad

### SEO Optimizaciones
- Meta tags dinámicos por página
- Structured data para contenido cultural
- URLs semánticas y descriptivas
- Sitemap.xml generado automáticamente

### Accesibilidad (WCAG 2.1 AA)
- Navegación por teclado completa
- Alt texts descriptivos para imágenes
- Contraste de color 4.5:1 mínimo
- Focus management en modales
- Screen reader compatibility

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Estrategia Mobile-First
- CSS Grid y Flexbox para layouts flexibles
- Imágenes optimizadas por dispositivo
- Touch-friendly interactive elements
- Navegación adaptativa por tamaño de pantalla

## 🎨 Guía de Componentes

### Button Component
```tsx
<Button 
  variant="primary" 
  size="lg" 
  onClick={handleClick}
>
  Acción Principal
</Button>
```

### Card Component
```tsx
<Card 
  hover={true} 
  onClick={handleCardClick}
  className="custom-styles"
>
  Contenido de la tarjeta
</Card>
```

### Modal Component
```tsx
<Modal 
  isOpen={isModalOpen} 
  onClose={closeModal}
  title="Título del Modal"
>
  Contenido del modal
</Modal>
```

## 🏗️ Arquitectura de Componentes

### Principios de Diseño
- **Single Responsibility**: Cada componente tiene una función específica
- **Composición sobre Herencia**: Componentes modulares y reutilizables
- **Props Interface**: TypeScript para type safety
- **Consistent Styling**: Sistema de diseño unificado

## 🚀 Optimizaciones de Performance

### Técnicas Implementadas
- **Code Splitting**: Carga diferida de páginas
- **Image Optimization**: Formato WebP, lazy loading
- **Bundle Splitting**: Separación de vendor y app bundles
- **Tree Shaking**: Eliminación de código no utilizado
- **Gzip Compression**: Compresión de assets estáticos

## 🌍 Contenido Cultural Auténtico

### Fuentes de Información
- Archivo Histórico de Cartagena
- Instituto Colombiano de Antropología e Historia (ICANH)
- Casa de la Cultura de Bocachica
- Testimonios de habitantes locales
- Fundación Patrimonio Histórico de Cartagena

### Categorías de Contenido
- **Historia**: Timeline de 5 siglos con eventos clave
- **Cultura**: Música, danzas, gastronomía, festividades
- **Arquitectura**: Fortalezas coloniales y patrimonio UNESCO
- **Naturaleza**: Ecosistemas marinos y biodiversidad
- **Comunidad**: Tradiciones vivas y testimonios locales

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **Comunidad de Bocachica** por preservar sus tradiciones
- **Instituto ICANH** por el acceso a archivos históricos
- **UNESCO** por el reconocimiento patrimonial
- **Alcaldía de Cartagena** por el apoyo institucional
- **Fotógrafos locales** por las imágenes culturales

## 📞 Contacto

**Proyecto**: Bocachica - Patrimonio Cultural e Histórico
**Email**: info@bocachica.gov.co
**Website**: [bocachica-heritage.vercel.app](https://bocachica-heritage.vercel.app)

---

*Desarrollado con ❤️ para preservar y celebrar el patrimonio cultural de Bocachica, Colombia.*