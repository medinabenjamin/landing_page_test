# Landing Page - Consultora Estratégica

Landing page creada con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**. Pensada como one-page inicial y preparada para escalar a más páginas o blog.

## Requisitos
- Node.js 18+ (recomendado)
- npm 9+

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```
Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build (producción)
```bash
npm run build
```

## Start (producción)
```bash
npm run start
```

## Estructura principal
- `src/app/` - Layout, página principal y estilos globales
- `src/components/` - Secciones de la landing
- `src/content/` - Copy y constantes del sitio
- `src/lib/` - Helpers/utilidades
- `public/` - Assets estáticos

## Animaciones
La landing usa **Framer Motion** para micro-interacciones y animaciones al hacer scroll. Los wrappers reutilizables viven en:

- `src/components/motion/Reveal.tsx`
- `src/components/motion/Stagger.tsx`

## Envío de formulario de contacto a Gmail
El formulario ahora envía un `POST` a `'/api/contact'`, y esa ruta despacha el correo usando SMTP de Gmail.

### Variables de entorno requeridas
Crear un archivo `.env.local` con:

```bash
SMTP_USER=tu-cuenta@gmail.com
SMTP_PASS=tu-app-password-de-gmail
CONTACT_RECEIVER_EMAIL=destino@gmail.com
```

- `SMTP_USER`: cuenta Gmail desde la que se envía.
- `SMTP_PASS`: **App Password** (no tu contraseña normal).
- `CONTACT_RECEIVER_EMAIL`: correo de destino (si se omite, usa `SMTP_USER`).

> Para Gmail, debes activar 2FA y generar un App Password en tu cuenta de Google.
