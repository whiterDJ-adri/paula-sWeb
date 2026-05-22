// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://whiterDJ-adri.github.io",
	base: "/paula-sWeb",
	vite: {
		plugins: [tailwindcss()],
	},
});
