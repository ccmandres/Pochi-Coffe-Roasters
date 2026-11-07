'use client';

import { ArrowRight } from 'lucide-react';

// Datos de prueba basados exactamente en el boceto del cliente
const coffeeProducts = [
  {
    id: 1,
    country: 'COLOMBIA',
    name: 'Castillo',
    tastingNotes: 'Chocolate, caramelo, nueces',
    process: 'Lavado',
    variety: 'Castillo',
    price: '$12.000',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    country: 'BOLIVIA',
    name: 'Caranavi',
    tastingNotes: 'Frutas de hueso, miel, equilibrio',
    process: 'Lavado',
    variety: 'Caturra',
    price: '$12.000',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    country: 'PERÚ',
    name: 'Montalvan',
    tastingNotes: 'Dulzor, cacao, cuerpo',
    process: 'Lavado',
    variety: 'Bourbon',
    price: '$12.000',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    country: 'BRASIL',
    name: 'Bourbon Amarillo',
    tastingNotes: 'Nueces, chocolate, balance',
    process: 'Natural',
    variety: 'Bourbon',
    price: '$12.000',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=600&auto=format&fit=crop'
  }
];

export default function ProductCatalog() {
  return (
    <section id="cafes" className="bg-pochi-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-pochi-blue">
              Nuestros cafés
            </h2>
            <p className="text-sm md:text-base text-pochi-gray mt-2">
              Orígenes únicos, tostados para resaltar lo mejor de cada taza.
            </p>
          </div>

          <a 
            href="#todos-los-cafes" 
            className="inline-flex items-center gap-1 text-sm font-semibold text-pochi-dark hover:text-pochi-orange transition-colors mt-4 md:mt-0"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* GRID DE TARJETAS DE PRODUCTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {coffeeProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl p-4 md:p-5 shadow-xs border border-pochi-border flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              {/* IMAGEN DEL PRODUCTO */}
              <div className="relative w-full aspect-square rounded-xl bg-pochi-cream overflow-hidden mb-4 flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={`Café ${product.name} de ${product.country}`}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* DETALLES DEL CAFÉ */}
              <div className="space-y-2 flex-grow">
                <span className="text-[10px] font-bold tracking-widest text-pochi-gray uppercase">
                  {product.country}
                </span>

                <h3 className="text-xl font-serif font-bold text-pochi-dark">
                  {product.name}
                </h3>

                <p className="text-xs text-pochi-gray line-clamp-2">
                  {product.tastingNotes}
                </p>

                {/* ETIQUETAS DE PROCESO Y VARIEDAD */}
                <div className="flex flex-wrap gap-2 pt-1 pb-3">
                  <span className="text-[11px] bg-pochi-cream text-pochi-dark px-2.5 py-1 rounded-md border border-gray-200">
                    {product.process}
                  </span>
                  <span className="text-[11px] bg-pochi-cream text-pochi-dark px-2.5 py-1 rounded-md border border-gray-200">
                    {product.variety}
                  </span>
                </div>
              </div>

              {/* PRECIO Y BOTÓN */}
              <div className="pt-3 border-t border-gray-100 mt-2 space-y-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-pochi-gray">Desde</span>
                  <span className="text-lg font-bold text-pochi-dark">{product.price}</span>
                </div>

                <button 
                  className="w-full bg-pochi-orange hover:bg-pochi-orange-hover text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors shadow-xs"
                >
                  Ver producto
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}