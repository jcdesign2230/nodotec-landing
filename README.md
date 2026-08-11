# NodoTec — Landing page comercial

Landing page para un negocio de soporte IT, redes, sistemas y automatización
para pequeños negocios en República Dominicana. Construida con **React +
Vite + Tailwind CSS**, sin backend, con todos los CTA conectados a WhatsApp.

---

## 1. Instalación

Necesitas [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install
```

## 2. Ejecutar en desarrollo

```bash
npm run dev
```

Abre la URL que aparece en la terminal (normalmente `http://localhost:5173`).

## 3. Compilar para producción

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para desplegar. Puedes revisarla
localmente con:

```bash
npm run preview
```

---

## 4. Cómo cambiar el número de WhatsApp

Edita `src/config/business.js`:

```js
export const businessConfig = {
  whatsapp: '18091234567', // código de país + código de área + número, sin "+" ni espacios
  ...
}
```

Todos los botones de WhatsApp de la página usan esta configuración
automáticamente a través de la función `createWhatsAppLink()`.

## 5. Cómo cambiar los precios

Los precios viven en **un solo archivo**: `src/data/services.js`.

- `services`: precios de cada servicio (`priceFrom`, `priceModel`, etc.)
- `featuredEntryService`: precio del diagnóstico tecnológico.
- `supportPlans`: precios de los planes de soporte mensual.

No necesitas tocar ningún componente para cambiar un precio.

## 6. Cómo cambiar o agregar servicios

También en `src/data/services.js`. Cada servicio es un objeto dentro del
arreglo `services`. Para agregar uno nuevo, copia la estructura de uno
existente y cambia los valores. Asegúrate de agregar un mensaje
correspondiente en `defaultMessages` (`src/config/business.js`) si quieres
un mensaje de WhatsApp personalizado para ese servicio.

## 7. Cómo cambiar los colores

Los colores están centralizados como tokens de diseño en
`tailwind.config.js`, dentro de `theme.extend.colors`:

```js
colors: {
  paper: '#F3F4EF',   // fondo general
  ink:   '#12181D',   // texto principal / secciones oscuras
  teal:  { DEFAULT: '#0E7C7B', dark: '#0A5F5E', light: '#E4F2F1' }, // color de marca
  amber: { DEFAULT: '#E8A33D', dark: '#C6832A' },
  signal:{ red: '#C4552C', redLight: '#F5E4DC' }, // usado para "antes/problema"
}
```

Cambia estos valores hexadecimales y todo el sitio se actualiza
automáticamente, ya que los componentes usan clases como `bg-teal`,
`text-ink`, etc.

## 8. Cómo cambiar el logo

Actualmente el logo es un punto de estado dentro de un círculo (marca
provisional), definido directamente en `Navbar.jsx` y `Footer.jsx`. Para
usar una imagen:

1. Coloca tu archivo de logo en `src/assets/` (por ejemplo `logo.svg`).
2. Impórtalo en `Navbar.jsx` y `Footer.jsx`: `import logo from '../assets/logo.svg'`
3. Reemplaza el `<span>` del ícono por `<img src={logo} alt={businessConfig.name} className="h-8 w-8" />`.
4. Reemplaza también `public/favicon.svg` por tu propio ícono.

## 9. Cómo cambiar los textos principales

- **Hero, CTA final, datos de contacto**: `src/config/business.js`
- **Servicios, beneficios, planes, proceso, casos de uso**: `src/data/services.js`
- **Preguntas frecuentes**: `src/data/faq.js`

## 10. Cómo agregar Google Analytics

1. Crea una propiedad en [Google Analytics](https://analytics.google.com) y
   obtén tu ID de medición (algo como `G-XXXXXXXXXX`).
2. En `index.html`, dentro de `<head>`, agrega antes de `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Los eventos de conversión (`whatsapp_click`, `service_click`,
`pricing_view`, `contact_form_submit`, `diagnostic_request`) ya se están
registrando internamente a través de la función `trackEvent()` en
`src/config/business.js`. En cuanto `gtag` esté disponible en la página,
esos eventos se enviarán automáticamente a Analytics.

Para Meta Pixel, agrega tu script de pixel de la misma forma en
`index.html`; `trackEvent()` también intenta llamar a `window.fbq` si
existe.

Para Google Search Console, solo necesitas verificar el sitio ya
publicado (por meta tag o archivo HTML) desde el panel de Search Console.

## 11. Cómo conectar el formulario de contacto a un servicio real

Por defecto, el formulario (`src/components/ContactForm.jsx`) arma un
mensaje con los datos ingresados y lo abre directamente en WhatsApp — no
usa backend. Si prefieres recibir los datos por correo o guardarlos en
una base de datos, dentro de ese mismo archivo hay instrucciones para
conectar **Formspree**, **Netlify Forms**, **EmailJS** o un backend
propio.

---

## 12. Desplegar en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub.
2. Instala la herramienta de despliegue:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Agrega estos scripts a `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. `vite.config.js` ya tiene `base: './'`, por lo que funciona en
   cualquier subcarpeta sin cambios adicionales.
5. Ejecuta:
   ```bash
   npm run deploy
   ```
6. En GitHub → Settings → Pages, selecciona la rama `gh-pages` como
   fuente.

## 13. Desplegar en Vercel

1. Importa el repositorio en [vercel.com](https://vercel.com/new).
2. Framework preset: **Vite**.
3. Build command: `npm run build` — Output directory: `dist` (Vercel lo
   detecta automáticamente).
4. Despliega. No necesitas variables de entorno para esta versión.

## 14. Desplegar en Netlify

1. Importa el repositorio en [app.netlify.com](https://app.netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Despliega.

Si quieres usar **Netlify Forms** para el formulario de contacto, sigue
las instrucciones dentro de `src/components/ContactForm.jsx`.

---

## Estructura del proyecto

```text
src/
├── components/     # Todas las secciones de la landing
├── data/           # services.js, faq.js — contenido editable
├── config/         # business.js — WhatsApp, precios base, textos, tracking
├── assets/         # imágenes/logo (vacío por defecto)
├── App.jsx         # Ensambla las secciones en orden de embudo
├── main.jsx
└── index.css       # Tokens de diseño y estilos base (Tailwind)
```

## Nota sobre el contenido

Este proyecto **no incluye** testimonios, logos de clientes, estadísticas
ni casos de éxito inventados, tal como se especificó en el brief original.
Los casos de uso mostrados están claramente etiquetados como ejemplos
ilustrativos. Reemplaza los placeholders (`[USUARIO]`, `[PAGINA]`, el
dominio de ejemplo en `index.html`, etc.) con tus datos reales antes de
publicar.
