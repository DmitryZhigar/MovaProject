// authentication.js
import { registerUser, loginUser } from '@/apiService';

const state = {
  isLoggedIn: !!localStorage.getItem('jwtToken'),
};

const actions = {
  async performRegistration(regUserName,regPassword) {
    try {
      const token = await registerUser(regUserName, regPassword);
      console.log('Registration successful. Token:', token);
      state.isLoggedIn = true;
      localStorage.setItem('jwtToken', token); // Assuming your API returns a token
    } catch (error) {
        console.error('Registration failed:', error);
        console.error('Response details:', error.response);
      }
  },

  async performLogin({ loginUserName,loginPassword }) {
    try {
      const token = await loginUser(loginUserName,loginPassword);
      console.log('Login successful. Token:', token);
      state.isLoggedIn = true;
      localStorage.setItem('jwtToken', token); // Assuming your API returns a token
    } catch (error) {
        console.error('Registration failed:', error);
        console.error('Response details:', error.response);
      }
  },

  logout({ state }) {
    localStorage.removeItem('jwtToken');
    state.isLoggedIn = false;
  },
};

export default {
  namespaced: true,
  state,
  actions,
};