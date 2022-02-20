  export default {
  namespaced: true,
  state: null,
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    doLogout(state) {
      state.user = null;
      state.token = null;
    },
  },
  actions: {
    doLogout({ commit }) {
      commit('doLogout');
    },
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
};
