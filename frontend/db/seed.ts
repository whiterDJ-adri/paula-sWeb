import { db, perfiles, productos } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
	await db.delete(perfiles);
	await db.delete(productos);

	await db.insert(perfiles).values([
		{
			id: 1,
			email: "paula@test.com",
			password: "123456",
		},
		{
			id: 2,
			email: "admin@test.com",
			password: "admin123",
		},
	]);

	await db.insert(productos).values([
		{
			id: 1,
			nombre: "Vestido Floral",
			desc: "Vestido ligero para probar listados y detalle.",
			urlImagen: "/src/assets/Screenshot 2026-02-28 at 00-37-55 Instagram.png",
		},
		{
			id: 2,
			nombre: "Blusa Blanca",
			desc: "Blusa basica para probar la tabla productos.",
			urlImagen: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
		},
		{
			id: 3,
			nombre: "Bolso Beige",
			desc: "Accesorio de ejemplo para poblar la base local.",
			urlImagen: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
		},
	]);


	
}
