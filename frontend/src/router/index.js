import Vue from 'vue'
import VueRouter from 'vue-router'

// Pages
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import AboutView from '../views/AboutView.vue'
import AccountPage from '../views/AccountPage.vue'
import ContactPage from '../views/ContactPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import ForgotPasswordPage from '../views/ForgotPasswordPage.vue'
import FaqPage from '../views/FaqPage.vue'
import PrivacyPage from '../views/PrivacyPage.vue'
import FavouritePage from '../views/FavouritePage.vue'




// Layouts
import AuthLayout from '../layout/AuthLayout.vue'
import AppLayout from '../layout/AppLayout.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: AppLayout
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      layout: AppLayout
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      layout: AuthLayout
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
    meta: {
      layout: AppLayout
    }
  },
  {
    path: '/account',
    name: 'account',
    component: AccountPage,
    meta: {
      layout: AppLayout
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    meta: {
      layout: AuthLayout
    }
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: ForgotPasswordPage,
    meta: {
      layout: AppLayout
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqPage,
    meta: {
      layout: AppLayout
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyPage,
    meta: {
      layout: AppLayout
    }
  },
  {
    path: '/favourite',
    name: 'favourite',
    component: FavouritePage,
    meta: {
      layout: AppLayout
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
