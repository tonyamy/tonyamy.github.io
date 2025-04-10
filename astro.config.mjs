import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: 'https://astrofy-template.netlify.app',
  // integrations: [mdx(), sitemap(), tailwind()]
  site: "https://tonyamy.github.io",
  integrations: [mdx(), sitemap(), tailwind()],
  // base: '/tonyamy.github.io/',
  // outDir: 'dist',
  // publicDir: 'public',
  // build: {
  //   assets: '_astro' // 保持默认
  // }
});
