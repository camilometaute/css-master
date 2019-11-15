<template>
  <div id="app">
    <!-- <img class="logo-css" alt="Vue logo" src="http://alternafestival.es/wp-content/uploads/css-logo.png">
     -->
      <!-- <HelloWorld msg="Welcome to CSS Master Course"/> -->
    <router-link to="/outdoor">OutDoor Project</router-link> |
    <router-link to="/css-grid">CSS grid basis</router-link> |
    <router-link to="/trulia-cards">Trulia cards</router-link> |
    <router-link to="/openlisting-cards">Open Listing Cards</router-link> |
    <router-link to="/">Home</router-link> |
    <router-view/>

    <section class="grid-test">
      <div class="row">
        <div class="col-1-of-2">
          Col 1 of 2
        </div>
      </div>
      <div class="row">
        <div class="col-1-of-3">
          Col 1 of 3
        </div>
        <div class="col-1-of-3">
          Col 1 of 3
        </div>
        <div class="col-1-of-3">
          Col 1 of 3
        </div>
      </div>

      <div class="row">
        <div class="col-1-of-3">
          Col 1 of 3
        </div>
        <div class="col-2-of-3">
          Col 2 of 3
        </div>
      </div>

      <div class="row">
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
      </div>

      <div class="row">
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-2-of-4">
          Col 2 of 4
        </div>
      </div>

      <div class="row">
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-3-of-4">
          Col 3 of 4
        </div>
      </div>
    </section>

    <section class="css-grid-container">
      <div class="item item--header">Header</div>
      <div class="item item--small-box-1">Small box 1</div>
      <div class="item item--small-box-2">Small box 2</div>
      <div class="item item--small-box-3">Small box 3</div>
      <div class="item item--sidebar">Sidebar</div>
      <div class="item item--main-content">Main Content</div>
      <div class="item item--footer">Footer</div>
    </section>

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
