<template>
  <section class="landing-user-interface">
    <div class="line-1"></div>
    <div class="line-2"></div>
    <div class="line-3"></div>
    <div class="line-4"></div>
    <div class="line-5"></div>
    <div class="line-6"></div>
    <div class="line-7"></div>
    <img class="logo" src="https://es.pinkbike.org/246/sprt/i/pbsponsoredevents/2/p3pb15026260.jpg" alt="">
    <a class="menu-1" href="#">Explore</a>
    <a class="menu-2" href="#">Mentors</a>
    <a class="menu-3" href="#">Blog</a>
    <a class="menu-4" href="#">Community</a>
    <div class="main-head">
      <span>smallTitle</span>
      <h1>{{titlePanel}}</h1>
    </div>
    <button class="main-cta"><font-awesome-icon icon="arrow-right" /></i>Join the Class</button>
    <img class="lg-img" src="https://ep1.pinkbike.org/p2pb19986805/p2pb19986805.jpg" alt="">
    <div class="about">
      <h4>About</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
    <div class="md-img">
      <img src="https://ep1.pinkbike.org/p2pb19964208/p2pb19964208.jpg" alt="">
    </div>
    <div class="lg-title">
      <h5>Karein William</h5>
      <span>Senior Designer</span>
    </div>
    <div class="sm-img">
      <img src="https://ep1.pinkbike.org/p2pb19964207/p2pb19964207.jpg" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingUserInterface',
  data: function() {
    return {
      titlePanel: "The role of User Interface Designer",
      smallTitle: "Feature Class"
    }
  }
};
</script>
