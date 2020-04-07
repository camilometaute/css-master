<template>
    <section class="card-open-door">
      <div class="card-open-door__img">
        <span>
          <strong>{{listItems.price}}</strong> {{listItems.priceM2}}
        </span>
      </div>
      <div class="card-open-door__body">
        <p>
          <strong>{{listItems.name}}</strong>
          <span>{{listItems.feat}}</span>
        </p>
      </div>
    </section>
</template>

<script>
export default {
  name: 'CardsOpenDoor',
  props: {
    listItems: {
      type: Object,
      default: function() {
        return {
          price: '$219,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²'
        }
      }
    }
  }
}
</script>
