'use client';

import { ArrowRight, Coffee } from 'lucide-react';

const dripBagProducts = [
  {
    id: 'drip-5',
    title: 'Caja 5 Drip Bags',
    subtitle: '5 sobres de 10g',
    price: '$6.500',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 'drip-10',
    title: 'Caja 10 Drip Bags',
    subtitle: '10 sobres de 10g',
    price: '$12.000',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=500&auto=format&fit=crop'
  }
];

export default function DripBags() {
  return (
    <section id="drip-bags" className="bg-white py-16 md:py-24 border-t border-pochi-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-pochi-orange font-semibold text-xs uppercase tracking-widest mb-1">
              <Coffee className="w-4 h-4" />
              <span>Café práctico</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-pochi-blue">
              Drip Bags
            </h2>
            <p className="text-sm md:text-base text-pochi-gray mt-2">
              Café de especialidad en cualquier lugar. Práctico, simple y delicioso.
            </p>
          </div>

          <a 
            href="#todos-los-dripbags" 
            className="inline-flex items-center gap-1 text-sm font-semibold text-pochi-dark hover:text-pochi-orange transition-colors mt-4 md:mt-0"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* CONTENIDO PRINCIPAL: TARJETAS Y BANNER DESTACADO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* COLUMNA IZQUIERDA: PRODUCTOS (5 Y 10 PACK) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dripBagProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-pochi-cream rounded-2xl p-5 border border-pochi-border flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                {/* IMAGEN DE LA CAJA */}
                <div className="relative w-full aspect-square rounded-xl bg-white overflow-hidden mb-4 p-4 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-pochi-blue text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    Pochi
                  </span>
                </div>

                {/* DETALLES */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-lg font-serif font-bold text-pochi-dark">
                    {product.title}
                  </h3>
                  <p className="text-xs text-pochi-gray">
                    {product.subtitle}
                  </p>
                  <p className="text-sm font-bold text-pochi-dark pt-1">
                    Desde <span className="text-base text-pochi-orange">{product.price}</span>
                  </p>
                </div>

                {/* BOTÓN */}
                <button className="w-full bg-pochi-orange hover:bg-pochi-orange-hover text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors shadow-xs">
                  Ver producto
                </button>
              </div>
            ))}
          </div>

          {/* COLUMNA DERECHA: BANNER DE USO E ILUSTRACIÓN DE PREPARACIÓN */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-full border border-pochi-border shadow-xs group">
            <img 
              src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop" 
              alt="Preparación de Drip Bag en taza"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pochi-blue/90 via-pochi-blue/40 to-transparent p-6 md:p-8 flex flex-col justify-end text-white">
              <span className="text-xs font-semibold uppercase tracking-widest text-pochi-orange mb-1">
                ¿Sin cafetera? No hay problema
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">
                Tu dosis de café de especialidad, estés donde estés
              </h3>
              <p className="text-xs md:text-sm text-gray-200 font-light">
                Solo abre el sobre, cuélgalo en tu taza favorita y agrega agua caliente.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}