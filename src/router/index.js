import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUpView.vue'
import SignUpForm from '../views/SignUpFormView.vue'
import SignIn from '../views/SignInView.vue'
import Header from '../views/HeaderView.vue'
import ContentTable from '../views/ContentTableView.vue'
import Footer from '../views/FooterView.vue'
import Results from '../views/ResultsView.vue'
import Template from '../views/TemplateView.vue'
import Home from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component: Home
  },
  {
    path: '/content-table',
    name: 'ContentTable',
    component: ContentTable
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  },
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
    path: '/results',
    name: 'Results',
    component: Results
  },
  {
    path: '/template',
    name: 'Template',
    component: Template
  },
  {
    path: '/sign-up-form',
    name: 'SignUpForm',
    component: SignUpForm
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  
]

const router = new VueRouter({
  routes
})

export default router
