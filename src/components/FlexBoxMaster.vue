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
            <font-awesome-icon icon="comments" class="nav-flx__icon-box__icon" /></i>
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
          <ul class="side-nav">
            <li class="side-nav__item side-nav__item--active">
              <a href="#" class="side-nav__link">
                <font-awesome-icon icon="comments" class="side-nav__icon" /></i>
                <span>Hotel</span>
              </a>
            </li>
            <li class="side-nav__item">
              <a href="#" class="side-nav__link">
                <font-awesome-icon icon="comments" class="side-nav__icon" /></i>
                <span>Hotel</span>
              </a>
            </li>
            <li class="side-nav__item">
              <a href="#" class="side-nav__link">
                <font-awesome-icon icon="comments" class="side-nav__icon" /></i>
                <span>Hotel</span>
              </a>
            </li>
          </ul>

          <div class="legal">
            &copy; 2019 by trillo. All rights reserved
          </div>
        </nav>

        <div class="main-content-flx">
          <div class="gallery">
            <figure class="gallery__item">
              <img src="https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="gallery__photo">
            </figure>
            <figure class="gallery__item">
              <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="gallery__photo">
            </figure>
            <figure class="gallery__item">
              <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="gallery__photo">
            </figure>
          </div>
          <div class="overview">
            <h1 class="overview__heading">Hotel Las Palmas</h1>
            <div class="overview__stars">
              <font-awesome-icon icon="star" class="overview__icon-star" /></i>
              <font-awesome-icon icon="star" class="overview__icon-star" /></i>
              <font-awesome-icon icon="star" class="overview__icon-star" /></i>
              <font-awesome-icon icon="star" class="overview__icon-star" /></i>
              <font-awesome-icon icon="star" class="overview__icon-star" /></i>
            </div>

            <div class="overview__location">
              <font-awesome-icon icon="map-marker-alt" class="overview__icon-location" /></i>
              <button class="btn-inline">Albufeira, Portugal</button>
            </div>

            <div class="overview__rating">
              <div class="overview__rating-average">8.6</div>
              <div class="overview__rating-count">429 votes</div>
            </div>
          </div>
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
