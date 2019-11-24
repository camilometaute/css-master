<template>
  <div id="app">
    <!-- <img class="logo-css" alt="Vue logo" src="http://alternafestival.es/wp-content/uploads/css-logo.png">
     -->
    <!-- <HelloWorld msg="Welcome to CSS Master Course"/> -->
    <router-link to="/">Home</router-link> |
    <router-link to="/outdoor">OutDoor Project</router-link> |
    <router-link to="/css-grid-basis">CSS grid basis</router-link> |
    <router-link to="/trulia-cards">Trulia cards</router-link> |
    <router-link to="/openlisting-cards">Open Listing Cards</router-link> |
    <router-link to="/website-css-grid">Web css grid</router-link>

    <router-view/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  },
};
</script>

<style>
</style>
