import * as firebase from 'firebase/app';
import Session from '../../models/session';

const state = {
  horizon: "",
  partners: [],
  title: "",
};

const getters = {
};

const actions = {
  async startSession({ rootGetters }) {
    const userProfileCollection = firebase.firestore().collection('userProfile');
    const userId = rootGetters['user/user'].uid;

    try {
      const potentialPartners = await userProfileCollection
          .where('skills', 'array-contains-any', state.partners)
          .get();

      const partnerId = potentialPartners.docs[0].id;

      const session = new Session(
          userId,
          state.title.trim(),
      )
      session.partnerId = partnerId;

      return session;
    } catch (e) {
      console.log(e);
    }
  },
};

const mutations = {
  SET_HORIZON(state, payload) {
    state.horizon = payload;
  },
  SET_PARTNERS(state, payload) {
    state.partners = payload;
  },
  SET_TITLE(state, payload) {
    state.title = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
