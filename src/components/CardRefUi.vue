<template>
  <section class="container-ref-ui">
    <div class="container-ref-ui__card">
      <div class="container-ref-ui__card__left">
        <img src="https://images.unsplash.com/photo-1562113530-57ba467cea38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=944&q=80" alt="">
      </div>
      <div class="container-ref-ui__card__right">
        <div class="container-ref-ui__card__right__price">
          <h2>Beige wooden bar stool</h2>
          <span>$40</span>
        </div>
        <h4>Greater Toronto Area</h4>
        <p>Rustic, hand-crafted bar stool. Easy to move thanks to the hole in the seat.</p>
        <div class="container-ref-ui__card__right__actions">
          <button type="button" class="delete">Delete Listing</button>
          <div class="main-actions">
            <button type="button" class="edit">Edit</button>
            <button type="button" class="publish">Publish</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-ref-ui__card">
      <div class="container-ref-ui__card__left">
        <img src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" alt="">
      </div>
      <div class="container-ref-ui__card__right">
        <div class="container-ref-ui__card__right__price">
          <h2>Another wooden bar stool</h2>
          <span>$58</span>
        </div>
        <h4>Greater Toronto Area</h4>
        <p>Rustic, hand-crafted bar stool. Easy to move thanks to the hole in the seat.</p>
        <div class="container-ref-ui__card__right__actions">
          <button type="button" class="delete">Delete Listing</button>
          <div class="main-actions">
            <button type="button" class="edit">Edit</button>
            <button type="button" class="publish">Publish</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardRefUi',
  data: function() {
    return {

    }
  }
};
</script>
