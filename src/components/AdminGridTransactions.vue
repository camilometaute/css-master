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
      <ul class="timeline">
        <li class="timeline__list">
          <div class="timeline__list__left-side">
            <span class="timeline__list__left-side__dot timeline__list__left-side__dot--green"></span>
          </div>
          <div class="timeline__list__info">
            <p>Updated server logs</p>
          </div>
          <div class="timeline__list__time">
            <span>Just now</span>
          </div>
        </li>
        <li class="timeline__list">
          <div class="timeline__list__left-side">
            <span class="timeline__list__left-side__dot timeline__list__left-side__dot--red"></span>
          </div>
          <div class="timeline__list__info">
            <p>Send mail to HR and Admin</p>
          </div>
          <div class="timeline__list__time">
            <span>2 min ago</span>
          </div>
        </li>
        <li class="timeline__list">
          <div class="timeline__list__left-side">
            <span class="timeline__list__left-side__dot timeline__list__left-side__dot--orange"></span>
          </div>
          <div class="timeline__list__info">
            <p>Backup files EOD</p>
          </div>
          <div class="timeline__list__time">
            <span>14:00</span>
          </div>
        </li>
        <li class="timeline__list">
          <div class="timeline__list__left-side">
            <span class="timeline__list__left-side__dot timeline__list__left-side__dot--blue"></span>
          </div>
          <div class="timeline__list__info">
            <p>Collect documents from Camilo</p>
          </div>
          <div class="timeline__list__time">
            <span>15:00</span>
          </div>
        </li>
      </ul>
      <div class="content-action">
        <a href="#">View all <font-awesome-icon icon="chevron-down" class="" /></i></a>
      </div>
    </div>
    <div class="admin-grid-transactions__grid-30">
      <h4>Account info</h4>
      <div class="head-account-info">
        <h4>Balance</h4>
        <h5>$470</h5>
      </div>
      <ul class="body-account-info">
        <li>
          <span class="title-list">Monthly plan</span>
          <span class="result-list">$199.0</span>
        </li>
        <li>
          <span class="title-list">Taxes</span>
          <span class="result-list">$17.82</span>
        </li>
        <li>
          <span class="title-list">Extras this month</span>
          <span class="result-list">$-0.68</span>
        </li>
        <li>
          <span class="title-list title-list--secundary">Netflix yearly subscription</span>
          <span class="result-list result-list--secundary">$0</span>
        </li>
        <li>
          <span class="title-list title-list--secundary">Others</span>
          <span class="result-list result-list--secundary">$-0.68</span>
        </li>
      </ul>
      <div class="actions-account-info">
        <button class="actions-account-info__summary">Summary</button>
        <button class="actions-account-info__transfer">Transfer</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AdminGridTransactions'
};
</script>
