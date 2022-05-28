import { createApp } from 'vue'
import App from './App.vue'
import core from '@/core/core'
import emitter from '@/plugins/emitter.js'
import api from '@/plugins/api.js'

const app = createApp(App)
app.use(core, {'emitter': emitter, 'api': api})
app.mount('#app')
// createApp(App).use(core).mount('#app')
