<template>
  <section class="dashboard-grid">
    <div class="dashboard-grid__row">
      <div class="card dashboard-grid__row__four-column">
        <h4>One column</h4>
      </div>

      <div class="card dashboard-grid__row__four-column">
        <h4>One column</h4>
      </div>

      <div class="card dashboard-grid__row__four-column">
        <h4>One column</h4>
      </div>

      <div class="card dashboard-grid__row__four-column">
        <h4>One column</h4>
      </div>
    </div>

    <div class="dashboard-grid__row">
      <div class="card dashboard-grid__row__three-column">
        <h4>Three column</h4>
      </div>

      <div class="card dashboard-grid__row__one-column">
        <h4>One column</h4>
      </div>
    </div>

    <div class="dashboard-grid__row">
      <div class="card dashboard-grid__row__half">
        <h4>Two column</h4>
      </div>
      <div class="card dashboard-grid__row__half">
        <h4>Two column</h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DashboardGrid',
  data:function() {
    return {

    }
  }
};
</script>
