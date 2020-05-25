<template>
    <section class="content-pdp-qnta">
      <div class="content-pdp-qnta__slider">
        <button class="content-pdp-qnta__slider__btn content-pdp-qnta__slider__btn--left"><font-awesome-icon icon="chevron-left"  /></button>
        <button class="content-pdp-qnta__slider__btn content-pdp-qnta__slider__btn--right"><font-awesome-icon icon="chevron-right"  /></button>
        <div class="content-pdp-qnta__slider__item" v-for="item in imgSlider">
          <img :src="item.src" alt="">
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'PdpQuintoAndar',
  data: function () {
    return {
      imgSlider: [
        { src:"http://via.placeholder.com/400x300"},
        { src:"http://via.placeholder.com/400x300"},
        { src:"http://via.placeholder.com/400x300"}
      ]
    }
  }
}
</script>
