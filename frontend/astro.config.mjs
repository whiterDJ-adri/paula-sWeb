// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://whiterDJ-adri.github.io",
	base: "/paula-sWeb",
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
