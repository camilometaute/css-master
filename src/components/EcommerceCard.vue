<template>
  <section class="ecommerce-container">
    <div class="ecommerce-card">
      <div class="ecommerce-card__head">
        <div class="left">
          <h5>Livslang</h5>
          <h3>VASE</h3>
          <div class="stars">
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
            <font-awesome-icon icon="star" />
          </div>
        </div>
        <div class="right">
          <img src="../../public/lamp-png.png">
        </div>
      </div>
      <div class="colors">
        <span>Available colors</span>
        <ul>
          <li class="list-1 selected"></li>
          <li class="list-2"></li>
          <li class="list-3"></li>
          <li class="list-4"></li>
          <li class="list-5"></li>
        </ul>
      </div>
      <div class="ecommerce-card__body">
        <p>The unique shapte Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>Add to cart <font-awesome-icon icon="arrow-right" /></button>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'AccentBoxHover'
};
</script>
