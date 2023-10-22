import { createRouter, createWebHistory } from 'vue-router'
import Finter from '../views/Finter.vue'
import Fashion from '../views/Fashion.vue'

const routes = [
  {
    path: '/',
    name: 'finter',
    component: Finter
  },
  {
    path: '/manage',
    name: 'fashion',
    component: Fashion
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
