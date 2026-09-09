# Tareas pendientes — PATO Studio Web

> Movido a `docs/` el 2026-09-09. Se revisó cada ítem contra el código actual del repo
> y se dejaron notas `⚠️ Verificado:` donde la realidad no coincidía con lo escrito.
> Nada se borró — las notas son para que decidas tú qué hacer con cada caso.

## Imágenes
- [x] Borrar imágenes sin usar del repo (editorial/9.webp 26MB, etc. — ~39MB eliminados)
- [x] Comprimir imágenes en uso a quality 90 sin artefactos (7.webp, 8.webp, mapo-03.webp)
- [ ] Renombrar imágenes con el patrón nuevo: `{nombre-descriptivo}-{numero}.webp`
  - Los de tienda y home tienen nombre claro — Claude los puede renombrar
  - Los de `pato-especiales/luna-ki-micro/` (temp-image-*, photoroom-*, p108*, img-*) los nombra el usuario al ver qué muestra cada una
  - ⚠️ Verificado: sigue pendiente. Casi toda `tienda/producto/` ya sigue el patrón
    (`blue-tears-tm-01-horizontal.webp`, `mutation-tm-06.webp`...), pero quedan sueltas
    sin numerar: `pucca.webp`, `red-tec.webp`, `tokyo.webp`. En `home/` faltan casi todas:
    `hero.webp`, `campaign-01.webp`, `campaign-02.webp`, `7.webp`, `8.webp`. Ver la norma
    en [`docs/dogmas/nomenclatura-imagenes.md`](dogmas/nomenclatura-imagenes.md).
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
- ⚠️ Verificado: sigue 100% pendiente. `contacto.astro`, `pato-especiales.astro` y
  `tienda.astro` todavía leen `src/assets/data.json`, e `index.astro` sigue importando
  las imágenes directo desde `src/assets/images/`. `src/lib/supabase.ts` ya existe
  (cliente creado con `PUBLIC_SUPABASE_URL` / `PUBLIC_SUPABASE_ANON_KEY`) pero no se usa
  en ninguna página todavía.

## Rendimiento (LCP / carga inicial)
- [ ] Eliminar la carga de Google Fonts desde CDN externo en `globals.css` (ya están en local como .woff2)
  - ⚠️ Verificado: el `@import` a `fonts.googleapis.com` en `globals.css:1` sigue ahí
    (trae Caveat, Sen, Ubuntu Mono, Ubuntu Sans Mono). Revisando el CSS, **Caveat** y
    **Ubuntu Sans Mono/Ubuntu Mono** solo se definen como variables (`--font-logo`,
    `--font-mono` en `tokens.css`) pero esas variables no se usan en ningún componente
    ni en `globals.css` — parecen código muerto. Si es así, la tarea es aún más simple:
    se puede borrar el `@import` entero y esas dos variables sin reemplazar nada
    (las que sí están en uso, Helvetica PATO y PP Editorial New, ya cargan en local).
    Confirmar mirando bien antes de borrar por si algo las usa vía JS/inline.
- [ ] Añadir `<link rel="preload">` del hero en `Layout.astro` para mejorar el LCP
  - ⚠️ Verificado: sigue pendiente, no hay ningún `preload` en `Layout.astro`.

## Otros
- [ ] Decidir qué hacer con `/login` — o conectarlo a Supabase Auth para un panel de admin o eliminarlo
  - ⚠️ Verificado: no existe `src/pages/login.astro` (ni ningún archivo con "login") en
    el repo actual. O ya se borró y esta tarea quedó obsoleta, o nunca se llegó a crear.
    Si ya no aplica, se puede tachar esta línea.
