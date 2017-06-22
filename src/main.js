// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

const OfflinePlugin = require('offline-plugin/runtime')

OfflinePlugin.install({
  onInstalled: function () {
    console.log('ok')
  },
  onUpdating: function () {

  },
  onUpdateReady: function () {
    OfflinePlugin.applyUpdate()
  },
  onUpdated: function () {
    window.location.reload()
  }
})

window.addEventListener('offline', function () {
  console.log('offline')
})

window.addEventListener('online', function () {
  console.log('online')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
