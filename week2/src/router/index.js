import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import("../views/home.vue")
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import("../views/classify.vue")
    },
    {
      path: '/find',
      name: 'find',
      component: () => import("../views/find.vue")
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: () => import("../views/shopCar.vue")
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import("../views/profile.vue")
    },
    {
      path: '/',
      redirect: "/find"
    }
  ]
})
