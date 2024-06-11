import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import ValidationPlugin from './plugins/rules'


Vue.config.productionTip = false

Vue.use(ValidationPlugin);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
