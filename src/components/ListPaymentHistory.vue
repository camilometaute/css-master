<template>
  <section class="list-payment-history">
    <h3>Payment History</h3>
    <div class="list-payment-history__list" v-for="item in dataCards">
      <img :src="item.urlImg" alt="">
      <div class="list-payment-history__list__name-status">
        <p>{{item.name}}</p>
        <span>{{item.status}}</span>
      </div>
      <div class="list-payment-history__list__price">
        <p>{{item.price}}</p>
        <span>{{item.divisa}} <strong>{{item.numberDivisa}}</strong> </span>
      </div>
      <font-awesome-icon icon="chevron-right" class="arrow"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ListPaymentHistory',
  data: function() {
    return {
      dataCards: [
        {
          urlImg: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b616b2c5b373a80ffc9636ba24f7a4a9',
          name: 'Gabriel Banks',
          status: 'Pending',
          price: '$ 62.00',
          divisa: 'Visa',
          numberDivisa: '5432'
        },

        {
          urlImg: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
          name: 'Jeorgina Apostol',
          status: 'Pending',
          price: '$ 62.00',
          divisa: 'Visa',
          numberDivisa: '5432'
        },

        {
          urlImg: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjE5MzY5M15BMl5BanBnXkFtZTgwMDI5ODMxODE@._V1_UY256_CR98,0,172,256_AL_.jpg',
          name: 'Lina Ang',
          status: 'Pending',
          price: '$ 62.00',
          divisa: 'Visa',
          numberDivisa: '5432'
        },

      ]
    }
  }
};
</script>
