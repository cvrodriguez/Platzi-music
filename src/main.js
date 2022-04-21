import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import EventBus from './plugins/even-bus'
import { VueSpinners } from '@saeris/vue-spinners'
import MsToMm from './filters/ms-to-mm'
import Blur from './directives/blur'

Vue.use(EventBus)
Vue.use(VueSpinners)
Vue.use(MsToMm)
Vue.use(Blur)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
