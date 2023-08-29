import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExampleView from '../views/ExampleView.vue'
import ExampleSlugView from '../views/ExampleSlugView.vue'
import NotFoundView from '@/views/NotFoundView.vue';
import VuexView from '@/views/VuexView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/example',
      name: 'example',
      component: ExampleView
    },
    {
      path: '/examples/:slug',
      name: 'examples',
      component: ExampleSlugView
    },
    { 
      path: '/:catchAll(.*)', 
      component: NotFoundView 
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: VuexView
    },
  ]
})

export default router
