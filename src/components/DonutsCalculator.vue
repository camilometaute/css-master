<template>
  <section class="donuts-calculator">
    <div class="donuts-calculator__card">
      <h3>Get a plan special for you</h3>
      <div class="donuts-calculator__card__people">
        <span>Number of people</span>
        <div class="donuts-calculator__card__people__increase">
          <button @click="people--">-</button>
          <p>{{people}}</p>
          <button @click="people++">+</button>
        </div>
      </div>
      <div class="donuts-calculator__card--two-columns">
        <div class="donuts-calculator__card__price-item">
          <p>Donuts</p>
          <h4>105 <span>pcs</span> </h4>
        </div>
        <div class="donuts-calculator__card__price-item">
          <p>Coffee</p>
          <h4>14 <span>kg</span> </h4>
        </div>
      </div>
      <div class="donuts-calculator__card__price-item">
        <p>Price</p>
        <h4>$ 200,00 <span>/per month</span> </h4>
      </div>
      <span class="message-suggest">*For this amount of people we suggest to buy 5 donuts more, beacuse in the big crowd there is always the sweet thooth :)</span>
      <div class="donuts-calculator__card__gluten-check">
        <input type="checkbox" name="gluten-tolerance" id="gluten-tolerance" value="">
        <label for="gluten-tolerance">We have gluten intolerant people</label>
      </div>
      <button class="donuts-calculator__card__btn">Get this plan</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DonutsCalculator',
  data: function() {
    return {
      people: 100
    }
  }
};
</script>
