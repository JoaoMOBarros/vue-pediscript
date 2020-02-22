import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUpView.vue'
import SignIn from '../views/SignInView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/',
    name: 'SignUp',
    component: SignUp
  },
]

const router = new VueRouter({
  routes
})

export default router
