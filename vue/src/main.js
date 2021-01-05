import Vue from 'vue'
import App from './App.vue'
import * as w6s from '@w6s/sdk';

Vue.config.productionTip = false

// 初始化 sdk
Vue.use(w6s, {
  debug: true,
  useHttp: true,
  cordovajs: {
    android: 'https://open.workplus.io/static/android.cordova.min.js',
    iOS: 'https://open.workplus.io/static/ios.cordova.min.js'
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
