import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as w6s from '@w6s/sdk';


const app = createApp(App)
app.use(w6s, {
    debug: true,
    useHttp: true,
    cordovajs: {
        android: 'https://open.workplus.io/static/android.cordova.min.js',
        iOS: 'https://open.workplus.io/static/ios.cordova.min.js'
    },
})
app.mount('#app')
