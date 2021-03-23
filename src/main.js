import Vue from 'vue'
import store from "./components/CarStore"
import VueRouter from 'vue-router'
import Acceuil from './components/pages/acceuil'
import App from './App'
import Presentation from './components/pages/presentation'
import Voiture from './components/pages/voiture'
import Autre from "./components/pages/Autre";


Vue.use(VueRouter)


const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Acceuil,
      name: 'acceuil'
    },
    {
      path: '/presentation',
      component: Presentation,
      name: 'presentation'
    },
    {
      path: '/voiture',
      component: Voiture,
      name: 'presentation'
    },
    {
      path: '/autre',
      component: Autre,
      name: 'autre'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
