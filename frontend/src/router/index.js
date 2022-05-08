import { createRouter, createWebHistory } from 'vue-router'
//import Navigation from '../components/Navigation.vue'
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
    name: 'Home',
    component: Home
  },
  {
    path: '/Activites',
    name: 'Activities',
    component: Activities
  },
  {
    Path: '/Activites/Description',
    name: 'DescActi',
    component: ActivitiesDescription
  },
  {
    path: '/Activites/Horraires',
    name: 'CalActi',
    component: ActivitiesCalendar
  },
  {
    path: '/Activites/MesActivites',
    name: 'MyActivities',
    component: MyActivities
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Dons',
    name: 'Dons',
    component: Dons
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: Contact
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin
  },
  //redirects
  {
    path: '/Home',
    redirect: '/'
  }
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
