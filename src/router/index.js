import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import OnboardingSkills from "../views/Onboarding/OnboardingSkills";
import * as firebase from 'firebase/app';
import 'firebase/auth';

import store from '../store';
import Session from '../views/Session';
import Horizon from "@/views/Horizon";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/onboarding',
    name: 'OnboardingSkills',
    component: OnboardingSkills
  },

  {
    path: '/horizon',
    name: 'Horizon',
    component: Horizon
  },
  {
    path: '/session',
    name: 'Session',
    component: Session,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const isUserAuthenticated = store.getters['user/isUserAuthenticated'];

  if (requiresAuth && !isUserAuthenticated) {
    next('/login');
  } else if (to.name === 'Login' && isUserAuthenticated) {
    next('/');
  } else if (requiresAuth && isUserAuthenticated) {
    next();
  } else {
    next();
  }
})

firebase.auth().onAuthStateChanged((user) => {
  if (user !== null && !store.getters['user/isUserAuthenticated']) {
    store.commit('user/SET_USER', user);
    store.dispatch('user/loadUserProfile');

    if (router.currentRoute.path === '/login') router.replace('/');
  } else {
    if (router.currentRoute.path !== '/login') router.push('/login');
  }
});

export default router
