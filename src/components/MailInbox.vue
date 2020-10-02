<template>
  <section class="mail-inbox">
    <div class="mail-inbox__menu">
      <button>+</button>
      <ul>
        <li>
          <font-awesome-icon icon="clock" class="overview__icon-star" />
          <span>Option</span>
        </li>
        <li>
          <font-awesome-icon icon="clock" class="overview__icon-star" />
          <span>Option</span>
        </li>
        <li>
          <font-awesome-icon icon="clock" class="overview__icon-star" />
          <span>Option</span>
        </li>
        <li>
          <font-awesome-icon icon="clock" class="overview__icon-star" />
          <span>Option</span>
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
