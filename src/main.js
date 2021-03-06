import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import dateFilter from '@/filters/date.filter'
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
