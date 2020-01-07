import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Overdrive from 'vue-overdrive'
import '../src/styles/styles.css'

Vue.use(Buefy)
Vue.use(Overdrive)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
