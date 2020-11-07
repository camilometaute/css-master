<template>
  <section class="admin-panels">
    <div class="admin-panels__columns panel-1">
      <div class="admin-panels__columns__user">
        <img src="https://designreset.com/cork/ltr/demo3/assets/img/profile-32.jpeg" alt="">
        <div class="admin-panels__columns__user__name">
          <h4>Jimmy Turner</h4>
          <span>Monday, Nov 18</span>
        </div>
      </div>
      <hr>
      <div class="admin-panels__columns__info">
        <p>"Duis aute irure dolor" in reprehenderit in voluptate velit esse cillum "dolore eu fugiat" nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <div class="admin-panels__columns__info__likes">
          <font-awesome-icon icon="clock" class="overview__icon-star" /></i>
          <span>551 Likes</span>
        </div>
      </div>
    </div>
    <div class="admin-panels__columns panel-2">
      <div class="panel-2__head">
        <h3>Pending Tasks</h3>
        <span>Nov, 2020</span>
      </div>
      <hr>
      <div class="panel-2__body">
        <div class="panel-2__body__container">
          <div class="circle">
            <span>2</span>
          </div>
          <p class="done">12 Done</p>
          <p class="priority"><span>3 task</span> with a hight priority</p>
        </div>
      </div>
    </div>
    <div class="admin-panels__columns panel-3">
      <div class="head-panel-3">
        <img class="panel-3__img" src="https://designreset.com/cork/ltr/demo3/assets/img/g-8.png" alt="">
        <div class="panel-3__head-title">
          <h3>Dev Summit - New York</h3>
          <p>Bronx, NY</p>
        </div>
      </div>
      <hr>
      <div class="panel-3__body">
        <h4>4 Members Going</h4>
        <div class="panel-3__body__grid-img">
          <img src="https://designreset.com/cork/ltr/demo3/assets/img/profile-19.jpeg" alt="">
          <img src="https://designreset.com/cork/ltr/demo3/assets/img/profile-6.jpeg" alt="">
          <img src="https://designreset.com/cork/ltr/demo3/assets/img/profile-8.jpeg" alt="">
          <img src="https://designreset.com/cork/ltr/demo3/assets/img/profile-3.jpeg" alt="">
        </div>
        <button type="button" name="button">View details</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdminPanels',
  data: function() {
    return {
      titlePanel: "Jimmy Turner"
    }
  }
};
</script>
