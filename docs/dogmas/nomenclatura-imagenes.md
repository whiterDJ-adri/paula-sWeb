# Dogma: nomenclatura de imágenes

> ⚠️ Borrador inferido a partir de lo que ya está escrito en `docs/TAREAS.md` y de los
> nombres que ya existen en `tienda/producto/`. Confirmá o ajustá esto — una vez que
> quede cerrado, se le saca esta advertencia.

## Patrón

```
{nombre-descriptivo}-{numero}.webp
```

- `nombre-descriptivo`: en minúsculas, palabras separadas por guion (kebab-case). Puede
  incluir un código de colección corto (ej. `tm` = "the molting") si ayuda a agrupar.
- `numero`: dos dígitos con cero a la izquierda si la colección tiene 10+ piezas
  (`01`, `02`... `10`), un dígito si no.
- Si hace falta distinguir orientación o variante de la misma pieza, va al final:
  `{nombre-descriptivo}-{numero}-{variante}.webp` (ej. `horizontal`, `vertical`).

### Ejemplos que ya siguen el patrón (no tocar)
- `blue-tears-tm-01-horizontal.webp` / `blue-tears-tm-01-vertical.webp`
- `mutation-tm-06.webp`
- `wet-wings-tm-03.webp`

### Ejemplos que están mal y hay que corregir
- `pucca.webp` → falta número de pieza (`pucca-01.webp` o similar).
- `red-tec.webp`, `tokyo.webp` → mismo caso.
- `7.webp`, `8.webp` (en `home/the-molting/`) → falta el nombre descriptivo, es solo el número.
- `hero.webp`, `campaign-01.webp`, `campaign-02.webp` → revisar si "campaign" es
  suficientemente descriptivo o si debería llevar el nombre de la colección.

## Casos especiales

- **`pato-especiales/luna-ki-micro/`**: los archivos con nombres de cámara/herramienta
  (`temp-image-*`, `photoroom-*`, `p108*`, `img-*`) **no los renombra la IA sola** —
  el usuario decide el nombre descriptivo después de ver qué muestra cada foto. La IA
  puede proponer nombres pero no aplicar el rename sin confirmación en esta carpeta.
- Todo lo demás (tienda, home) sí lo puede renombrar la IA directamente siguiendo el
  patrón de arriba, sin pedir confirmación pieza por pieza.

## Al renombrar, siempre

1. Actualizar todas las referencias en `src/assets/data.json` y en los `.astro` que
   importen la imagen directamente (ej. `index.astro`).
2. No dejar imports rotos — correr una búsqueda del nombre viejo en todo `src/` antes
   de dar el rename por terminado.
