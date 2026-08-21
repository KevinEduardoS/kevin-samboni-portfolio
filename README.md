# Portafolio — Kevin Samboni

Portafolio profesional construido con **React + Vite + Tailwind CSS + Framer Motion**.

## ✨ Características

- Diseño modular por componentes (Navbar, Hero, About, Skills, Experience, Projects, Education, Contact).
- **Modo claro / oscuro** con persistencia en `localStorage` (`src/context/ThemeContext.jsx`).
- **Scroll-spy** en el navbar + barra de progreso de scroll.
- Animaciones de entrada y `whileInView` con Framer Motion.
- Efecto de "typing" para los roles del hero (`src/hooks/useTypewriter.js`).
- Barras de habilidades animadas, agrupadas por categoría.
- Tarjetas de proyectos con enlaces a repositorio/demo.
- Botón "volver arriba" y glow de cursor sutil (solo en desktop).
- SEO básico y Open Graph en `index.html`.
- Contenido centralizado en `src/data/portfolioData.js` — edítalo para actualizar textos, proyectos, links, etc. sin tocar los componentes.

## 🚀 Cómo correrlo

```bash
npm install
npm run dev       # entorno de desarrollo
npm run build     # build de producción (carpeta dist/)
npm run preview   # previsualizar el build
```

## 📝 Personalización rápida

- **Datos personales, proyectos, experiencia, educación**: `src/data/portfolioData.js`.
- **Colores/tema**: `tailwind.config.js` (paleta `brand`).
- **Foto de perfil**: reemplaza `src/assets/kevin-profile.jpg`.
- **CV descargable**: reemplaza `public/cv/CV-Kevin-Samboni-2025.pdf` (o cambia la ruta en `portfolioData.js`).
- **Links de proyectos**: agrega la URL del repo/demo en el campo `link` de cada proyecto en `portfolioData.js`.

## 🌐 Deploy recomendado

Cualquiera de estos funciona gratis y en minutos con este proyecto Vite:

- [Vercel](https://vercel.com) — recomendado, detecta Vite automáticamente.
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com) (usando `vite build` + `gh-pages`)
