# ☕ Pochi Coffee Roasters — Plataforma Web & E-Commerce

Plataforma web oficial y tienda e-commerce para **Pochi Coffee Roasters**, tostaduría de café de especialidad ubicada en Santiago, Chile. El proyecto evoluciona desde un prototipo visual (MVP) hacia una tienda online completa con gestión dinámica de inventario, carrito de compras y pasarelas de pago locales (Webpay / MercadoPago).

---

## 🛠️ Stack Tecnológico

* **Framework Frontend:** Next.js 16 (App Router) — JavaScript (`.js` / `.jsx`)
* **Estilos:** Tailwind CSS v4 (configuración mediante directiva `@theme` en `src/app/globals.css`)
* **Íconos:** `lucide-react` + componentes SVG personalizados (ej. Instagram)
* **Backend & Base de Datos:** Supabase (PostgreSQL + Data API RESTful + Supabase Storage)
* **Pasarelas de Pago (Fase futura):** Transbank Webpay Plus / MercadoPago Chile
* **Control de Versiones:** Git & GitHub (`main` para producción, `develop` para desarrollo)

---

## 🎨 Identidad Visual y Sistema de Diseño

La marca combina estética artesanal cálida con contrastes limpios y modernos:

* **Paleta de Colores (Tailwind v4 `@theme`):**
  * `pochi-blue` (`#0A1322`): Azul marino profundo (Hero, sección de preparación, acentos).
  * `pochi-orange` (`#E85D22`) / hover (`#D04D16`): Naranja vibrante (Botones CTA, badges, acentos).
  * `pochi-cream` (`#F9F7F2`): Fondo crema suave (Catálogo de cafés, Historia, Footer).
  * `pochi-card` (`#FFFFFF`): Blanco puro (Tarjetas de producto y Header).
  * `pochi-dark` (`#121826`): Texto principal.
  * `pochi-gray` (`#6B7280`): Subtítulos y textos secundarios.
  * `pochi-border` (`#E5E7EB`): Bordes sutiles.
* **Tipografía:** Combinación de títulos con estilo `font-serif` y cuerpos de texto limpios en `font-sans`.

---
# Instalar dependencias
npm install

# Instalar cliente de Supabase (para TAR-011)
npm install @supabase/supabase-js

# Levantar servidor de desarrollo
npm run dev


## 📁 Estructura Actual del Proyecto

```text
pochi-coffe-roasters/
├── public/                     # Assets estáticos locales (imágenes temporales/logos)
├── src/
│   ├── app/
│   │   ├── globals.css         # Configuración de Tailwind v4 y variables de color @theme
│   │   ├── layout.js           # Estructura global HTML y metadatos
│   │   └── page.js             # Landing Page principal (integra todas las secciones del MVP)
│   └── components/
│       ├── Header.js           # Navbar sticky blanco, navegación desktop/mobile, buscador, perfil y badge carrito
│       ├── ProductCatalog.js   # Sección "Nuestros cafés" (Grid 4 columnas con notas de cata, proceso y variedad)
│       ├── DripBags.js         # Sección "Drip Bags" (Cajas x5 y x10 + banner ilustrativo lateral)
│       ├── OurStory.js         # Sección "Nuestra historia" (Storytelling homenaje a la abuela + composición gráfica)
│       ├── BrewingGuide.js     # Sección "Cómo preparar" (Métodos V60, Prensa Francesa, Cafetera Italiana, Espresso)
│       └── Footer.js           # Feed de Instagram (@pochicoffeeroasters), enlaces, contacto y botón WhatsApp
├── .gitignore                  # Configurado para ignorar node_modules, .next y .env*
├── next.config.mjs             # Configuración de Next.js
├── package.json                # Dependencias (next, react, react-dom, lucide-react, tailwindcss)
└── README.md                   # Documentación del proyecto y contexto para asistentes AI
