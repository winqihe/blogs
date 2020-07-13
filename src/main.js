import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
import "./axios"
import mavonEditor from 'mavon-editor'
import "element-ui/lib/theme-chalk/index.css"
import 'mavon-editor/dist/css/index.css'
import './permission'
Vue.config.productionTip = false
Vue.use(mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
