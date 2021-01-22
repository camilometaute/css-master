<template>
  <section class="landing-user-interface">
    <div class="line-1"></div>
    <div class="line-2"></div>
    <div class="line-3"></div>
    <div class="line-4"></div>
    <div class="line-5"></div>
    <div class="line-6"></div>
    <div class="line-7"></div>
    <img class="logo" src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRleHR1cmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="">
    <a class="menu-1" href="#">Explore</a>
    <a class="menu-2" href="#">Mentors</a>
    <a class="menu-3" href="#">Blog</a>
    <a class="menu-4" href="#">Community</a>
    <div class="main-head">
      <span>{{smallTitle}}</span>
      <h1>{{titlePanel}}</h1>
    </div>
    <button class="main-cta"><font-awesome-icon icon="arrow-right" />Join the Class</button>
    <img class="lg-img" src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="">
    <div class="about">
      <h4>About</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="md-img">
      <img src="https://ep1.pinkbike.org/p2pb19964208/p2pb19964208.jpg" alt="">
      <div class="md-img--box">

      </div>
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
  data: function () {
    return {
      titlePanel: 'The role of User Interface Designer',
      smallTitle: 'Feature Class',
    };
  },
};
</script>
