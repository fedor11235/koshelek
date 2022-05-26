import { createApp } from 'vue'
import App from './App.vue'
import core from '@/core/core'


const app = createApp(App)
app.use(core)
app.mount('#app')
// createApp(App).use(core).mount('#app')
