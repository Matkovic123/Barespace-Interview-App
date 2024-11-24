import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import InterviewQuestion from '@/components/InterviewQuestion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/question/:index',
      component: InterviewQuestion,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: HomeView,
    },
  ],
})

export default router
