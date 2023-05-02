import { defineConfig } from 'vitepress'
import pkg from '../../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: `/${pkg.name}/docs/.vitepress/dist`,
  title: pkg.name,
  description: pkg.description
})
