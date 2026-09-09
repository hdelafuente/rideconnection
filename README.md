# Ride MTB — Landing

Landing de una página para una empresa de experiencias, clases y bikecamps de
mountain bike. Construida con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

Tono deportivo + outdoor. Paleta negro / gris / blanco con acento azul.

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo en http://localhost:4321
npm run build   # build estático en ./dist
npm run preview # previsualizar el build
```

## Estructura

```
src/
├─ components/        Header, Hero, Classes, Bikecamps, About, Contact, Footer, Placeholder
├─ layouts/
│  └─ BaseLayout.astro   <head>, fuentes, idioma
├─ pages/
│  └─ index.astro        compone todas las secciones
├─ i18n/
│  ├─ es-CL.json         👈 TODO el texto editable (contenido de la landing)
│  └─ utils.ts           helper de contenido + configuración de locales
└─ styles/
   └─ global.css         Tailwind + clases reutilizables (.btn, .eyebrow, etc.)
```

## Editar el contenido

Todo el texto vive en **`src/i18n/es-CL.json`**. Edita ese archivo para cambiar
titulares, descripciones, precios, datos de contacto, etc. No hay que tocar los
componentes.

Las imágenes son placeholders grises (componente `Placeholder.astro`) con el
tamaño sugerido. Cada entrada del JSON incluye `image: { width, height, alt }`.
Para poner imágenes reales, reemplaza `Placeholder` por el componente
[`<Image />`](https://docs.astro.build/en/guides/images/) de Astro en el
componente correspondiente.

## Agregar otro idioma (i18n)

El sitio está preparado para i18n con **es-CL** como región por defecto.

1. Copia `src/i18n/es-CL.json` a `src/i18n/<locale>.json` (p. ej. `en.json`) y
   traduce los valores.
2. En `src/i18n/utils.ts`: importa el nuevo JSON, agrégalo al objeto `content` y
   al arreglo `locales`.
3. En `astro.config.mjs`: agrega el locale a `i18n.locales`.

La estructura de datos y los componentes ya son agnósticos al idioma.
