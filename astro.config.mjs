import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://endroit.app',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
