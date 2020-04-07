<template>
    <section class="srp-open-door">
      <div class="srp-open-door__left">
        <div class="srp-open-door__box">

        </div>
      </div>
      <div class="srp-open-door__right">
        <card-open-door
          v-for="(items, i) in cardsData"
          :listItems="cardsData[i]"
          >
        </card-open-door>
      </div>
    </section>
</template>

<script>
import CardOpenDoor from './CardOpenDoor.vue'
export default {
  name: 'SrpOpenDoor',
  data() {
    return {
      cardsData: [
        {
          price: '$219,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²'
        },
        {
          price: '$249,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²'
        },
        {
          price: '$289,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²'
        },
        {
          price: '$299,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²'
        },
        {
          price: '$219,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²'
        },
        {
          price: '$249,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²'
        },
        {
          price: '$289,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²'
        },
        {
          price: '$299,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²'
        }
      ]
    }
  },
  components: {
    'card-open-door' : CardOpenDoor
  }
};
</script>
