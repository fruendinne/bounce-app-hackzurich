import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';
import onboarding from "./modules/onboarding";
import createSession from "./modules/create-session";
import sessions from './modules/sessions';
import * as firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(Vuex)

const store =  new Vuex.Store({
  modules: {
    user,
    sessions,
    onboarding,
    createSession
  }
})

// Handle page reload
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit('user/SET_USER', user)
    store.dispatch('user/loadUserProfile')
  }
})

export default store;
