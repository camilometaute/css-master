<template>
  <section class="mail-inbox">
    <div class="mail-inbox__menu">
      <button class="write-email">+</button>
      <ul>
        <li>
          <font-awesome-icon icon="image" />
          <span>Images</span>
          <div class="float-number"> 4 </div>
        </li>
        <li>
          <font-awesome-icon icon="star" />
          <span>Important</span>
        </li>
        <li>
          <font-awesome-icon icon="comments" />
          <span>Comments</span>
          <div class="float-number"> 2 </div>
        </li>
        <li>
          <font-awesome-icon icon="clock" />
          <span>Time</span>
        </li>
      </ul>
    </div>
    <div class="mail-inbox__list">
      <div class="head-tools">
        <div class="check-all-container">
          <label>
            <input type="checkbox">Check all
          </label>
        </div>
        <div class="list-actions">
          <button><font-awesome-icon icon="star" /></button>
          <button><font-awesome-icon icon="compass" /></button>
          <button><font-awesome-icon icon="bookmark" /></button>
          <button><font-awesome-icon icon="clock" /></button>
        </div>
      </div>
      <ul class="row-inbox">
        <li class="column-inbox">
          <input type="checkbox" name="" value="">
          <img src="https://designreset.com/cork/ltr/demo3/assets/img/profile-16.jpeg" alt="">
          <span class="column-inbox__name">Lauren</span>
          <div class="mail-content">
            <div class="mail-content__detail">
              <font-awesome-icon icon="clock" class="overview__icon-star" />
              <span class="promotion">promotion page</span>
              <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <div class="mail-content__label">
              <div class="label--important">
                Important
              </div>
              <div class="label--confirmation">
                Confirmation
              </div>
            </div>
          </div>
          <div class="dot-indicator">

          </div>
          <div class="hour">
            <span>2:00 PM</span>
          </div>
        </li>
        <li class="column-inbox">
          <input type="checkbox" name="" value="">
          <img src="https://designreset.com/cork/ltr/demo3/assets/img/profile-16.jpeg" alt="">
          <span class="column-inbox__name">Lauren</span>
          <div class="mail-content">
            <div class="mail-content__detail">
              <font-awesome-icon icon="clock" class="overview__icon-star" />
              <span class="promotion">promotion page</span>
              <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <div class="mail-content__label">
              <div class="label--important">
                Important
              </div>
              <div class="label--confirmation">
                Confirmation
              </div>
            </div>
          </div>
          <div class="dot-indicator">

          </div>
          <div class="hour">
            <span>2:00 PM</span>
          </div>
        </li>
      </ul>
    </div>
  </section>

</template>

<script>
export default {
  name: 'MailInbox'
};
</script>
