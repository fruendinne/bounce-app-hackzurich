import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import OnboardingSkills from "../views/Onboarding/OnboardingSkills";
import OnboardingName from "../views/Onboarding/OnboardingName";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import GetFeedbackDash from "../views/GetFeedbackDash";
import GiveFeedbackDash from "../views/GiveFeedbackDash";
import Title from '../views/NewSession/Title';
import Horizon from '../views/NewSession/Horizon';

import store from '../store';
import Partner from "@/views/NewSession/Partner";
import Session from '../views/DrawingSession';
import Profile from "../views/Profile";

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
    path: '/onboardingname',
    name: 'OnboardingName',
    component: OnboardingName
  },
  {
    path: '/horizon',
    name: 'Horizon',
    component: Horizon
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/partner',
    name: 'Partner',
    component: Partner
  },

  {
    path: '/session',
    name: 'StartSession',
    component: Session,
    meta: {
      hideAppBar: true,
    },
  },
  {
    path: '/session/:uuid',
    name: 'Session',
    component: Session,
    meta: {
      hideAppBar: true,
    },
    props: true,
  },
  {
    path: '/getfeedbackdash',
    name: 'GetFeedbackDash',
    component: GetFeedbackDash
  },
  {
    path: '/givefeedbackdash',
    name: 'GiveFeedbackDash',
    component: GiveFeedbackDash
  },
  {
    path: '/sessiontitle',
    name: 'Title',
    component: Title
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
