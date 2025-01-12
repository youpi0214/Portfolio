import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactUsView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top on route change
    if (savedPosition) {
      return savedPosition;
    } else {
      return {top: 0};
    }
  },
})

export default router
