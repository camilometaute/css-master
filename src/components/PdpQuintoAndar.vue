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

          <div class="content-pdp-qnta__features-main">
            <div class="feat-item">
              <font-awesome-icon icon="clock"/>
              <p>2 quartos</p>
            </div>
            <div class="feat-item">
              <font-awesome-icon icon="clock"/>
              <p>92 m2</p>
            </div>
            <div class="feat-item">
              <font-awesome-icon icon="clock"/>
              <p>próximo metro</p>
            </div>
            <div class="feat-item">
              <font-awesome-icon icon="clock"/>
              <p>sem vaga</p>
            </div>
          </div>

          <div class="content-pdp-qnta__features">
            <div class="feat-item">
              <font-awesome-icon icon="clock"/>
              <p>3 quartos</p>
            </div>
            <div class="feat-item">
              <font-awesome-icon icon="clock"/>
              <p>92 m2</p>
            </div>
            <div class="feat-item">
              <font-awesome-icon icon="clock"/>
              <p>próximo metro</p>
            </div>
            <div class="feat-item">
              <font-awesome-icon icon="clock"/>
              <p>sem vaga</p>
            </div>
            <div class="feat-item">
              <font-awesome-icon icon="clock"/>
              <p>sem vaga</p>
            </div>
            <div class="feat-item">
              <font-awesome-icon icon="clock"/>
              <p>sem vaga</p>
            </div>
          </div>

          <div class="content-pdp-qnta__available">
              <div class="xm-label">
                <font-awesome-icon icon="clock"/>
                <span>Inmovel disponível para aluguel</span>
              </div>
              <span>Valor do aluguel: R$ 3.030</span>
              <a href="#">Ver anuncio <font-awesome-icon icon="clock"/></a>
          </div>

          <div class="content-pdp-qnta__covid">
            <div class="content-pdp-qnta__covid__left">
              <p>Como prevenção à Covid-19, mudamos temporariamente o agendamento de visitas. Verifique com o corretor as condições de visita deste imóvel e conheça nossas recomendações.</p>
              <button>Ver recomendaciones</button>
            </div>
            <div class="content-pdp-qnta__covid__right">
              <img src="https://www.quintoandar.com.br/mobile_in_hand.9803e1400c0e4f33fd6fe346cac5d3ac.svg" alt="">
            </div>
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
