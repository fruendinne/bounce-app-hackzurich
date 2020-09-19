const state = {
  horizon: "",
  partners: [],
  title: "",
};

const getters = {
};

const actions = {

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
