import { createRouter, createWebHistory } from 'vue-router'
import BlankLayout from '@/views/layouts/BlankLayout.vue'
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import { isLogin } from '@/utils/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: 'space/apps',
          name: 'space.apps.list',
          component: () => import('@/views/space/apps/ListView.vue'),
        },
      ],
    },

    {
      path: '/',
      component: BlankLayout,
      children: [
        {
          path: 'auth/login',
          name: 'auth.login',
          component: () => import('@/views/auth/LoginView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to) => {
  if (!isLogin() && to.name != 'auth.login') {
    return { name: 'auth.login' }
  }
})

export default router
