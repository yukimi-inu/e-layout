import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { defineConfig } from 'astro/config';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  site: 'https://yukimi-inu.github.io',
  base: '/e-layout',
  outDir: '../dist-docs',
  devToolbar: {
    enabled: false,
  },
  vite: {
    resolve: {
      alias: {
        'e-layout': path.resolve(__dirname, '../dist/components'),
      },
    },
    ssr: {
      noExternal: [],
    },
  },
});
