// main.js
import { createApp } from 'vue';
import App from './App.vue';
import authenticationModule from './authentication'; // Adjust the path based on your project structure

const app = createApp(App);

// Register the authentication module
app.use(authenticationModule);

app.mount('#app');