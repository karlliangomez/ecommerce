import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2026-09-24',
  //...
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    plugins: [

      vuetify({ autoImport: true }),
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
