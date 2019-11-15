<template>
  <div>
    <header class="header u-margin-bottom-big">
      <div class="header__logo-box">
        <img src="../../public/logo-white.png" alt="Logo" class="header__logo">
      </div>

      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">OUTDOOR</span>
          <span class="heading-primary--sub">is where life happens</span>
        </h1>
        <a href="#" class="btn btn--white">Discover our tours</a>
      </div>
    </header>

    <main>
      <section class="section-about">
        <div class="u-center-text u-margin-botton-big">
          <h2 class="heading-secondary u-margin-bottom-medium">
            Existing tour for aventour people
          </h2>
        </div>

        <div class="row">
          <div class="col-1-of-2">
            <h3 class="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h3 class="heading-tertiary u-margin-bottom-small">Live adventures like never have before</h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Another word here.
            </p>

            <a href="#" class="btn-text">Learn more &rarr;</a>
          </div>
          <div class="col-1-of-2">
            <div class="composition">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80" class="composition__photo composition__photo--p1" alt="Photo 1">
              <img src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" class="composition__photo composition__photo--p2" alt="Photo 2">
              <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80" class="composition__photo composition__photo--p3" alt="Photo 3">
            </div>
          </div>
        </div>
      </section>

      <section class="section-features">

        <div class="row">
          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon">
                <font-awesome-icon icon="user-secret" />
              </i>
              <h3 class="heading-tertiary">Explore the world</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon">
                <font-awesome-icon icon="compass" />
              </i>
              <h3 class="heading-tertiary">Meet nature</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon">
                <font-awesome-icon icon="map-signs" />
              </i>
              <h3 class="heading-tertiary">Find your way</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon">
                <font-awesome-icon icon="heart" />
              </i>
              <h3 class="heading-tertiary">Life</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>

</template>

<script>
export default {
  name: 'OutDoorProject'
};
</script>
