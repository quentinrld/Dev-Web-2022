import { createRouter, createWebHistory } from 'vue-router'
// import Navigation from '../components/Navigation.vue'
import Home from '@/views/Home.vue'
import Activities from '@/views/Activities.vue'
import Profile from '@/views/Profile.vue'
import Dons from '@/views/Dons.vue'
import Contact from '@/views/Contact.vue'
import ActivitiesDescription from '@/views/ActivitiesDescription.vue'
import ActivitiesCalendar from '@/views/ActivitiesCalendar.vue'
import MyActivities from '@/views/MyActivities.vue'
import Login from '@/views/Login.vue'
import Signin from '@/views/Signin.vue'
//import PNF from '../views/PNF.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    component: Home,
    path: '/home',
    name: 'home'
  },
  {
    path: '/activites',
    name: 'activities',
    component: Activities
  },
  {
    path: '/activites/description',
    name: 'descActi',
    component: ActivitiesDescription
  },
  {
    path: '/activites/horaires',
    name: 'calActi',
    component: ActivitiesCalendar
  },
  {
    path: '/activites/mesActivites',
    name: 'myActivities',
    component: MyActivities
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/dons',
    name: 'dons',
    component: Dons
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contact
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  //404
  //{
  //  path: '/:catchAll(.*)',
  //  name: PNF,
  //  component: PNF.vue
  //}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
