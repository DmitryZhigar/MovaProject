import { registerUser, loginUser } from '@/apiService';

const state = () => ({
  isLoggedIn: !!localStorage.getItem('jwtToken'),
});

const mutations = {
  setLoggedIn(state, value) {
    state.isLoggedIn = value;
  },
};

const actions = {
  async performRegistration({ commit }, { userName, password }) {
    try {
      const token = await registerUser(userName, password);
      console.log('Registration successful. Token:', token);
      commit('setLoggedIn', true);
      localStorage.setItem('jwtToken', token);
    } catch (error) {
      console.error('Registration failed:', error);
      console.error('Response details:', error.response);
    }
  },

  async performLogin({ commit }, { userName, password }) {
    try {
      const token = await loginUser(userName, password);
      console.log('Login successful. Token:', token);
      commit('setLoggedIn', true);
      localStorage.setItem('jwtToken', token);
    } catch (error) {
      console.error('Login failed:', error);
      console.error('Response details:', error.response);
    }
  },

  logout({ commit }) {
    localStorage.removeItem('jwtToken');
    commit('setLoggedIn', false);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
