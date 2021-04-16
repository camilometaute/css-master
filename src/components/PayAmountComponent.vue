<template>
  <section class="pay-amount-component">
    <div class="pay-amount-component__container">
      <div class="head">
        <h3>Pay amount</h3>
        <label for="">$35</label>
      </div>

      <div class="forms">
        <div class="input-container input-container__fullwidth">
          <label for="number-card">Card number</label>
          <input type="number" name="number-card" placeholder="number card" value="8882 2328 28282">
        </div>

        <div class="input-container input-container__half">
          <label for="date-input">Expiry</label>
          <input type="date" name="date-input" placeholder="number card" value="8882 2328 28282">
        </div>

        <div class="input-container input-container__half">
          <label for="number-ccv">CCV</label>
          <input type="number" name="number-ccv" placeholder="number card" value="8882 2328 28282">
        </div>
      </div>

      <div class="actions">
        <button class="cancel-btn">Cancel</button>
        <button class="pay-btn"><font-awesome-icon icon="lock" />Pay $35</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PayAmountComponent'
};
</script>
