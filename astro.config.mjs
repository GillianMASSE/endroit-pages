import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://en-droit.app',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
