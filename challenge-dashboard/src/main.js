import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Main from './components/Content/ContentMain.vue'
import Teste from './components/Content/Teste.vue'

require('normalize.css');

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: '/',
      component: Main
    },
    {
      path: '/teste',
      component: Teste
    },
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')