import { column, defineDb, defineTable } from "astro:db";

export const perfiles = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		email: column.text(),
		password: column.text(),
	},
});

export const productos = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		nombre: column.text(),
		desc: column.text(),
		urlImagen: column.text(),
	},
});

export default defineDb({
	tables: { perfiles, productos },
});
