'use client';

import { ArrowRight, Flame } from 'lucide-react';

const brewingMethods = [
  {
    id: 'v60',
    name: 'V60',
    description: 'Filtrado de cuerpo ligero y acidez brillante.',
    ratio: '15g café / 250ml agua',
    grind: 'Media fina',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 'prensa',
    name: 'Prensa Francesa',
    description: 'Inmersión completa para un cuerpo sedoso y aromático.',
    ratio: '18g café / 300ml agua',
    grind: 'Gruesa',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 'moka',
    name: 'Cafetera Italiana',
    description: 'Extracción con presión para una taza intensa y con carácter.',
    ratio: '15g café / Cámara llena',
    grind: 'Fina media',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Concentración pura con crema espesa y sabor intenso.',
    ratio: '18g café / 36ml bebida',
    grind: 'Fina',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=500&auto=format&fit=crop'
  }
];

export default function BrewingGuide() {
  return (
    <section id="preparacion" className="bg-pochi-blue text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-pochi-orange font-semibold text-xs uppercase tracking-widest mb-1">
              <Flame className="w-4 h-4" />
              <span>Disfrútalo a tu manera</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Cómo preparar
            </h2>
            <p className="text-sm md:text-base text-gray-300 mt-2">
              Recetas simples para sacar lo mejor de cada café.
            </p>
          </div>

          <a 
            href="#todas-las-recetas" 
            className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-pochi-orange transition-colors mt-4 md:mt-0"
          >
            Ver todas las recetas
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* GRID DE MÉTODOS DE EXTRACCIÓN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brewingMethods.map((method) => (
            <div 
              key={method.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-pochi-orange/50 transition-all group cursor-pointer"
            >
              <div>
                {/* IMAGEN DE LA CAFETERA / MÉTODO */}
                <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden mb-4 bg-pochi-dark">
                  <img 
                    src={method.image} 
                    alt={method.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                  />
                </div>

                {/* DETALLES DE LA RECETA */}
                <h3 className="text-lg font-serif font-bold text-white mb-1 flex items-center justify-between">
                  {method.name}
                  <ArrowRight className="w-4 h-4 text-pochi-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                
                <p className="text-xs text-gray-300 mb-3">
                  {method.description}
                </p>
              </div>

              {/* DATOS TÉCNICOS RAPIDOS */}
              <div className="pt-3 border-t border-white/10 space-y-1 text-[11px] text-gray-400">
                <div className="flex justify-between">
                  <span>Proporción:</span>
                  <span className="text-white font-medium">{method.ratio}</span>
                </div>
                <div className="flex justify-between">
                  <span>Molienda:</span>
                  <span className="text-white font-medium">{method.grind}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}