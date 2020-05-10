<template>
  <section class="karim-section">
    <div class="karim-section__left">
      <h2>Studio</h2>
      <button>Work with Karim</button>
    </div>
    <div class="karim-section__right">
      <img src="http://www.karimrashid.com/media/covers/fup2piel6.jpg" alt="">
    </div>
    <button class="karim-section__btn" @click="openNavMenu">Menu</button>
    <nav class="karim-section__nav" :class="{'active-nav' : menuIsActive}">
      <button @click="closeNavMenu" class="karim-section__nav__close">X</button>
      <ul>
        <li>Work</li>
        <li>Clients</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <input type="text" placeholder="Search" name="" value="">
      <div class="karim-section__nav__bottom-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">Youtube</a>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'KarimSection',
  data:function() {
    return {
      menuIsActive: false
    }
  },
  methods: {
    closeNavMenu() {
      this.menuIsActive = false;

    },
    openNavMenu() {
      this.menuIsActive = true;
    }
  }
};
</script>
