<template>
  <section>
    <div class="cookies-components">
      <div class="cookie-light-xl">
        <font-awesome-icon icon="cookie-bite" class="overview__icon-star" />
        <p>We use thir-party
          <a href="#">cookies</a>
          in order to personalize your site expierience.
        </p>
        <div class="cookie-light-xl__btn-container">
          <button type="button" name="button" class="allow">Allow</button>
          <button type="button" name="button" class="decline">Decline</button>
        </div>
      </div>

      <div class="cookie-dark-xl">
        <font-awesome-icon icon="cookie-bite" class="overview__icon-star" />
        <p>We use thir-party
          <a href="#">cookies</a>
          in order to personalize your site expierience.
        </p>
        <div class="cookie-dark-xl__btn-container">
          <button type="button" name="button" class="allow">Allow</button>
          <button type="button" name="button" class="decline">Decline</button>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'CookiesComponents',
};
</script>
