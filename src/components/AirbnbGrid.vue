<template>
  <section class="airbnb-grid">
    <div class="airbnb-grid__container">
      <div class="airbnb-grid__item-bg">
        <img src="https://picsum.photos/200/500" alt="">
      </div>
      <div class="airbnb-grid__item-bg">
        <img src="https://picsum.photos/300/400" alt="">
      </div>
      <div class="airbnb-grid__item-sm">
        <img src="https://picsum.photos/200/400" alt="">
        <img src="https://picsum.photos/500/800" alt="">
      </div>
      <div class="airbnb-grid__item-bg">
        <img src="https://picsum.photos/500/900" alt="">
      </div>
    </div>
    <div class="airbnb-grid__info">
      <div class="airbnb-grid__info__left">
        <span class="airbnb-grid__label">Experiencia online</span>
        <h3 class="airbnb-grid__title">Yoga suave y clase de coaching de slow life</h3>
        <p class="airbnb-grid__location">Florencia, Italia</p>
        <span class="airbnb-grid__rate">4.95</span>
        <div class="airbnb-grid__sm-labels">
          <span>Meditación</span>
          <span>Clase</span>
          <span>Yoga</span>
        </div>
      </div>
      <div class="airbnb-grid__info__right">
        <div class="airbnb-grid__reserve">
          <i></i>
          <p>Reserva y únete a esta experiencia desde tu ordenador, teléfono o tableta.</p>
        </div>
        <ul class="airbnb-grid__specs">
          <li>
            <i>X</i>
            <span>Duración</span>
            <span>1.5 horas</span>
          </li>
          <li>
            <i>X</i>
            <span>Duración</span>
            <span>1.5 horas</span>
          </li>
          <li>
            <i>X</i>
            <span>Duración</span>
            <span>1.5 horas</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AirbnbGrid'
};
</script>
