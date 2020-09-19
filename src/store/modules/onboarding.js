const state = {
  skills: [],
  name: "",
};

const getters = {
};

const actions = {

};

const mutations = {
  SET_SKILLS(state, payload) {
    state.skills = payload;
  },
  SET_NAME(state, payload) {
    state.name = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
