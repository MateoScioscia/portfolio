# Portfolio — Mateo Scioscia

Sitio personal hecho con Next.js 16, React 19 y Tailwind CSS 4.

## Verlo en la compu

```bash
npm install
npm run dev
```

Abrir http://localhost:3000. Se actualiza solo al guardar un archivo.

## Cambiar los textos

**Todo el contenido está en un solo archivo: `src/content/site.ts`.**

Ahí se editan los datos personales, la descripción, las skills, la formación,
la trayectoria laboral, los contadores y los proyectos. No hace falta tocar
ningún otro archivo para cambiar lo que dice la página.

Lo que diga `TODO` es algo que falta completar.

## Imágenes y archivos

Todo lo que esté en la carpeta `public/` queda accesible en la web con esa
misma ruta (`public/foto.jpg` → `misitio.com/foto.jpg`).

| Archivo | Para qué |
| --- | --- |
| `public/profile.jpg` | Foto del inicio |
| `public/cv.pdf` | Lo que descarga el botón "Descargar CV" |
| `public/projects/*.png` | Capturas de los proyectos |

Los nombres de las capturas tienen que coincidir con el campo `image` de cada
proyecto en `site.ts`. Si el archivo no existe, se muestra un recuadro con la
inicial en vez de una imagen rota.

## Embeber tableros

Cada proyecto puede tener un campo `embed` con la URL de un reporte publicado.
Si está completo, el tablero se muestra dentro de la página, interactivo y con
botón de pantalla completa.

- **Power BI:** abrir el reporte en Power BI Service → Archivo → Insertar
  informe → Publicar en la web → copiar el link.
- **Looker Studio:** Compartir → Insertar informe → activar "Habilitar la
  inserción" → usar la URL de `/embed/reporting/<id>`.

> Ojo: "Publicar en la web" de Power BI genera un link público sin
> autenticación. Usarlo solo con datos que puedan ser públicos.

## Estructura

```
src/
  app/
    page.tsx                    Página principal
    proyectos/[slug]/page.tsx   Página de detalle de cada proyecto
    globals.css                 Colores, tipografías y animaciones
  components/                   Nav, Footer, Projects, Counter, Reveal, ReportEmbed
  content/site.ts               ← TODO EL CONTENIDO
  lib/projects.ts               Chequea qué capturas existen
```

## Publicar

Con el repo en GitHub, importarlo en [vercel.com](https://vercel.com). Cada
`git push` republica el sitio automáticamente.
