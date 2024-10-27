import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const users = [
  { id: 1, username: 'patientUser', password: 'patient123', role: 'patient' },
  { id: 2, username: 'firstAiderUser', password: 'firstAider123', role: 'firstAider' }
];

const store = new Vuex.Store({
  state: {
    currentUser: null,
    emergencyRequests: []
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user;
    },
    receiveEmergency(state, request) {
      state.emergencyRequests.push(request);
    }
  },
  actions: {
    loginUser({ commit }, { username, password }) {
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        commit('setUser', user);
        return Promise.resolve();
      } else {
        return Promise.reject(new Error('Invalid credentials'));
      }
    },
    sendEmergency({ commit }, payload) {
      commit('receiveEmergency', payload);
    }
  },
  getters: {
    isLoggedIn: state => !!state.currentUser,
    userRole: state => (state.currentUser ? state.currentUser.role : null)
  }
});

export default store;
