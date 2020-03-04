import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUpView.vue'
import SignUpForm from '../views/SignUpFormView.vue'
import SignIn from '../views/SignInView.vue'
import Header from '../views/HeaderView.vue'
import TemplateLibrary from '../views/TemplateLibraryView.vue'
import Footer from '../views/FooterView.vue'
import Results from '../views/ResultsView.vue'
import Template from '../views/TemplateView.vue'
import Home from '../views/HomeView.vue'
import Favorites from '../views/MyFavoritesView.vue'
import MyTemplates from '../views/MyTemplatesView.vue'
import NewTemplate from '../views/EditOnlyView.vue'
import EditTemplate from '../views/EditWithResultsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component: Home
  },
  {
    path: '/template-library',
    name: 'TemplateLibrary',
    component: TemplateLibrary
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
  {
    path:'/my-favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path:'/my-templates',
    name: 'MyTemplates',
    component: MyTemplates
  },
  {
    path:'/new-template',
    name: 'NewTemplate',
    component: NewTemplate
  },
  {
    path:'/edit-template',
    name: 'EditTemplate',
    component: EditTemplate
  }
  
]

const router = new VueRouter({
  routes
})

export default router
