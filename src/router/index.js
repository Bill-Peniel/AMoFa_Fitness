import MyHome from '@/views/MyHome.vue';
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'MyHome',
    component: MyHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, ) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return {top: 0};
    }
  }
})

export default router
