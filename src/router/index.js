import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import OnboardingSkills from "../views/Onboarding/OnboardingSkills";
import OnboardingName from "../views/Onboarding/OnboardingName";
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
    redirect: '/getfeedbackdash',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/onboarding',
    name: 'OnboardingSkills',
    component: OnboardingSkills,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/onboardingname',
    name: 'OnboardingName',
    component: OnboardingName,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/horizon',
    name: 'Horizon',
    component: Horizon,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/partner',
    name: 'Partner',
    component: Partner,
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/session',
    name: 'StartSession',
    component: Session,
    meta: {
      hideAppBar: true,
      requiresAuth: true,
    },
  },
  {
    path: '/session/:uuid',
    name: 'Session',
    component: Session,
    meta: {
      hideAppBar: true,
      requiresAuth: true,
    },
    props: true,
  },
  {
    path: '/getfeedbackdash',
    name: 'GetFeedbackDash',
    component: GetFeedbackDash,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/givefeedbackdash',
    name: 'GiveFeedbackDash',
    component: GiveFeedbackDash,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/sessiontitle',
    name: 'Title',
    component: Title,
    meta: {
      requiresAuth: true,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = store.getters['user/isUserAuthenticated'];

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (to.name === 'Login' && currentUser) {
    next('/getfeedbackdash');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
})

export default router
