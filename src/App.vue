<template>
  <div id="app">
    <!-- <img class="logo-css" alt="Vue logo" src="http://alternafestival.es/wp-content/uploads/css-logo.png">
     -->
    <!-- <HelloWorld msg="Welcome to CSS Master Course"/> -->
    <div class="menu">

      <div class="menu__options">
        <span>Pages</span>
        <router-link to="/outdoor"><font-awesome-icon icon="mobile" />OutDoor Project</router-link>
        <router-link to="/flexbox-master"><font-awesome-icon icon="mobile" />Flex Box Master</router-link>
        <span>Practice</span>
        <router-link to="/"><font-awesome-icon icon="map" />Computed & Vuejs</router-link>
        <router-link to="/css-grid-basis"><font-awesome-icon icon="map" />CSS grid basis</router-link>
        <router-link to="/website-css-grid"><font-awesome-icon icon="map" />Web css grid</router-link>
        <router-link to="/scroll-handler-section"><font-awesome-icon icon="map" />Scroll Handler Section</router-link>
        <span>¿Can I do this?</span>
        <router-link to="/trulia-cards"><font-awesome-icon icon="bookmark" />Trulia cards</router-link>
        <router-link to="/openlisting-cards"><font-awesome-icon icon="bookmark" />Open Listing Cards</router-link>
        <router-link to="/grammarly-section"><font-awesome-icon icon="bookmark" />Grammarly Section</router-link>
        <router-link to="/opendoor-adviser"><font-awesome-icon icon="bookmark" />OpenDoor Adviser</router-link>
        <router-link to="/airbnb-cards"><font-awesome-icon icon="bookmark" />Airbnb Cards</router-link>
        <router-link to="/contact-opendoor"><font-awesome-icon icon="bookmark" />Contact OpenDoor</router-link>
        <router-link to="/airbnb-header-section"><font-awesome-icon icon="bookmark" />Airbnb Header</router-link>
        <router-link to="/opendoor-pic-section"><font-awesome-icon icon="bookmark" />Open Door Pic Section</router-link>
        <router-link to="/srp-open-door"><font-awesome-icon icon="bookmark" />SRP OpenDoor</router-link>
        <router-link to="/tabs-stripe"><font-awesome-icon icon="bookmark" />Tabs stripe</router-link>
        <router-link to="/grid-gallery-columns"><font-awesome-icon icon="bookmark" />Grid gallery columns</router-link>
        <router-link to="/airbnb-grid"><font-awesome-icon icon="bookmark" />Airbnb Grid</router-link>
        <router-link to="/compass-section"><font-awesome-icon icon="bookmark" />Compass Section</router-link>
        <router-link to="/quindoandar-client-section"><font-awesome-icon icon="bookmark" />Qto An client section</router-link>
        <router-link to="/karim-section"><font-awesome-icon icon="bookmark" />Karim Section</router-link>
        <router-link to="/stripe-carousel"><font-awesome-icon icon="bookmark" />Stripe carousel</router-link>
        <router-link to="/cards-zillow"><font-awesome-icon icon="bookmark" />Cards Zillow</router-link>
        <router-link to="/pdp-quintoandar"><font-awesome-icon icon="bookmark" />PDP quintoandar</router-link>
        <router-link to="/list-payment-history"><font-awesome-icon icon="bookmark" />List payment history</router-link>
        <router-link to="/casper-grid-section"><font-awesome-icon icon="bookmark" />Casper grid section</router-link>
        <router-link to="/card-signup"><font-awesome-icon icon="bookmark" />Card Sign Up</router-link>
        <router-link to="/donuts-calculator"><font-awesome-icon icon="bookmark" />Donuts calculator</router-link>
        <router-link to="/opendoor-comparative-box"><font-awesome-icon icon="bookmark" />Opendoor Comparative</router-link>
        <router-link to="/dashboard-grid"><font-awesome-icon icon="bookmark" />Dashboard grid</router-link>
        <router-link to="/stripe-grid"><font-awesome-icon icon="bookmark" />Stripe grid section</router-link>
        <router-link to="/stripe-customer-card"><font-awesome-icon icon="bookmark" />Stripe Customer card</router-link>
        <router-link to="/admin-layout"><font-awesome-icon icon="bookmark" />Admin layout</router-link>
        <router-link to="/card-ref-ui"><font-awesome-icon icon="bookmark" />Card Refactoring UI</router-link>
        <router-link to="/airbnb-gallery-grid"><font-awesome-icon icon="bookmark" />Airbnb Gallery grid</router-link>
        <router-link to="/admin-grid-transactions"><font-awesome-icon icon="bookmark" />Admin grid transactions</router-link>
        <router-link to="/guglieri-sticky"><font-awesome-icon icon="bookmark" />Guglieri sticky</router-link>
        <router-link to="/mail-inbox"><font-awesome-icon icon="bookmark" />Mail Inbox</router-link>
        <router-link to="/admin-panels"><font-awesome-icon icon="bookmark" />Admin Panels</router-link>
        <router-link to="/sealco-grid"><font-awesome-icon icon="bookmark" />Dinamic Grid Sealco</router-link>
        <router-link to="/accent-box-hover"><font-awesome-icon icon="bookmark" />Accent Box Hover</router-link>
        <router-link to="/accent-products-section"><font-awesome-icon icon="bookmark" />Accent products section</router-link>
        <router-link to="/navbar-3-ways"><font-awesome-icon icon="bookmark" />Navbar 3 ways</router-link>
        <router-link to="/tubik-company"><font-awesome-icon icon="bookmark" />Tubik company section</router-link>
        <router-link to="/landing-user-interface"><font-awesome-icon icon="bookmark" />Landing User Interface</router-link>
        <router-link to="/card-face"><font-awesome-icon icon="bookmark" />Card face</router-link>
        <router-link to="/cookies-components"><font-awesome-icon icon="bookmark" />Cookies components</router-link>
        <router-link to="/top-product-sales"><font-awesome-icon icon="bookmark" />Top product sales</router-link>
        <router-link to="/menu-gmail"><font-awesome-icon icon="bookmark" />Menu Gmail</router-link>
        <router-link to="/menu-dribbble"><font-awesome-icon icon="bookmark" />Menu Dribbble</router-link>
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
