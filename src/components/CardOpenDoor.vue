<template>
    <section class="card-open-door">
      <div
        class="card-open-door__img"
        :style="{ backgroundImage: 'linear-gradient(0deg, rgba(20,20,20,0.9) 10%, rgba(255,255,255,0.1) 95%), url(' +listItems.imgUrl+ ')' }"
        >
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
          feat: '3 bed 2 bath · 1,408 ft²',
          imgUrl: 'https://opendoor.imgix.net/https%3A%2F%2Flisting-photos-production.s3.amazonaws.com%2Fuploads%2Fphotography_request-44656%2F20093569-Xlv4lQzVFwc.jpg?ixlib=rb-1.1.0&w=760&h=480&auto=compress&fit=crop&s=c2dd2037766fd5dffbba95f96c62a03d'
        }
      }
    }
  }
}
</script>
