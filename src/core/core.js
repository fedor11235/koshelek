// import dataBus from '@/plugins/dataBus.js'

MyPlugin.install = function (Vue, options) {
    // 1. добавление глобального метода или свойства
    Vue.myGlobalMethod = function () {
        console.log('добавление глобального метода или свойства')
    }
  
    // 2. добавление глобального объекта
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        console.log('добавление глобального объекта')
      }
    })
  
    // 3. добавление опций компонентов
    Vue.mixin({
      created: function () {
        console.log('добавление опций компонентов')
      }
    })
  
    // 4. добавление метода экземпляра
    Vue.prototype.$myMethod = function (methodOptions) {
        console.log('добавление метода экземпляра')
    }
  }