import Header from '@/components/Header';
import { ArrowRight, Coffee, Flame, Globe2, CupSoda } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-pochi-cream font-sans">
      <Header />

      {/* HERO SECTION */}
      <section className="relative bg-pochi-blue text-white overflow-hidden">
        {/* Imagen de fondo / Overlay de café */}
        <div className="absolute inset-0 z-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* TEXTOS PRINCIPALES Y BOTONES */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
                Café <br />
                de especialidad <br />
                <span className="text-white">tostado en Santiago</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-xl font-light leading-relaxed">
                Cafés honestos, llenos de historia. <br />
                Tostamos en pequeños lotes para que disfrutes lo mejor de cada origen.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#cafes"
                  className="inline-flex items-center gap-2 bg-pochi-orange hover:bg-pochi-orange-hover text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all transform hover:-translate-y-0.5 shadow-lg"
                >
                  Ver nuestros cafés
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#historia"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 font-medium px-6 py-3.5 rounded-full text-sm transition-all"
                >
                  Conoce nuestra historia
                </a>
              </div>
            </div>

            {/* IMAGEN DE LA TAZA / PRODUCTO */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/*Ingresa imagen del cafe en el src*/}
                <img
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop"
                  alt="Taza de café Pochi Coffee Roasters"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

          </div>

          {/* 4 PILARES INFERIORES DEL HERO */}
          <div className="mt-16 pt-12 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Coffee className="w-7 h-7 text-pochi-orange shrink-0 stroke-[1.5]" />
              <div>
                <h3 className="text-sm font-semibold text-white">Café de especialidad</h3>
                <p className="text-xs text-gray-400 mt-0.5">Granos seleccionados de alta puntuación</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Flame className="w-7 h-7 text-pochi-orange shrink-0 stroke-[1.5]" />
              <div>
                <h3 className="text-sm font-semibold text-white">Tueste en pequeños lotes</h3>
                <p className="text-xs text-gray-400 mt-0.5">Control de calidad y frescura</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Globe2 className="w-7 h-7 text-pochi-orange shrink-0 stroke-[1.5]" />
              <div>
                <h3 className="text-sm font-semibold text-white">Orígenes seleccionados</h3>
                <p className="text-xs text-gray-400 mt-0.5">Colombia, Bolivia, Perú</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <CupSoda className="w-7 h-7 text-pochi-orange shrink-0 stroke-[1.5]" />
              <div>
                <h3 className="text-sm font-semibold text-white">Para cada forma de preparar</h3>
                <p className="text-xs text-gray-400 mt-0.5">Molido a medida o en grano</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ESPACIO PARA SIGUIENTE SECCIÓN (NUESTROS CAFÉS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-pochi-gray">
        <p className="text-sm">Siguiente sección: Catálogo "Nuestros cafés"</p>
      </section>
    </main>
  );
}