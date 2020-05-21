<template>
    <section class="cards-zillow">
      <h2>Title</h2>
      <h4>Subtitle element</h4>
      <section class="cards-zillow__grid">
        <div class="cards-zillow__grid__bg-card">
          <img class="cards-zillow__grid__bg-card__head" src="https://via.placeholder.com/860x240" alt="">
          <div class="cards-zillow__grid__bg-card__body">
            <h5>Text card</h5>
            <span>Subtitle card</span>
            <button>Text {{content}}</button>
          </div>
        </div>
        <div class="cards-zillow__grid__sm-card">
          <img class="cards-zillow__grid__sm-card__head" src="https://via.placeholder.com/300x200" alt="">
          <div class="cards-zillow__grid__sm-card__body">
            <h5>Text card</h5>
            <span>Subtitle card</span>
            <button>Text cta</button>
          </div>
        </div>
        <div class="cards-zillow__grid__sm-card">
          <img class="cards-zillow__grid__sm-card__head" src="https://via.placeholder.com/300x200" alt="">
          <div class="cards-zillow__grid__sm-card__body">
            <h5>Text card</h5>
            <span>Subtitle card</span>
            <button>Text cta</button>
          </div>
        </div>
        <div class="cards-zillow__grid__sm-card">
          <img class="cards-zillow__grid__sm-card__head" src="https://via.placeholder.com/300x200" alt="">
          <div class="cards-zillow__grid__sm-card__body">
            <h5>Text card</h5>
            <span>Subtitle card</span>
            <button>Text cta</button>
          </div>
        </div>
        <div class="cards-zillow__grid__sm-card">
          <img class="cards-zillow__grid__sm-card__head" src="https://via.placeholder.com/300x200" alt="">
          <div class="cards-zillow__grid__sm-card__body">
            <h5>Text card</h5>
            <span>Subtitle card</span>
            <button>Text cta</button>
          </div>
        </div>
      </section>
    </section>
</template>

<script>
export default {
  name: 'CardsZillow',
  data: function() {
    return {
      content: 'Contenido de prueba'
    }
  }
}
</script>
