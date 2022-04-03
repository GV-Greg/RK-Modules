import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/anim',
      name: 'anim',
      component: () => import('../views/anim/AnimIndexView.vue'),
      children: [
        {
          path: 'code',
          name: 'code',
          component: () => import('../views/anim/CodeView.vue'),
        },
        {
          path: 'joutes',
          name: 'joutes',
          component: () => import('../views/anim/JoutesView.vue'),
        }
      ]
    },
    {
      path: '/eco',
      name: 'eco',
      component: () => import('../views/eco/EcoIndexView.vue')
    },
    {
      path: '/secu',
      name: 'secu',
      component: () => import('../views/secu/SecuIndexView.vue')
    },
    {
      path: '/vitart',
      name: 'vitart',
      component: () => import('../views/vitart/CompIndexView.vue')
    },
  ]
})

export default router
