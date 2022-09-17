import { createApp } from 'vue'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import WrapperMd from './components/WrapperMd.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.scss'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})

const app = createApp(App)

app.component('WrapperMd', WrapperMd)
app.use(router)
app.use(createHead())

app.mount('#app')
