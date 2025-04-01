import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages deployment configuration
  site: 'https://yukimi-inu.github.io', // Replace with your GitHub username
  base: '/e-layout', // Replace with your repository name
  outDir: '../dist-docs', // Output directory relative to the docs folder
  // Ensure Astro can resolve the web components from the parent directory
  vite: {
    resolve: {
      // alias: {
      //   'e-layout': '../dist', // Alias might interfere with package exports resolution
      // },
    },
    // Ensure dependencies are handled correctly
    optimizeDeps: {
      include: ['e-layout', 'e-layout/*'], // Include the package itself and its exports
    },
    ssr: {
      // Ensure Lit components work correctly with SSR (if needed, though likely client-side for docs)
      noExternal: ['lit', '@lit/reactive-element'],
    },
  },
});
