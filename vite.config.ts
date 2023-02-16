import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import autoImports from 'unplugin-auto-import/vite'
import { fileURLToPath } from 'url'
import { resolve } from 'path'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import commonjs from '@rollup/plugin-commonjs'

const ROOT = fileURLToPath(import.meta.url)
const r = (p: string) => resolve(ROOT, '..', p)

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    autoImports({
      imports: ['vue', 'vuex', 'vue-router'],
      dts: 'src/types/auto-imports.d.ts',
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon'
        })
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep']
        })
      ],
      dts: 'src/types/components.d.ts'
    }),
    VueSetupExtend(),
    Icons()
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: r('src')
      }
    ],
    extensions: ['.ts', '.tsx', '.js', '.vue']
  },
  build: {
    rollupOptions: {
      plugins: [commonjs()]
    }
  }
})
