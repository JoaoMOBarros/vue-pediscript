import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUpView.vue'
import SignUpForm from '../views/SignUpFormView.vue'
import SignIn from '../views/SignInView.vue'
import Header from '../views/HeaderView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/sign-up-form',
    name: 'SignUpForm',
    component: SignUpForm
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
