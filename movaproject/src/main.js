// main.js
import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Import your Vuex store

const app = createApp(App);

// Use the Vuex store
app.use(store);

app.mount('#app');