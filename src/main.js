import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import signUp from './components/Screens/signUp.vue'

Vue.use(VueRouter)

const routes = [
  {
      path: '/signUp',
      component: signUp,
  }
]

const router = new VueRouter({
  routes:routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
