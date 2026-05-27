# PATO Studio

Sitio web de PATO Studio — joyería editorial con tienda online y galerías de colecciones.

## Stack

- [Astro](https://astro.build) — framework principal
- [Tailwind CSS](https://tailwindcss.com) — estilos
- [Supabase](https://supabase.com) — base de datos
- [Drizzle ORM](https://orm.drizzle.team) — ORM

## Estructura

```
paulaWeb/
└── frontend/          # Proyecto Astro
    ├── public/        # Imágenes y assets estáticos
    └── src/
        ├── components/
        ├── layouts/
        └── pages/
            ├── index.astro         # Inicio con galerías editoriales
            ├── tienda.astro        # Tienda online
            ├── pato-especiales.astro
            ├── contacto.astro
            └── login.astro
```

## Desarrollo

```sh
cd frontend
npm install
npm run dev        # http://localhost:4321
npm run build
npm run preview
```
