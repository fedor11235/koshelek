import emitter from '@/plugins/emitter.js'
import ws from '@/plugins/ws.js'

export default {
    install(app) {
        app.config.globalProperties.emitter = emitter 
        app.provide("ws", ws);
     }
  }
