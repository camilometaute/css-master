<template>
  <div class="admin-grid-transactions">
    <div class="admin-grid-transactions__grid-40">
      <h4>Transactions</h4>
      <div class="row-items">

        <div class="column-item">
          <div class="column-item__info">
            <span class="column-item__info__icon">
              <font-awesome-icon icon="image" class="" /></i>
            </span>
            <div class="column-item__info__description">
              <p>Commencal</p>
              <span>4 Aug 1:00 PM</span>
            </div>
          </div>
          <span class="column-item__info__value column-item__info__value--positive">-$16.44 <font-awesome-icon icon="arrow-up" class="column-item__info__value--icon-negative" /></i></span>
        </div>

        <div class="column-item">
          <div class="column-item__info">
            <span class="column-item__info__icon">
              <font-awesome-icon icon="clock" class="" /></i>
            </span>
            <div class="column-item__info__description">
              <p>Specialized</p>
              <span>4 Aug 1:00 PM</span>
            </div>
          </div>
          <span class="column-item__info__value column-item__info__value--negative">-$11.44 <font-awesome-icon icon="arrow-down" class="column-item__info__value--icon-negative" /></i></span>
        </div>

        <div class="column-item">
          <div class="column-item__info">
            <span class="column-item__info__icon">
              <font-awesome-icon icon="mobile" class="" /></i>
            </span>
            <div class="column-item__info__description">
              <p>Cannondale</p>
              <span>4 Aug 1:00 PM</span>
            </div>
          </div>
          <span class="column-item__info__value">-$13.44 <font-awesome-icon icon="arrow-down" class="column-item__info__value--icon-negative" /></i></span>
        </div>

        <div class="column-item">
          <div class="column-item__info">
            <span class="column-item__info__icon">
              <font-awesome-icon icon="clock" class="" /></i>
            </span>
            <div class="column-item__info__description">
              <p>Giant</p>
              <span>4 Aug 1:00 PM</span>
            </div>
          </div>
          <span class="column-item__info__value column-item__info__value--negative">-$12.44 <font-awesome-icon icon="arrow-down" class="column-item__info__value__icon" /></i></span>
        </div>

      </div>
    </div>
    <div class="admin-grid-transactions__grid-30">
      <h4>Recent activities</h4>
    </div>
    <div class="admin-grid-transactions__grid-30">
      <h4>Account info</h4>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AdminGridTransactions'
};
</script>
