<template>
  <div class="container-flx-project">
    <div class="main-container-flx">
      <header class="header-flx">
        <img class="logo-flx" src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral-light.svg" alt="">

        <form class="search-flx">
          <input class="search-flx__input" type="text" name="" value="" placeholder="Search hotels">
          <button class="search-flx__button">
            <font-awesome-icon icon="search" class="search-flx__icon" /></i>
          </button>
        </form>

        <nav class="nav-flx">
          <div class="nav-flx__icon-box">
            <font-awesome-icon icon="bookmark" class="nav-flx__icon-box__icon" /></i>
            <div class="nav-flx__icon-box__notification">7</div>
          </div>
          <div class="nav-flx__icon-box">
            <font-awesome-icon icon="comment" class="nav-flx__icon-box__icon" /></i>
            <div class="nav-flx__icon-box__notification">13</div>
          </div>
          <div class="nav-flx__user">
            <img src="https://avatars0.githubusercontent.com/u/40438861?s=460&v=4" class="nav-flx__user__photo" alt="">
            <span class="nav-flx__user__name">Camilo</span>
          </div>
        </nav>
      </header>
      <div class="content-flx">
        <nav class="sidebar-flx">
          navbar
        </nav>
        <div class="main-content-flx">
          main content
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FLexBoxMaster'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
