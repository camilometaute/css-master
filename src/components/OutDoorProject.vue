<template>
  <div>
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" name="" value="">
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="#" class="navigation__link"><span>01</span>About Natous</a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link"><span>02</span>Your benefits</a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link"><span>03</span>Popular tours</a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link"><span>04</span>Stories</a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link"><span>05</span>Book now</a>
          </li>
        </ul>
      </nav>
    </div>
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
        <div class="u-center-text u-margin-bottom-big">
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

      <section class="section-tours">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary u-margin-bottom-medium">
            Mos popular tours
          </h2>
        </div>
        <div class="row">
          <div class="col-1-of-3">
            <div class="card-outdoor">
              <div class="card-outdoor__side card-outdoor__side--front">
                <div class="card__picture card__picture--1">
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--1">Landscape orange</span>
                </h4>
                <div class="card__details">
                  <ul>
                    <li>3 day tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Another</li>
                  </ul>
                </div>
              </div>
              <div class="card-outdoor__side card-outdoor__side--back card-outdoor__side--back-1">
                <div class="card-outdoor__cta">
                  <div class="card-outdoor__price-box">
                    <p class="card-outdoor__price-only">Only</p>
                    <p class="card-outdoor__price-value">$298</p>
                  </div>
                  <a href="#" class="btn btn--white">Book Now</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-1-of-3">
            <div class="card-outdoor">
              <div class="card-outdoor__side card-outdoor__side--front">
                <div class="card__picture card__picture--2">
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--2">Landscape green</span>
                </h4>
                <div class="card__details">
                  <ul>
                    <li>3 day tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Another</li>
                  </ul>
                </div>
              </div>
              <div class="card-outdoor__side card-outdoor__side--back card-outdoor__side--back-2">
                <div class="card-outdoor__cta">
                  <div class="card-outdoor__price-box">
                    <p class="card-outdoor__price-only">Only</p>
                    <p class="card-outdoor__price-value">$143</p>
                  </div>
                  <a href="#" class="btn btn--white">Book Now</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-1-of-3">
            <div class="card-outdoor">
              <div class="card-outdoor__side card-outdoor__side--front">
                <div class="card__picture card__picture--3">
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--3">Landscape purple</span>
                </h4>
                <div class="card__details">
                  <ul>
                    <li>3 day tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Another</li>
                  </ul>
                </div>
              </div>
              <div class="card-outdoor__side card-outdoor__side--back card-outdoor__side--back-3">
                <div class="card-outdoor__cta">
                  <div class="card-outdoor__price-box">
                    <p class="card-outdoor__price-only">Only</p>
                    <p class="card-outdoor__price-value">$800</p>
                  </div>
                  <a href="#" class="btn btn--white">Book Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="u-center-text u-margin-top-big">
          <a href="#" class="btn btn--green">Discover all tours</a>
        </div>
      </section>

      <section class="section-stories">
        <div class="bg-video">
          <video class="bg-video__content" autoplay muted loop>
            <source src="https://storage.coverr.co/videos/coverr-the-islands-1561045392058?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTc5OTY3Nzc3fQ.O1oaglT978eAkP3xP1b3UitpF0pyOLgEDMwnLkwlOUQ" type="video/mp4">
              Bad browser, try with chrome friend :)
          </video>
        </div>
        <div class="u-center-text u-margin-bottom-medium">
          <h2 class="heading-secondary u-margin-bottom-medium">
            Existing tour for aventour people
          </h2>
        </div>
        <div class="row">
          <div class="story">
            <figure class="story__shape">
              <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="">
              <figcaption class="story__caption">Mary Smith</figcaption>
            </figure>
            <div class="story__text">
              <h3>This is a great text</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="story">
            <figure class="story__shape">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="">
              <figcaption class="story__caption">Jorge Ateortua</figcaption>
            </figure>
            <div class="story__text">
              <h3>This is another text</h3>
              <p>Yeah boy, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
          </div>
        </div>

      </section>

      <section class="section-book">
        <div class="row">
          <div class="book">
            <div class="book__form">
              <form action="#" class="form">
                <div class="u-margin-bottom-medium">
                  <h2 class="heading-secondary u-margin-bottom-medium">
                    Start booking now
                  </h2>
                </div>
                <div class="form__group">
                  <input autocomplete="off" type="text" class="form__input" placeholder="Full Name" required id="name">
                  <label for="name" class="form__label">Full Name</label>
                </div>

                <div class="form__group">
                  <input autocomplete="off" type="email" class="form__input" placeholder="Email" required id="email">
                  <label for="email" class="form__label">Email</label>
                </div>

                <div class="form__group">
                  <div class="form__radio-group">
                    <input type="radio" class="form__radio-input" id="small" name="size">
                    <label class="form__radio-label" for="small">
                      <span class="form__radio-button"></span>
                      Small tour group
                    </label>
                  </div>

                  <div class="form__radio-group u-margin-bottom-medium">
                    <input type="radio" class="form__radio-input" id="large" name="size">
                    <label class="form__radio-label" for="large">
                      <span class="form__radio-button"></span>
                      Small tour group
                    </label>
                  </div>

                  <div>
                    <button class="btn btn--green">Next Step &rarr;</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer-outdoor">
      <div class="footer-outdoor__logo-box">
        <img class="footer-outdoor__logo" src="https://upload.wikimedia.org/wikipedia/commons/6/66/Android_robot.png" alt="">
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <div class="footer-outdoor__navigation">
            <ul class="footer-outdoor__list">
              <li class="footer-outdoor__item">
                <a href="#" class="footer-outdoor__link">Company</a>
              </li>
              <li class="footer-outdoor__item">
                <a href="#" class="footer-outdoor__link">Contact us</a>
              </li>
              <li class="footer-outdoor__item">
                <a href="#" class="footer-outdoor__link">Carrers</a>
              </li>
              <li class="footer-outdoor__item">
                <a href="#" class="footer-outdoor__link">Privacy</a>
              </li>
              <li class="footer-outdoor__item">
                <a href="#" class="footer-outdoor__link">Terms</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-1-of-2">
          <p class="footer-outdoor__copyright">
            Build my <a href="#">Jonas </a> For this online course <a href="#">Advanced CSS and Sass</a>. Copyright &copy; by milometaute
          </p>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  name: 'OutDoorProject'
};
</script>
