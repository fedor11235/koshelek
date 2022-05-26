import emitter from '@/plugins/emitter.js'
export default {
    install(app) {
        const logout = () => {
            console.log("Logout is being called");
          };
        app.config.globalProperties.emitter = emitter 
      
        app.provide("logout", logout);
     }
  }

// export default myPlugin


// // import dataBus from '@/plugins/dataBus.js'
// const myPlugin = {}
// // MyPlugin.install = function (Vue, options) {
// myPlugin.install = function (Vue) {
//     // 1. добавление глобального метода или свойства
//     Vue.myGlobalMethod = function () {
//         console.log('добавление глобального метода или свойства')
//     }
  
//     // 2. добавление глобального объекта
//     Vue.directive('my-directive', {
//         // bind (el, binding, vnode, oldVnode) {
//       bind () {
//         console.log('добавление глобального объекта')
//       }
//     })
  
//     // 3. добавление опций компонентов
//     Vue.mixin({
//       created: function () {
//         console.log('добавление опций компонентов')
//       }
//     })
  
//     // 4. добавление метода экземпляра
//     // MyPlugin.install = function (Vue, options) {
//     Vue.prototype.$myMethod = function () {
//         console.log('добавление метода экземпляра')
//     }
//   }

// export default myPlugin