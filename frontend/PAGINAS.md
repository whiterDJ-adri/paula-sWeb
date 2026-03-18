# Estructura de Páginas

Este documento explica qué contiene cada página del proyecto.

---

## `/` - Página Principal

**Archivo:** `src/pages/index.astro`

**Propósito:** Muestra el catálogo de productos en un grid.

**Funcionalidad:**
- Carga productos desde Supabase (tabla `Producto`)
- Renderiza un `Card` por cada producto
- Muestra imagen, nombre, precio y descripción
- Incluye `ProductModal` para ver detalles

**Componentes usados:**
- `Layout` - Plantilla base
- `Card` - Tarjeta individual de producto
- `ProductModal` - Modal de detalles

---

## `/login` - Inicio de Sesión

**Archivo:** `src/pages/login.astro`

**Propósito:** Formulario de autenticación de usuarios.

**Estado actual:** Formulario básico HTML (sin funcionalidad completa).

**Próximos pasos:** Integrar con Supabase Auth.

---

## Cómo crear una nueva página

1. Crear archivo en `src/pages/nombre.vue`
2. Usar el layout base:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Mi Página">
  <h1>Contenido</h1>
</Layout>
```

3. La URL será `/nombre`

---

## Componentes del proyecto

| Componente | Ubicación | Descripción |
|------------|-----------|-------------|
| `Layout` | `src/layouts/Layout.astro` | Plantilla base con Navbar y banner |
| `Navbar` | `src/components/navbar.astro` | Navegación superior |
| `Card` | `src/components/card.astro` | Tarjeta de producto |
| `ProductModal` | `src/components/ProductModal.astro` | Modal de detalles del producto |

---

## Rutas existentes

- `/` → `src/pages/index.astro`
- `/login` → `src/pages/login.astro`
