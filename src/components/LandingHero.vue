<template>
  <section class="landing-hero">
    <div class="landing-hero--left">
      <span>Cutting-edge fitness solution</span>
      <h3>New way to track your progression</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button class="button">View more</button>
    </div>
    <div class="landing-hero--right">
      <img class="back-img" src="https://webon.qodeinteractive.com/wp-content/uploads/2020/09/h3-rev-img-2.png" alt="">
      <img class="front-img" src="https://webon.qodeinteractive.com/wp-content/uploads/2020/09/h3-rev-img-3.png" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingHero',
  data: function() {
    return {
      people: 100
    }
  }
};
</script>
