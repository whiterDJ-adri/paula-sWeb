# Tareas pendientes — PATO Studio Web

## Imágenes
- [x] Borrar imágenes sin usar del repo (editorial/9.webp 26MB, etc. — ~39MB eliminados)
- [x] Comprimir imágenes en uso a quality 90 sin artefactos (7.webp, 8.webp, mapo-03.webp)
- [ ] Renombrar imágenes con el patrón nuevo: `{nombre-descriptivo}-{numero}.webp`
  - Los de tienda y home tienen nombre claro — Claude los puede renombrar
  - Los de `pato-especiales/luna-ki-micro/` (temp-image-*, photoroom-*, p108*, img-*) los nombra el usuario al ver qué muestra cada una
- [ ] Actualizar `data.json` con los nuevos nombres tras el renombrado

## Supabase — Base de datos
- [ ] Ejecutar el SQL en el SQL Editor para crear la tabla `items` y las políticas RLS
  ```sql
  create table items ( ... );
  alter table items enable row level security;
  create policy "Lectura pública" on items for select using (true);
  ```
- [ ] Crear el bucket de Storage con el SQL:
  ```sql
  insert into storage.buckets (id, name, public) values ('imagenes', 'imagenes', true);
  ```

## Supabase — Storage e imágenes
- [ ] Subir todas las imágenes al bucket `imagenes/` con la estructura de carpetas:
  - `anillos/the-molting/`
  - `brazaletes/`
  - `collares/`
  - `otros/bandejas/`, `otros/ceniceros/`, `otros/fundas/`
  - `home/`
  - `contacto/`
  - `pato-especiales/luna-ki-micro/`
- [ ] Insertar filas en la tabla `items` con los datos de cada pieza (titulo, descripcion, precio, imagen_url, categoria, coleccion...)

## Supabase — Conexión con Astro
- [ ] Reemplazar la lectura de `data.json` en `tienda.astro` por queries a Supabase
- [ ] Reemplazar la lectura de `data.json` en `pato-especiales.astro` por queries a Supabase
- [ ] Reemplazar la lectura de `data.json` en `contacto.astro` por queries a Supabase
- [ ] Reemplazar los imports directos de `index.astro` por queries a Supabase
- [ ] Borrar `src/assets/data.json` una vez migrado todo

## Rendimiento (LCP / carga inicial)
- [ ] Eliminar la carga de Google Fonts desde CDN externo en `globals.css` (ya están en local como .woff2)
- [ ] Añadir `<link rel="preload">` del hero en `Layout.astro` para mejorar el LCP

## Otros
- [ ] Decidir qué hacer con `/login` — o conectarlo a Supabase Auth para un panel de admin o eliminarlo
