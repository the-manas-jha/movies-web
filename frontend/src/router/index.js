import Vue from 'vue'
import VueRouter from 'vue-router'

// Layouts
import AuthLayout from '../layout/AuthLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue'),
    meta: {
      layout: AuthLayout
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterPage.vue'),
    meta: {
      layout: AuthLayout
    }
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import('../views/ForgotPasswordPage.vue'),
    meta: {
      layout: AuthLayout
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
