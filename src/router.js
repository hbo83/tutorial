import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Objects from './views/Objects.vue'
import ObjectNumber from './views/ObjectNumber.vue'
import ObjectBoolean from './views/ObjectBoolean.vue'
import ObjectPromise from './views/ObjectPromise.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/objects',
      name: 'objects',
      component: Objects
    },
    {
      path: '/objectNumber',
      name: 'ObjectNumber',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import( /* webpackChunkName: "about" */ './views/ObjectNumber.vue')
      component: ObjectNumber
    },
    {
      path: '/objectBoolean',
      name: 'ObjectBoolean',
      component: ObjectBoolean
    },
    {
      path: '/objectPromise',
      name: 'ObjectPromise',
      component: ObjectPromise
    }
  ]
})
