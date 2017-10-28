import Vue from 'vue'
import Router from 'vue-router'
import Services from '../views/Services'
import Welcome from '../views/Welcome'
import Welcome2 from '../views/Welcome2'
import CleaningService from '../views/CleaningService'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/welcome',
      component: Welcome2
    },
    {
      path: '/services',
      component: Services
    },
    {
      path: '/cleaning-service',
      component: CleaningService
    }
  ]
})