
# mrmickwhite Labs Web

Sitio estático modular para **labs.mrmickwhite.software**, pensado para GitHub Pages.

## Estructura

- `index.html` → inicio, con hero cinematográfico (zoom al scroll)
- `esencias.html` → catálogo por pestañas/familias
- `producto.html?id=lima` → presentación individual de cada esencia
- `jabones.html` → línea en desarrollo (próximo lanzamiento)
- `cremas.html` → línea en desarrollo (próximo lanzamiento)
- `nosotros.html`
- `contacto.html`
- `css/app.css` → estilos globales, tokens de color y componentes
- `js/catalog-data.js` → datos del catálogo, navegación, WhatsApp y correo
- `js/common.js` → header, footer, reveal-on-scroll, parallax/zoom, navegación
- `js/home.js` → render de la home
- `js/catalog.js` → pestañas/filtros del catálogo
- `js/product.js` → ficha individual de esencia

## Identidad visual

- Logo: `assets/images/logo-mw-dark.webp` (tinta oscura, para fondos claros) y
  `assets/images/logo-mw-light.webp` (crema, para fondos oscuros como el footer).
- Favicon generado a partir del logo: `assets/icons/favicon.png` / `favicon.ico`.
- Paleta viva definida en `:root` de `css/app.css`: oliva, terracota, dorado,
  lavanda y lima, todos en versión más saturada que la paleta original.
- Tipografía: Playfair Display (títulos) + Manrope (texto), cargadas vía Google
  Fonts con fallback a Georgia/system-ui si no hay red.

## Hero con zoom al scroll

El hero de `index.html` usa `assets/images/hero-bottle-feature.webp` como fondo
a pantalla completa. El atributo `data-hero-zoom` en la imagen (ver `js/common.js`,
función `initParallax`) hace que la imagen escale progresivamente mientras el
usuario scrollea, dando el efecto cinematográfico de acercamiento. Respeta
`prefers-reduced-motion`.

## Datos de contacto configurados

- WhatsApp: `593989336030`
- Correo: `mrmickdesign@gmail.com`

## Cómo probar localmente

```bash
python -m http.server 5500
```

Luego abre `http://localhost:5500`.

## GitHub Pages

1. Sube esta carpeta a tu repositorio.
2. En **Settings > Pages**, activa la publicación desde la rama principal.
3. Mantén el archivo `CNAME` para usar `labs.mrmickwhite.software`.
4. En Cloudflare, apunta el subdominio a GitHub Pages como ya haces normalmente.

## Crear nuevas esencias

Solo agrega un nuevo objeto en `js/catalog-data.js` dentro del arreglo `essences`.
Cada esencia necesita al menos `id`, `name`, `subtitle`, `family`, `accent` (color
hex vivo) y los textos de `overview`/`benefits`/`precautions`/`ingredients`. Si
tiene `labelImage`, se usa esa foto de etiqueta en el catálogo; si no, se usa el
ícono emoji como respaldo.

## Activar jabones / cremas cuando haya productos reales

`jabones.html` y `cremas.html` están listas como página "en desarrollo" con su
propio diseño. Cuando haya productos reales, lo más simple es: crear un arreglo
`soaps` o `creams` en `js/catalog-data.js` (mismo formato que `essences`), y
adaptar `jabones.html`/`cremas.html` para que rendericen una grilla de productos
en lugar del bloque `line-hero`, reutilizando los componentes `.catalog-card` y
`producto.html` ya existentes.

