import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Session from '../../models/session';

const state = {
  sessions: [],
};

const getters = {
  sessions: (state) => state.sessions,
  mySessions: (state, getters, rootState, rootGetters) => {
    const userId = rootGetters['user/user'].uid;
    return state.sessions.filter((session) => session.owner === userId);
  },
  assignedSessions: (state, getters, rootState, rootGetters) => {
    const userId = rootGetters['user/user'].uid;
    return state.sessions.filter((session) => session.partnerId === userId);
  },
};

const actions = {
  async loadSessions({ commit }) {
    const sessionCollection = firebase.firestore().collection('session');

    try {
      const sessionsQuery = await sessionCollection
          .get();

      const sessions = []

      sessionsQuery.forEach(
          (doc) => sessions.push(Session.fromSchema(doc.data()))
      );

      commit('SET_SESSIONS', sessions);
    } catch (e) {
      console.log(e);
    }
  },
};

const mutations = {
  SET_SESSIONS(state, payload) {
    state.sessions = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
