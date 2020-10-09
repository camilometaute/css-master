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
      <ul>
        <li>
          <input type="checkbox" name="" value="">
          <img src="https://designreset.com/cork/ltr/demo3/assets/img/profile-16.jpeg" alt="">
          <span>Lauren</span>
          <div class="">
            <div class="">
              <font-awesome-icon icon="clock" class="overview__icon-star" />
              <span>promotion page</span>
            </div>
            <div class="label--important">
              Important
            </div>
            <div class="label--important">
              Confirmation
            </div>
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
