import * as firebase from 'firebase/app';

const initialState = () => {
  return {
    user: null,
    error: null,
  };
};

const getters = {
  user: (store) => store.user,
  error: (store) => store.error,
};

const actions = {
  async signUp({ commit }, payload) {
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
      commit('SET_USER', response.user);
      commit('SET_ERROR', null);
    }
    catch (e) {
      commit('SET_ERROR', e);
    }
  },
  async signInWithEmailAndPassword({ commit }, payload) {
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password);
      commit('SET_USER', response.user);
      commit('SET_ERROR', null);
    }
    catch (e) {
      commit('SET_ERROR', e);
    }
  },
  async signOut({ commit }) {
    try {
      await firebase.auth().signOut();
    } finally {
      commit('SET_USER', null);
    }
  }
};

const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_ERROR(state, payload) {
    state.user = null;
    state.error = payload;
  },
};

export default {
  namespaced: true,
  state: initialState(),
  getters,
  actions,
  mutations,
};
