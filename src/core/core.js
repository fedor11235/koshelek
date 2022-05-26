import emitter from '@/plugins/emitter.js'
import ws from '@/plugins/ws.js'

export default {
    install(app) {
        const logout = () => {
            console.log("Logout is being called");
          };
        app.config.globalProperties.emitter = emitter 
        app.provide("logout", logout);
        app.provide("ws", ws);
     }
  }