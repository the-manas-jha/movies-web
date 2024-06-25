import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../middleware/auth'
import middlewarePipeline from '../middleware/midddleware-pipeline'
import localStorageMiddleware from '../middleware/app'

// Layouts
import AuthLayout from '../layout/AuthLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue'),
    meta: {
      layout: AuthLayout,
      middleware: [localStorageMiddleware, auth]
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterPage.vue'),
    meta: {
      layout: AuthLayout,
      middleware: [localStorageMiddleware, auth]
    }
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import('../views/ForgotPasswordPage.vue'),
    meta: {
      layout: AuthLayout,
      middleware: [localStorageMiddleware, auth]
    }
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      layout: AuthLayout,
      middleware: [localStorageMiddleware, auth]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next
  };

  return middlewarePipeline(context, middleware, 0)();
});
export default router
