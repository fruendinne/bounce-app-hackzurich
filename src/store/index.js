import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';
import onboarding from "./modules/onboarding";
import createSession from "./modules/create-session";
import sessions from './modules/sessions';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    sessions,
    onboarding,
    createSession
  }
})
