'use client';

import { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-pochi-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <a href="#" className="flex flex-col">
            <span className="text-2xl font-serif font-bold text-pochi-blue tracking-tight leading-none">
              Pochi
            </span>
            <span className="text-[9px] tracking-widest text-pochi-gray uppercase font-semibold mt-1">
              Coffee Roasters
            </span>
          </a>
        </div>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-pochi-dark">
          <a href="#inicio" className="hover:text-pochi-orange transition-colors">Inicio</a>
          <a href="#cafes" className="hover:text-pochi-orange transition-colors">Cafés</a>
          <a href="#drip-bags" className="hover:text-pochi-orange transition-colors">Drip Bags</a>
          <a href="#historia" className="hover:text-pochi-orange transition-colors">Nuestra Historia</a>
          <a href="#preparacion" className="hover:text-pochi-orange transition-colors">Preparación</a>
          <a href="#contacto" className="hover:text-pochi-orange transition-colors">Contacto</a>
        </nav>

        {/* ACCIONES Y CARRITO */}
        <div className="flex items-center space-x-6 text-pochi-dark">
          <button aria-label="Buscar" className="hover:text-pochi-orange transition-colors">
            <Search className="w-5 h-5 stroke-[1.8]" />
          </button>
          
          <button aria-label="Perfil" className="hover:text-pochi-orange transition-colors">
            <User className="w-5 h-5 stroke-[1.8]" />
          </button>

          <button aria-label="Carrito" className="relative hover:text-pochi-orange transition-colors">
            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            <span className="absolute -top-2 -right-2 bg-pochi-orange text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>

          {/* BOTÓN MENÚ MOBILE */}
          <button 
            className="md:hidden text-pochi-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden bg-pochi-blue text-white px-6 py-6 space-y-4 border-t border-gray-800">
          <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium hover:text-pochi-orange">Inicio</a>
          <a href="#cafes" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium hover:text-pochi-orange">Cafés</a>
          <a href="#drip-bags" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium hover:text-pochi-orange">Drip Bags</a>
          <a href="#historia" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium hover:text-pochi-orange">Nuestra Historia</a>
          <a href="#preparacion" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium hover:text-pochi-orange">Preparación</a>
          <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium hover:text-pochi-orange">Contacto</a>
        </div>
      )}
    </header>
  );
}