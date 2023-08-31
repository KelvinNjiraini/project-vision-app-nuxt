// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/supabase',
        '@vueuse/nuxt',
        '@element-plus/nuxt',
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    supabase: {
        redirect: false,
        // redirectOptions: {
        //     login: '',
        //     callback: '/',
        //     exclude: ['/primary/*'],
        // },
    },
});
