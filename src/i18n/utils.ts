import esCL from './es-CL.json';

export const defaultLocale = 'es-CL' as const;
export const locales = ['es-CL'] as const;

export type Locale = (typeof locales)[number];
export type Content = typeof esCL;

const content: Record<Locale, Content> = {
  'es-CL': esCL,
};

/**
 * Devuelve el contenido de la landing para un locale.
 * Cae al locale por defecto (es-CL) si el solicitado no existe.
 * Para agregar un idioma: crear `src/i18n/<locale>.json`, importarlo
 * aquí y añadirlo a `locales` y `content`.
 */
export function getContent(locale: Locale = defaultLocale): Content {
  return content[locale] ?? content[defaultLocale];
}
