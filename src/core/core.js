export default {
    install(app, options) {
        app.config.globalProperties.core = {}
        for (const key in options) {
            app.config.globalProperties.core[key] = options[key] 
        }
     }
  }
