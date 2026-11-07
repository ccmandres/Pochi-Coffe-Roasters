'use client';

import { Send, MapPin, Mail, Phone, Heart } from 'lucide-react';

function Instagram({ className = "w-4 h-4" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

const instagramPosts = [
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&auto=format&fit=crop'
];

export default function Footer() {
  return (
    <footer className="bg-pochi-cream border-t border-pochi-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECCIÓN FEED DE INSTAGRAM (@pochicoffeeroasters) */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-pochi-orange">
                Síguenos
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-pochi-blue mt-1">
                @pochicoffeeroasters
              </h3>
              <p className="text-xs md:text-sm text-pochi-gray mt-1">
                Café, procesos, recetas y más en Instagram.
              </p>
            </div>

            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-pochi-dark hover:text-pochi-orange transition-colors mt-3 md:mt-0"
            >
              Ver en Instagram
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* GRID DE FOTOS INSTAGRAM */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((img, idx) => (
              <a 
                key={idx} 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="relative aspect-square rounded-2xl overflow-hidden group shadow-xs border border-pochi-border"
              >
                <img 
                  src={img} 
                  alt="Post de Instagram Pochi Coffee" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-pochi-blue/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Instagram className="w-6 h-6" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* PIE DE PÁGINA PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-12 border-t border-pochi-border">
          
          {/* MARCA E INFO */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <span className="text-2xl font-serif font-bold text-pochi-blue tracking-tight">Pochi</span>
              <p className="text-[10px] tracking-widest text-pochi-orange uppercase font-semibold">
                Coffee Roasters
              </p>
            </div>
            <p className="text-xs text-pochi-gray leading-relaxed max-w-sm">
              Café de especialidad tostado en Santiago. Buen café, buena compañía, siempre.
            </p>
          </div>

          {/* COLUMNA 1: NAVEGACIÓN */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pochi-dark">Navegación</h4>
            <ul className="space-y-2 text-xs text-pochi-gray">
              <li><a href="#inicio" className="hover:text-pochi-orange">Inicio</a></li>
              <li><a href="#cafes" className="hover:text-pochi-orange">Cafés</a></li>
              <li><a href="#drip-bags" className="hover:text-pochi-orange">Drip Bags</a></li>
              <li><a href="#historia" className="hover:text-pochi-orange">Nuestra Historia</a></li>
              <li><a href="#preparacion" className="hover:text-pochi-orange">Preparación</a></li>
            </ul>
          </div>

          {/* COLUMNA 2: INFORMACIÓN */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pochi-dark">Información</h4>
            <ul className="space-y-2 text-xs text-pochi-gray">
              <li><a href="#" className="hover:text-pochi-orange">Despachos</a></li>
              <li><a href="#" className="hover:text-pochi-orange">Formas de pago</a></li>
              <li><a href="#" className="hover:text-pochi-orange">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:text-pochi-orange">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-pochi-orange">Política de privacidad</a></li>
            </ul>
          </div>

          {/* COLUMNA 3: CONTACTO DIRECTO */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pochi-dark">Contacto</h4>
            <div className="space-y-2 text-xs text-pochi-gray">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-pochi-orange" />
                hola@pochicoffeeroasters.cl
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-pochi-orange" />
                Santiago, Chile
              </p>
            </div>

            {/* BOTÓN WHATSAPP IGUAL AL BOCETO */}
            <div className="pt-2">
              <a 
                href="https://wa.me/56912345678" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-pochi-blue hover:bg-pochi-dark text-white font-medium px-4 py-2.5 rounded-xl text-xs transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5 text-pochi-orange" />
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-6 border-t border-pochi-border flex flex-col sm:flex-row justify-between items-center text-[11px] text-pochi-gray gap-2">
          <p>© 2026 Pochi Coffee Roasters. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado con <Heart className="w-3 h-3 text-pochi-orange fill-pochi-orange" /> en Santiago, Chile.
          </p>
        </div>

      </div>
    </footer>
  );
}