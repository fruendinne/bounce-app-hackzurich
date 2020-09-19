import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';
import onboarding from "./modules/onboarding";
import createSession from "./modules/create-session";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    onboarding,
    createSession
  }
})
