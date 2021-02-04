<template>
  <section class="top-product-sales">
    <div class="top-product-sales__head">
      <h3>Top Product</h3>
      <select class="" name="">
        <option value="">Week 1</option>
        <option value="">Week 2</option>
        <option value="">Week 3</option>
      </select>
    </div>
    <div class="top-product-sales__body">
      <ul>
        <li v-for="item in dataList">
          <div class="left-side">
            <img :src="item.urlImg" alt="">
            <div class="left-side__item-title">
              <h4>{{item.name}}</h4>
              <span>{{item.category}}</span>
            </div>
          </div>
          <div class="right-side">
            <span>Sales</span>
            <p>{{item.price}}
            <font-awesome-icon v-if="item.icon === 'arrow-up'" :icon="item.icon" class="green" />
            <font-awesome-icon v-if="item.icon === 'arrow-down'" :icon="item.icon" class="alert" />
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopProductSales',
  data: function() {
    return {
      dataList: [
        {
          urlImg: 'https://emilus.themenate.net/img/thumbs/thumb-7.jpg',
          name: 'Blue Jacket',
          category: 'Cloths',
          price: '$5,93',
          icon: 'arrow-up'
        },
        {
          urlImg: 'https://emilus.themenate.net/img/thumbs/thumb-14.jpg',
          name: 'Red HeadPhones',
          category: 'Devices',
          price: '$58,93',
          icon: 'arrow-down'
        },
        {
          urlImg: 'https://emilus.themenate.net/img/thumbs/thumb-11.jpg',
          name: 'Blue Backpack',
          category: 'Bags',
          price: '$28,93',
          icon: 'arrow-up'
        },
        {
          urlImg: 'https://emilus.themenate.net/img/thumbs/thumb-17.jpg',
          name: 'Apple watch',
          category: 'Devices',
          price: '$88,93',
          icon: 'arrow-down'
        },
      ]
    }
  }
};
</script>
