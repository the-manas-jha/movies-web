// src/router/index.js

import Vue from 'vue';
import Router from 'vue-router';

// Import your components from the new directory with updated names
import HomePage from '@/pages/Home.vue';
import AboutPage from '@/pages/About.vue';
import ContactPage from '@/pages/Contact.vue';
import FAQPage from '@/pages/FAQ.vue';
import PrivacyPolicyPage from '@/pages/Privacy.vue';
import LoginPage from '@/pages/Login.vue';
import RegisterPage from '@/pages/Register.vue';
import AccountPage from '@/pages/Account.vue';
import FavouritePage from '@/pages/Favourite.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
    { path: '/faq', component: FAQPage },
    { path: '/privacy', component: PrivacyPolicyPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/account', component: AccountPage },
    { path: '/favourite', component: FavouritePage },
    // Add more routes here if needed
  ],
  mode: 'history', // This removes the hash from the URL
});

export default router;
