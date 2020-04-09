<template>
    <section class="srp-open-door">
      <div class="srp-open-door__head">

      </div>
      <div class="srp-open-door__body">
        <div class="srp-open-door__left">
          <div class="srp-open-door__box">
            <span>Map here</span>
          </div>
        </div>
        <div class="srp-open-door__right">
          <div class="srp-open-door__right__head">
            <h4>House for sale in austin</h4>
            <span>For sale</span>
          </div>
          <card-open-door
            v-for="(items, i) in cardsData"
            :listItems="cardsData[i]"
            >
          </card-open-door>
        </div>
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
          feat: '3 bed 2 bath · 1,408 ft²',
          imgUrl: 'https://bit.ly/2VcxvSm'
        },
        {
          price: '$249,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²',
          imgUrl: 'https://bit.ly/34nszOR'
        },
        {
          price: '$289,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²',
          imgUrl: 'https://bit.ly/3eaxLtO'
        },
        {
          price: '$299,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²',
          imgUrl: 'https://bit.ly/2RGydqf'
        },
        {
          price: '$219,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²',
          imgUrl: 'https://bit.ly/34psfij'
        },
        {
          price: '$249,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²',
          imgUrl: 'https://bit.ly/3eaxLtO'
        },
        {
          price: '$289,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²',
          imgUrl: 'https://bit.ly/2RGydqf'
        },
        {
          price: '$299,000',
          priceM2: '$154',
          name: '1106 Henderson Dr. Leander',
          feat: '3 bed 2 bath · 1,408 ft²',
          imgUrl: 'https://bit.ly/2VcxvSm'
        }
      ]
    }
  },
  components: {
    'card-open-door' : CardOpenDoor
  }
};
</script>
