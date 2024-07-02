import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import Product from './components/Product.vue'
import Price from './components/Price.vue'
import Profile from './components/Profile.vue'
import Children from './components/Children.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/info/:id', component: Product, name: 'details', props:true },
  { path: '/price', component: Price, name: 'credit' },
  { path: '/profile', component: Profile, name: 'profile' },
  { path: '/profile/children', component: Children, name: 'children' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;