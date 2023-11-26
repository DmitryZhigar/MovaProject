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
  
      <div v-if="isLoggedIn">
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
  import { computed, ref } from 'vue';
  import authentication from '../authentication.js';
  
  export default {
    setup() {
      const auth = authentication;
  
      const isLoggedIn = computed(() => auth.state.isLoggedIn);
  
      // Initialize fields for registration
      const regUserName = ref('');
      const regPassword = ref('');
  
      // Initialize fields for login
      const loginUserName = ref('');
      const loginPassword = ref('');
  
      const performRegistration = async () => {
        console.log(regUserName);
        console.log(regPassword);
        await auth.actions.performRegistration({ userName: regUserName.value, password: regPassword.value });
      };
  
      const performLogin = async () => {
        await auth.actions.performLogin({ userName: loginUserName.value, password: loginPassword.value });
      };
  
      const performLogout = () => {
        auth.dispatch('authentication/logout');
      };
  
      return {
        auth,
        isLoggedIn,
        regUserName,
        regPassword,
        loginUserName,
        loginPassword,
        performRegistration,
        performLogin,
        performLogout,
      };
    },
  };
  </script>
  