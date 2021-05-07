<template>
  <section class="course-flexbox">

    <!-- APPBAR -->
    <h1>App Bar</h1>
    <h3>Solution with FLEXBOX</h3>
    <div class="app-bar">
      <div class="app-bar__left">
        <font-awesome-icon icon="bars" />
        <h5>Page title</h5>
      </div>
      <div class="app-bar__right">
        <font-awesome-icon icon="heart" />
        <font-awesome-icon icon="search" />
        <font-awesome-icon icon="bookmark" />
      </div>
    </div>

    <h3>Solution with CSS grid</h3>
    <div class="app-bar-grid">
      <font-awesome-icon class="item-1" icon="bars" />
      <h5 class="item-2">Page title</h5>
      <font-awesome-icon class="item-3" icon="heart" />
      <font-awesome-icon class="item-4" icon="search" />
      <font-awesome-icon class="item-5" icon="bookmark" />
    </div>
    <!-- END APPBAR -->

    <!-- Navigation Rail -->
    <br><br><br>
    <h1>Navigation Rail</h1>
    <h3>Solution with FLEXBOX</h3>
    <nav class="nav-rail-flexbox">
      <ul>
        <li>
          <p>+</p>
        </li>
        <li>
          <font-awesome-icon icon="heart" />
        </li>
        <li>
          <font-awesome-icon icon="clock" />
        </li>
        <li>
          <font-awesome-icon icon="image" />
          <span>Images</span>
        </li>
      </ul>
    </nav>
    <h3>Solution with CSS grid</h3>
    <nav class="nav-rail-grid">
      <ul>
        <li>
          <p>+</p>
        </li>
        <li>
          <font-awesome-icon icon="heart" />
        </li>
        <li>
          <font-awesome-icon icon="clock" />
        </li>
        <li>
          <font-awesome-icon icon="image" />
          <span>Images</span>
        </li>
      </ul>
    </nav>
    <!-- END Navigation Rail -->

    <br><br><br>
    <h1>Card</h1>
    <h3>Solution with FLEXBOX</h3>
    <div class="card-flexbox">
      <div class="card-flexbox__head">
        <font-awesome-icon icon="heart" />
        <div class="head-text">
          <h4>Title goes here</h4>
          <p>Secondary Text</p>
        </div>
      </div>
      <div class="card-flexbox__body">
        <img src="https://via.placeholder.com/728x400.png" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div class="card-flexbox__footer">
        <div class="left">
          <button>Action 1</button>
          <button>Action 2</button>
        </div>
        <div class="right">
          <font-awesome-icon icon="heart" />
          <font-awesome-icon icon="share-alt" />
        </div>
      </div>
    </div>


    <h3>Solution with CSS Grid</h3>
    <div class="card-grid">
      <div class="card-grid__head">
        <font-awesome-icon icon="heart" />
        <div class="head-text">
          <h4>Title goes here</h4>
          <p>Secondary Text</p>
        </div>
      </div>
      <div class="card-grid__body">
        <img src="https://via.placeholder.com/728x400.png" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div class="card-grid__footer">
        <button>Action 1</button>
        <button>Action 2</button>
        <font-awesome-icon class="heart" icon="heart" />
        <font-awesome-icon class="share" icon="share-alt" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CourseFlexbox'
};
</script>
