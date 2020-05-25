<template>
    <div class="content-pdp-qnta">
      <section class="content-pdp-qnta__slider">
        <button class="content-pdp-qnta__slider__btn content-pdp-qnta__slider__btn--left"><font-awesome-icon icon="chevron-left"  /></button>
        <button class="content-pdp-qnta__slider__btn content-pdp-qnta__slider__btn--right"><font-awesome-icon icon="chevron-right"  /></button>
        <div class="content-pdp-qnta__slider__item" v-for="item in imgSlider">
          <img :src="item.src" alt="">
        </div>
      </section>
      <section class="content-pdp-qnta__body">
        <div class="content-pdp-qnta__body__left">
          <div class="breadcrumb">
            <ul>
              <li>Inicio</li>
              <li>Sao Paulo</li>
              <li>Aclimacao</li>
            </ul>
          </div>
        </div>
        <div class="content-pdp-qnta__body__right">
          <div class="content-pdp-qnta__body__right__sticky-box">
            <h5>Imovel fresquino</h5>
          </div>
        </div>
      </section>
    </div>
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
