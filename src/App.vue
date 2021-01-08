<template>
  <div id="app">
    <!-- <img class="logo-css" alt="Vue logo" src="http://alternafestival.es/wp-content/uploads/css-logo.png">
     -->
    <!-- <HelloWorld msg="Welcome to CSS Master Course"/> -->
    <div class="menu">

      <div class="menu__options">
        <span>Pages</span>
        <router-link to="/outdoor"><font-awesome-icon icon="mobile" /></i>OutDoor Project</router-link>
        <router-link to="/flexbox-master"><font-awesome-icon icon="mobile" /></i>Flex Box Master</router-link>
        <span>Practice</span>
        <router-link to="/"><font-awesome-icon icon="map" /></i>Computed & Vuejs</router-link>
        <router-link to="/css-grid-basis"><font-awesome-icon icon="map" /></i>CSS grid basis</router-link>
        <router-link to="/website-css-grid"><font-awesome-icon icon="map" /></i>Web css grid</router-link>
        <router-link to="/scroll-handler-section"><font-awesome-icon icon="map" /></i>Scroll Handler Section</router-link>
        <span>¿Can I do this?</span>
        <router-link to="/trulia-cards"><font-awesome-icon icon="bookmark" /></i>Trulia cards</router-link>
        <router-link to="/openlisting-cards"><font-awesome-icon icon="bookmark" /></i>Open Listing Cards</router-link>
        <router-link to="/grammarly-section"><font-awesome-icon icon="bookmark" /></i>Grammarly Section</router-link>
        <router-link to="/opendoor-adviser"><font-awesome-icon icon="bookmark" /></i>OpenDoor Adviser</router-link>
        <router-link to="/airbnb-cards"><font-awesome-icon icon="bookmark" /></i>Airbnb Cards</router-link>
        <router-link to="/contact-opendoor"><font-awesome-icon icon="bookmark" /></i>Contact OpenDoor</router-link>
        <router-link to="/airbnb-header-section"><font-awesome-icon icon="bookmark" /></i>Airbnb Header</router-link>
        <router-link to="/opendoor-pic-section"><font-awesome-icon icon="bookmark" /></i>Open Door Pic Section</router-link>
        <router-link to="/srp-open-door"><font-awesome-icon icon="bookmark" /></i>SRP OpenDoor</router-link>
        <router-link to="/tabs-stripe"><font-awesome-icon icon="bookmark" /></i>Tabs stripe</router-link>
        <router-link to="/grid-gallery-columns"><font-awesome-icon icon="bookmark" /></i>Grid gallery columns</router-link>
        <router-link to="/airbnb-grid"><font-awesome-icon icon="bookmark" /></i>Airbnb Grid</router-link>
        <router-link to="/compass-section"><font-awesome-icon icon="bookmark" /></i>Compass Section</router-link>
        <router-link to="/quindoandar-client-section"><font-awesome-icon icon="bookmark" /></i>Qto An client section</router-link>
        <router-link to="/karim-section"><font-awesome-icon icon="bookmark" /></i>Karim Section</router-link>
        <router-link to="/stripe-carousel"><font-awesome-icon icon="bookmark" /></i>Stripe carousel</router-link>
        <router-link to="/cards-zillow"><font-awesome-icon icon="bookmark" /></i>Cards Zillow</router-link>
        <router-link to="/pdp-quintoandar"><font-awesome-icon icon="bookmark" /></i>PDP quintoandar</router-link>
        <router-link to="/list-payment-history"><font-awesome-icon icon="bookmark" /></i>List payment history</router-link>
        <router-link to="/casper-grid-section"><font-awesome-icon icon="bookmark" /></i>Casper grid section</router-link>
        <router-link to="/card-signup"><font-awesome-icon icon="bookmark" /></i>Card Sign Up</router-link>
        <router-link to="/donuts-calculator"><font-awesome-icon icon="bookmark" /></i>Donuts calculator</router-link>
        <router-link to="/opendoor-comparative-box"><font-awesome-icon icon="bookmark" /></i>Opendoor Comparative</router-link>
        <router-link to="/dashboard-grid"><font-awesome-icon icon="bookmark" /></i>Dashboard grid</router-link>
        <router-link to="/stripe-grid"><font-awesome-icon icon="bookmark" /></i>Stripe grid section</router-link>
        <router-link to="/stripe-customer-card"><font-awesome-icon icon="bookmark" /></i>Stripe Customer card</router-link>
        <router-link to="/admin-layout"><font-awesome-icon icon="bookmark" /></i>Admin layout</router-link>
        <router-link to="/card-ref-ui"><font-awesome-icon icon="bookmark" /></i>Card Refactoring UI</router-link>
        <router-link to="/airbnb-gallery-grid"><font-awesome-icon icon="bookmark" /></i>Airbnb Gallery grid</router-link>
        <router-link to="/admin-grid-transactions"><font-awesome-icon icon="bookmark" /></i>Admin grid transactions</router-link>
        <router-link to="/guglieri-sticky"><font-awesome-icon icon="bookmark" /></i>Guglieri sticky</router-link>
        <router-link to="/mail-inbox"><font-awesome-icon icon="bookmark" /></i>Mail Inbox</router-link>
        <router-link to="/admin-panels"><font-awesome-icon icon="bookmark" /></i>Admin Panels</router-link>
        <router-link to="/sealco-grid"><font-awesome-icon icon="bookmark" /></i>Dinamic Grid Sealco</router-link>
        <router-link to="/accent-box-hover"><font-awesome-icon icon="bookmark" /></i>Accent Box Hover</router-link>
        <router-link to="/accent-products-section"><font-awesome-icon icon="bookmark" /></i>Accent products section</router-link>
        <router-link to="/navbar-3-ways"><font-awesome-icon icon="bookmark" /></i>Navbar 3 ways</router-link>
        <router-link to="/tubik-company"><font-awesome-icon icon="bookmark" /></i>Tubik company section</router-link>
      </div>
    </div>
    <router-view/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  data: function(){
    return {
      isActive: false
    }
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
</style>
