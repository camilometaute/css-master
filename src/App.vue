<template>
  <div id="app">
    <!-- <img class="logo-css" alt="Vue logo" src="http://alternafestival.es/wp-content/uploads/css-logo.png">
    <HelloWorld msg="Welcome to CSS Master Course"/> -->
    <header class="header u-margin-bottom-big">
      <div class="header__logo-box">
        <img src="../public/logo-white.png" alt="Logo" class="header__logo">
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

    <section class="grid-test">
      <div class="row">
        <div class="col-1-of-2">
          Col 1 of 2
        </div>
      </div>
      <div class="row">
        <div class="col-1-of-3">
          Col 1 of 3
        </div>
        <div class="col-1-of-3">
          Col 1 of 3
        </div>
        <div class="col-1-of-3">
          Col 1 of 3
        </div>
      </div>

      <div class="row">
        <div class="col-1-of-3">
          Col 1 of 3
        </div>
        <div class="col-2-of-3">
          Col 2 of 3
        </div>
      </div>

      <div class="row">
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
      </div>

      <div class="row">
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-2-of-4">
          Col 2 of 4
        </div>
      </div>

      <div class="row">
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-3-of-4">
          Col 3 of 4
        </div>
      </div>
    </section>

    <section class="css-grid-container">
      <div class="item item--header">Header</div>
      <div class="item item--small-box-1">Small box 1</div>
      <div class="item item--small-box-2">Small box 2</div>
      <div class="item item--small-box-3">Small box 3</div>
      <div class="item item--sidebar">Sidebar</div>
      <div class="item item--main-content">Main Content</div>
      <div class="item item--footer">Footer</div>
    </section>

    <section class="trulia-grid-container">
      <div class="item-trl item-trl--ngbh-picture">Downtown</div>
      <div class="item-trl item-trl--ngbh-title">Neighborhood Overview</div>
      <div class="item-trl item-trl--ngbh-item-1">
        <div class="ngbh-items">
          <i ><font-awesome-icon icon="map-signs" /></i> Buy: <p>$99k - $950k </p>
        </div>
      </div>
      <div class="item-trl item-trl--ngbh-item-2">
        <div class="ngbh-items">
          <i ><font-awesome-icon icon="map-signs" /></i> For sale on trulia <p>72 homes > </p>
        </div>
      </div>
      <div class="item-trl item-trl--ngbh-item-3">
        <div class="ngbh-items">
          <i ><font-awesome-icon icon="map-signs" /></i> Rent <p> $1.25 - $14.6k </p>
        </div>
      </div>
      <div class="item-trl item-trl--ngbh-item-4">
        <div class="ngbh-items">
          <i ><font-awesome-icon icon="map-signs" /></i> For Rent on trulia <p> 31 homes </p>
        </div>
      </div>
      <div class="item-trl item-trl--ngbh-item-5">
        <div class="ngbh-items">
          <i ><font-awesome-icon icon="map-signs" /></i> No commute data
        </div>
      </div>
      <div class="item-trl item-trl--ngbh-item-6">
        <div class="ngbh-items">
          <i ><font-awesome-icon icon="map-signs" /></i> 13 Schools <p> Rated 1/10 - 8/10 </p>
        </div>
      </div>
      <div class="item-trl item-trl--ngbh-map item-img">
        <div class="img"></div>
        <p>Map</p>
      </div>
      <div class="item-trl item-trl--ngbh-all-photos item-img">
        <div class="img"></div>
        <p>All photos</p>
      </div>
      <div class="item-trl item-trl--ngbh-outdoors item-img">
        <div class="img"></div>
        <p>Outdoors</p>
      </div>
      <div class="item-trl item-trl--ngbh-main-streets item-img">
        <div class="img"></div>
        <p>Main Streets</p>
      </div>
      <div class="item-trl item-trl--ngbh-side-streets item-img">
        <div class="img"></div>
        <p>Side Streets</p>
      </div>
      <div class="item-trl item-trl--ngbh-more item-img">
        <div class="img"></div>
        <p>More</p>
      </div>
    </section>

    <section class="container-opl-cards">
      <div class="opl-cards">
        <img class="card card--img" src="https://s3st1.openlistings.com/images/properties/v2/5da8db9c71a60942a676a7f4/640/396/5da8e4b480d4b15d736e6bdd.jpg" alt="">
        <p class="card card--title">10439 La Sombra Ave <span class="card--title--price">$860,000</span> </p>
        <p class="card card--location">Fountain Valley, CA 92708</p>
        <span class="card card--amenities">3bd - 2ba - 1,518sf - $567/sf - 2 days ago</span>
        <button class="card card--btn card--btn-hide" type="button" name="button"><font-awesome-icon icon="heart" /> Hide</button>
        <button class="card card--btn card--btn-fav" type="button" name="button"><font-awesome-icon icon="heart" /> Fav</button>
      </div>

      <div class="opl-cards">
        <img class="card card--img" src="https://s3st1.openlistings.com/images/properties/v2/5da8db9c71a60942a676a7f4/640/396/5da8e4b480d4b15d736e6bdd.jpg" alt="">
        <p class="card card--title">10439 La Sombra Ave <span class="card--title--price">$860,000</span> </p>
        <p class="card card--location">Fountain Valley, CA 92708</p>
        <span class="card card--amenities">3bd - 2ba - 1,518sf - $567/sf - 2 days ago</span>
        <button class="card card--btn card--btn-hide" type="button" name="button"><font-awesome-icon icon="heart" /> Hide</button>
        <button class="card card--btn card--btn-fav" type="button" name="button"><font-awesome-icon icon="heart" /> Fav</button>
      </div>

      <div class="opl-cards">
        <img class="card card--img" src="https://s3st1.openlistings.com/images/properties/v2/5da8db9c71a60942a676a7f4/640/396/5da8e4b480d4b15d736e6bdd.jpg" alt="">
        <p class="card card--title">10439 La Sombra Ave <span class="card--title--price">$860,000</span> </p>
        <p class="card card--location">Fountain Valley, CA 92708</p>
        <span class="card card--amenities">3bd - 2ba - 1,518sf - $567/sf - 2 days ago</span>
        <button class="card card--btn card--btn-hide" type="button" name="button"><font-awesome-icon icon="heart" /> Hide</button>
        <button class="card card--btn card--btn-fav" type="button" name="button"><font-awesome-icon icon="heart" /> Fav</button>
      </div>

      <div class="opl-cards">
        <img class="card card--img" src="https://s3st1.openlistings.com/images/properties/v2/5da8db9c71a60942a676a7f4/640/396/5da8e4b480d4b15d736e6bdd.jpg" alt="">
        <p class="card card--title">10439 La Sombra Ave <span class="card--title--price">$860,000</span> </p>
        <p class="card card--location">Fountain Valley, CA 92708</p>
        <span class="card card--amenities">3bd - 2ba - 1,518sf - $567/sf - 2 days ago</span>
        <button class="card card--btn card--btn-hide" type="button" name="button"><font-awesome-icon icon="heart" /> Hide</button>
        <button class="card card--btn card--btn-fav" type="button" name="button"><font-awesome-icon icon="heart" /> Fav</button>
      </div>

      <div class="opl-cards">
        <img class="card card--img" src="https://s3st1.openlistings.com/images/properties/v2/5da8db9c71a60942a676a7f4/640/396/5da8e4b480d4b15d736e6bdd.jpg" alt="">
        <p class="card card--title">10439 La Sombra Ave <span class="card--title--price">$860,000</span> </p>
        <p class="card card--location">Fountain Valley, CA 92708</p>
        <span class="card card--amenities">3bd - 2ba - 1,518sf - $567/sf - 2 days ago</span>
        <button class="card card--btn card--btn-hide" type="button" name="button"><font-awesome-icon icon="heart" /> Hide</button>
        <button class="card card--btn card--btn-fav" type="button" name="button"><font-awesome-icon icon="heart" /> Fav</button>
      </div>

      <div class="opl-cards">
        <img class="card card--img" src="https://s3st1.openlistings.com/images/properties/v2/5da8db9c71a60942a676a7f4/640/396/5da8e4b480d4b15d736e6bdd.jpg" alt="">
        <p class="card card--title">10439 La Sombra Ave <span class="card--title--price">$860,000</span> </p>
        <p class="card card--location">Fountain Valley, CA 92708</p>
        <span class="card card--amenities">3bd - 2ba - 1,518sf - $567/sf - 2 days ago</span>
        <button class="card card--btn card--btn-hide" type="button" name="button"><font-awesome-icon icon="heart" /> Hide</button>
        <button class="card card--btn card--btn-fav" type="button" name="button"><font-awesome-icon icon="heart" /> Fav</button>
      </div>
    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
};
</script>

<style>
</style>
