'use client';

import { ArrowRight, Heart } from 'lucide-react';

export default function OurStory() {
  return (
    <section id="historia" className="bg-pochi-cream py-16 md:py-24 overflow-hidden border-t border-pochi-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTO Y STORYTELLING */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-pochi-orange font-semibold text-xs uppercase tracking-widest">
              <Heart className="w-4 h-4 fill-pochi-orange/20" />
              <span>Tradición y pasión</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-pochi-blue leading-tight">
              Nuestra historia
            </h2>

            <div className="space-y-4 text-pochi-dark font-light text-base leading-relaxed">
              <p>
                <strong className="font-semibold text-pochi-blue">Pochi</strong> nace como un homenaje a mi abuela, quien siempre estuvo presente en los momentos más importantes, con un café y algo rico para compartir.
              </p>
              <p className="text-pochi-gray text-sm md:text-base">
                Hoy, esa calidez se transforma en una tostadora de café de especialidad en Santiago, con la misma vibra de siempre: <span className="italic font-normal text-pochi-dark">buen café, buena compañía.</span>
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#historia-completa"
                className="inline-flex items-center gap-2 bg-pochi-orange hover:bg-pochi-orange-hover text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all shadow-xs"
              >
                Conoce nuestra historia
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: RETRATO CON FORMAS ORGÁNICAS DE FONDO */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* MANCHA / ACCENTO AMARILLO/NARANJA DE FONDO (Igual al boceto) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-amber-200/70 rounded-full blur-2xl -z-10" />
            
            <div className="relative w-full max-w-md">
              {/* Marco Decorativo Naranja */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-pochi-orange/20 rounded-3xl -z-10" />

              {/* Contenedor de la Imagen */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-4/3 sm:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                  alt="Homenaje a la abuela Pochi"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Insignia Flotante */}
              <div className="absolute -bottom-5 -left-5 bg-pochi-blue text-white p-4 rounded-2xl shadow-lg border border-white/10 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pochi-orange/20 text-pochi-orange flex items-center justify-center font-serif font-bold text-lg">
                  P
                </div>
                <div>
                  <p className="text-xs font-bold">Desde el corazón</p>
                  <p className="text-[10px] text-gray-300">Tostado en Santiago, Chile</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}