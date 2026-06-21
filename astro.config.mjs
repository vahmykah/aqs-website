import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Since we are building a purely static page with local optimizations,
  // we do not need complex adapters for the initial build.
  site: 'https://aquietspace.id',
});
