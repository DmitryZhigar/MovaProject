<template>
  <div id="app">
    <HeaderComponent msg="Welcome to Your Vue.js App" style="border: 2px solid red;" />
    <!-- ... rest of your template ... -->
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #333; /* Set a background color for the entire app */
}

.content {
  /* Add styles for your main content here */
  color: #383737; /* Example: Set text color to white */
}
</style>