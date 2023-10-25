// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    // Options
    families: {},
  },
  components: [
    { path: '@/components/header', extensions: ['vue'] },
    { path: '@/components/ui', extensions: ['vue'] },
  ],
});
