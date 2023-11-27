<template>
  <div style="background-color: #fff; padding: 10px;">
    <div v-if="!isLoggedIn">
      <h2>Registration</h2>
      <label for="regUserName">Username:</label>
      <input type="text" v-model="regUserName" id="regUserName" />
      <label for="regPassword">Password:</label>
      <input type="password" v-model="regPassword" id="regPassword" />
      <button @click="performRegistration">Register</button>
    </div>

    <div v-if="!isLoggedIn">
      <h2>Login</h2>
      <label for="loginUserName">Username:</label>
      <input type="text" v-model="loginUserName" id="loginUserName" />
      <label for="loginPassword">Password:</label>
      <input type="password" v-model="loginPassword" id="loginPassword" />
      <button @click="performLogin">Login</button>
    </div>

    <button v-if="isLoggedIn" @click="performLogout">Logout</button>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { computed } from 'vue';
import authentication from '../authentication.js';
/* eslint-enable no-unused-vars */

export default {
  name: "HeaderComponent",
  components: {},
  data() {
    return {
      regUserName: "",
      regPassword: "",
      loginUserName: "",
      loginPassword: "",
      isLoggedIn: false,
    };
  },
  methods: {
    async performRegistration() {
      try {
        const token = await this.$store.dispatch('authentication/performRegistration', {
          userName: this.regUserName,
          password: this.regPassword,
        });
        console.log('Registration successful. Token:', token);
        this.isLoggedIn = true;
      } catch (error) {
        console.error('Registration failed:', error);
      }
    },

    async performLogin() {
      try {
        const token = await this.$store.dispatch('authentication/performLogin', {
          userName: this.loginUserName,
          password: this.loginPassword,
        });
        console.log('Login successful. Token:', token);
        this.isLoggedIn = true;
      } catch (error) {
        console.error('Login failed:', error);
      }
    },

    performLogout() {
      this.$store.dispatch('authentication/logout');
      this.isLoggedIn = false;
    },
  },
};
</script>