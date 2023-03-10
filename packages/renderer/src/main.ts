import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import { createPinia } from 'pinia'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from '~/App.vue'

// preflights from tailwind
import '@unocss/reset/tailwind.css'
import 'uno.css'
import '~/styles/main.css'

const app = createApp(App)

// Router
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: (import.meta.env.DEV ? createWebHistory : createWebHashHistory)(),
  routes,
})
app.use(router)

// Pinia - State Management
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
