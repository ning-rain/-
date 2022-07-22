import Vue from 'vue'
import App from './App.vue'
import '@/styles/reset.css'
import 'amfe-flexible'
import router from '@/router'
import '@/vant'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
