import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    cssInjectedByJsPlugin()
  ],
  esbuild: { drop: ['console', 'debugger'] },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'VueHelloWorld',
      fileName: 'VueHelloWorld'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'vue',
        'lodash',
        'uuid',
        'moment',
        'rxjs'
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          uuid: 'uuid',
          lodash: '_',
          'moment': 'moment',
          'rxjs': 'rxjs'
        },
        exports: 'named'
      }
    }
  }
});
