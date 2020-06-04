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

          <div class="content-pdp-qnta__btn-container">
            <button class="btn--fill-primary">
              <font-awesome-icon icon="image"/> Fotos
            </button>
            <button class="btn--outline-primary">
              <font-awesome-icon icon="map"/>Mapa
            </button>
          </div>

          <div class="content-pdp-qnta__main-content">
            <h4>Apartamento en venta 98m2, 3 cuartos y 2 baños</h4>
            <p>Rua Doutor Augusto de Miranda, Vila Pompéia, São Paulo</p>
            <span>
              <font-awesome-icon icon="clock"/> Publicado há 7 horas
            </span>
          </div>
        </div>
        <div class="content-pdp-qnta__body__right">
          <div class="content-pdp-qnta__body__right__sticky-box">
            <h5>Valor de inmueble</h5>
            <h3>$ 850.000</h3>
            <span>Financiamiento a partir de $.5.163 <i>$</i> </span>
            <ul class="list-container">
              <li class="list-container__item">
                <span>Condominio</span>
                <span>$ 900</span>
              </li>
              <li class="list-container__item">
                <span>Condominio</span>
                <span>$ 900</span>
              </li>
            </ul>

            <div class="whatsapp-contact">
              <font-awesome-icon icon="image"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <button class="qntr-btn-fw qntr-btn-fw__fill">Falar com corretor</button>
            <button class="qntr-btn-fw qntr-btn-fw__outline">Fazer proposta</button>

            <div class="half-btn-container">
              <button class="qntr-btn-half">Falar com corretor</button>
              <button class="qntr-btn-half">Fazer proposta</button>
            </div>
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
        { src:"http://via.placeholder.com/600x500"},
        { src:"http://via.placeholder.com/600x500"},
        { src:"http://via.placeholder.com/600x500"}
      ]
    }
  }
}
</script>
