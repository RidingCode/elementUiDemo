import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Register from '@/pages/register'
import Login from '@/pages/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
