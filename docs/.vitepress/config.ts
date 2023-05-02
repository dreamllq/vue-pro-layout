import { defineConfig } from 'vitepress'
import pkg from '../../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: `/${pkg.name}@${pkg.version}/docs/.vitepress/dist`,
  title: `${pkg.name}-${pkg.version}`,
  description: pkg.description
})
