<template>
  <div id="app">
    <!-- <img class="logo-css" alt="Vue logo" src="http://alternafestival.es/wp-content/uploads/css-logo.png">
     -->
    <!-- <HelloWorld msg="Welcome to CSS Master Course"/> -->
    <div class="menu">

      <div class="menu__options">
        <router-link to="/outdoor">
          1. OutDoor Project
        </router-link>
        <router-link to="/flexbox-master">
          2. Flex Box Master
        </router-link>
        <router-link to="/">
          3. Computed & Vuejs
        </router-link>
        <router-link to="/css-grid-basis">
          4. CSS grid basis
        </router-link>
        <router-link to="/website-css-grid">
          5. Web css grid
        </router-link>
        <router-link to="/scroll-handler-section">
          6. Scroll Handler Section
        </router-link>
        <router-link to="/trulia-cards">
          7. Trulia cards
        </router-link>
        <router-link to="/openlisting-cards">
          8. Open Listing Cards
        </router-link>
        <router-link to="/grammarly-section">
          9. Grammarly Section
        </router-link>
        <router-link to="/opendoor-adviser">
          10. OpenDoor Adviser
        </router-link>
        <router-link to="/airbnb-cards">
          11. Airbnb Cards
        </router-link>
        <router-link to="/contact-opendoor">
          12. Contact OpenDoor
        </router-link>
        <router-link to="/airbnb-header-section">
          13. Airbnb Header
        </router-link>
        <router-link to="/opendoor-pic-section">
          14. Open Door Pic Section
        </router-link>
        <router-link to="/srp-open-door">
          16. SRP OpenDoor
        </router-link>
        <router-link to="/tabs-stripe">
          17. Tabs stripe
        </router-link>
        <router-link to="/grid-gallery-columns">
          18. Grid gallery columns
        </router-link>
        <router-link to="/airbnb-grid">
          19. Airbnb Grid
        </router-link>
        <router-link to="/compass-section">
          20. Compass Section
        </router-link>
        <router-link to="/quindoandar-client-section">
          21. Qto An client section
        </router-link>
        <router-link to="/karim-section">
          22. Karim Section
        </router-link>
        <router-link to="/stripe-carousel">
          23. Stripe carousel
        </router-link>
        <router-link to="/cards-zillow">
          24. Cards Zillow
        </router-link>
        <router-link to="/pdp-quintoandar">
          25. PDP quintoandar
        </router-link>
        <router-link to="/list-payment-history">
          26. List payment history
        </router-link>
        <router-link to="/casper-grid-section">
          27. Casper grid section
        </router-link>
        <router-link to="/card-signup">
          28. Card Sign Up
        </router-link>
        <router-link to="/donuts-calculator">
          29. Donuts calculator
        </router-link>
        <router-link to="/opendoor-comparative-box">
          30. Opendoor prices
        </router-link>
        <router-link to="/dashboard-grid">
          31. Dashboard grid
        </router-link>
        <router-link to="/stripe-grid">
          32.Stripe grid section
        </router-link>
        <router-link to="/stripe-customer-card">
          33.Stripe Customer card
        </router-link>
        <router-link to="/admin-layout">
          34.Admin layout
        </router-link>
        <router-link to="/card-ref-ui">
          35. Card Refactoring UI
        </router-link>
        <router-link to="/airbnb-gallery-grid">
          36. Airbnb Gallery grid
        </router-link>
        <router-link to="/admin-grid-transactions">
          37. Admin grid
        </router-link>
        <router-link to="/guglieri-sticky">
          38. Guglieri sticky
        </router-link>
        <router-link to="/mail-inbox">
          39. Mail Inbox
        </router-link>
        <router-link to="/admin-panels">
          40. Admin Panels
        </router-link>
        <router-link to="/sealco-grid">
          41. Dinamic Grid Sealco
        </router-link>
        <router-link to="/accent-box-hover">
          42. Accent Box Hover
        </router-link>
        <router-link to="/accent-products-section">
          43. Accent products
        </router-link>
        <router-link to="/navbar-3-ways">
          44. Navbar 3 ways
        </router-link>
        <router-link to="/tubik-company">
          45. Tubik company
        </router-link>
        <router-link to="/landing-user-interface">
          46. Landing User Interface
        </router-link>
        <router-link to="/card-profile">
          47. Card profile
        </router-link>
        <router-link to="/cookies-components">
          48. Cookies components
        </router-link>
        <router-link to="/top-product-sales">
          49. Top product sales
        </router-link>
        <router-link to="/menu-gmail">
          50. Menu Gmail
        </router-link>
        <router-link to="/menu-dribbble">
          51.Menu Dribbble
        </router-link>
        <router-link to="/grid-collections">
          52.Grid Collections
        </router-link>
        <router-link to="/group-avatar">
          53. Group Avatar
        </router-link>
        <router-link to="/grid-agency">
          54. Grid Agency
        </router-link>
        <router-link to="/landing-hero">
          55. Landing Hero
        </router-link>
        <router-link to="/landing-coffee">
          56. Landing Coffee
        </router-link>
        <router-link to="/landing-procreate">
          57. Landing Procreate
        </router-link>
        <router-link to="/svg-grid">
          58. Svg Grid
        </router-link>
        <router-link to="/ecommerce-card">
          59. Ecommerce Card
        </router-link>
        <router-link to="/pay-amount-component">
          60. Pay Amount Component
        </router-link>
        <router-link to="/debid-card">
          61. Debid Card
        </router-link>
        <router-link to="/card-minimal-subscribe">
          62. Card Subscribe
        </router-link>
        <router-link to="/course-flexbox">
          63. Course css-grid
        </router-link>
        <router-link to="/google-clone">
          64. Google Clone
        </router-link>
        <router-link to="/warren">
          65. Warren
        </router-link>
        <router-link to="/card-google">
          66. Card google
        </router-link>
        <router-link to="/twitter-followers">
          67. Twitter followers
        </router-link>
        <router-link to="/cards-flat-file">
          68. CardsFlatFile
        </router-link>
        <router-link to="/zenefits-customers-section">
          69. Zenefits Customer Section
        </router-link>
        <router-link to="/speedy-section">
          70. Speedy Section
        </router-link>
        <router-link to="/speedy-dark-section">
          71. Speedy Dark Section
        </router-link>
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
