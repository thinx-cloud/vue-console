  export default {
  namespaced: true,
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    doLogout() {
      this.state = {
        user: null,
        token: null
      };
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
};
