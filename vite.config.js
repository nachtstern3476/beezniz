import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	base: "/beezniz/",
	build: {
		assetsInlineLimit: 0,
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
			},
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[name].js`,
				assetFileNames: `assets/[name].[ext]`
			}
		},
	},
});
