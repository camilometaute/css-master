<template>
    <section class="compass-section">
      <div class="compass-section__left">
        <img v-bind:src="imgElement" alt="">
      </div>
      <div class="compass-section__right">
        <div class="compass-section__right__container">
          <h3>{{title}}</h3>
          <p>{{paragraph}}</p>
          <button @click="consoleMethod" type="button" name="button">Learn More <span>&#x279E;</span> </button>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'CompassSection',
  data: function() {
    return {
      title: 'Compass concierge',
      paragraph: 'Concierge helps you sell your home faster and for more money by covering the cost of home improvement services — no upfront fees or interest charged.',
      imgElement: 'https://www.compass.com/ucfe-assets/homepage/eks-2020-04-18-00-39-102cc68/assets/before_and_after_concierge.webp',

    }
  },
  methods: {
    consoleMethod(e) {
      alert('Hello pipe')
    }
  }
}
</script>
