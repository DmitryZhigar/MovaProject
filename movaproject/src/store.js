// store.js
import { createStore } from 'vuex';
import authenticationModule from './authentication'; // Adjust the path based on your project structure

const store = createStore({
  modules: {
    authentication: authenticationModule,
    // Add other modules if needed
  },
});

export default store;